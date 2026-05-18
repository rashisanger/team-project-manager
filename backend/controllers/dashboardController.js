const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboardStats = async (
    req,
    res
) => {
    try {
        // User projects
        const projects = await Project.find({
            owner: req.user._id,
        });

        const projectIds = projects.map(
            (project) => project._id
        );

        // Tasks belonging to user's projects
        const tasks = await Task.find({
            project: {
                $in: projectIds,
            },
        });

        const stats = {
            totalProjects:
                projects.length,

            totalTasks: tasks.length,

            todoTasks: tasks.filter(
                (task) =>
                    task.status === "todo"
            ).length,

            inProgressTasks:
                tasks.filter(
                    (task) =>
                        task.status ===
                        "in-progress"
                ).length,

            completedTasks: tasks.filter(
                (task) =>
                    task.status === "done"
            ).length,
        };

        res.json(stats);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message:
                "Failed to fetch dashboard stats",
        });
    }
};

module.exports = {getDashboardStats,};