const Task = require("../models/Task");

// GET TASKS BY PROJECT
const getTasksByProject = async (req, res) => {
    try {
        const tasks = await Task.find({
            project: req.params.projectId,
        });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// CREATE TASK
const createTask = async (req, res) => {
    try {
        const { title, description, project } = req.body;

        const task = await Task.create({
            title,
            description,
            project,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE TASK
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        task.title = req.body.title || task.title;

        task.description =
            req.body.description || task.description;

        task.status = req.body.status || task.status;

        const updatedTask = await task.save();

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE TASK
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        await task.deleteOne();

        res.status(200).json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getTasksByProject,
    createTask,
    updateTask,
    deleteTask,
};