import {useEffect,useState,} from "react";

import { useParams } from "react-router-dom";

import Layout from "../components/Layout";

import TaskCard from "../components/TaskCard";

import API from "../api/axios";

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] =
    useState(null);

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [taskForm, setTaskForm] =
    useState({
      title: "",
      description: "",
    });

  // Load project + tasks
  useEffect(() => {
    fetchProject();

    fetchTasks();
  }, []);

  // Fetch project
  const fetchProject = async () => {
    try {
      const { data } = await API.get(
        `/projects/${id}`
      );

      setProject(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const { data } = await API.get(
        `/tasks/project/${id}`
      );

      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Create task
  const handleCreateTask = async (
    e
  ) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/tasks",
        {
          ...taskForm,
          projectId: id,
          status: "todo",
        }
      );

      // Optimistic UI
      setTasks((prev) => [...prev, data]);

      setTaskForm({
        title: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete task
  const handleDeleteTask = async (
    taskId
  ) => {
    try {
      await API.delete(
        `/tasks/${taskId}`
      );

      // Remove instantly
      setTasks((prev) =>
        prev.filter(
          (task) =>
            task._id !== taskId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Update status
  const handleStatusChange =
    async (taskId, status) => {
      try {
        const { data } = await API.put(
          `/tasks/${taskId}`,
          { status }
        );

        // Update instantly
        setTasks((prev) =>
          prev.map((task) =>
            task._id === taskId
              ? data
              : task
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  // Group tasks
  const todoTasks = tasks.filter(
    (task) =>
      task.status === "todo"
  );

  const progressTasks =
    tasks.filter(
      (task) =>
        task.status ===
        "in-progress"
    );

  const doneTasks = tasks.filter(
    (task) =>
      task.status === "done"
  );

  if (loading) {
    return (
      <Layout>
        <div className="card h-40 animate-pulse" />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Project Info */}
      <div className="card mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          {project?.title}
        </h1>

        <p className="text-slate-500 mt-3">
          {project?.description}
        </p>
      </div>

      {/* Add Task */}
      <form
        onSubmit={handleCreateTask}
        className="card mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold">
          Add Task
        </h2>

        <input
          type="text"
          placeholder="Task title"
          className="input"
          value={taskForm.title}
          onChange={(e) =>
            setTaskForm({
              ...taskForm,
              title:
                e.target.value,
            })
          }
          required
        />

        <textarea
          placeholder="Description"
          className="input h-24 py-3"
          value={
            taskForm.description
          }
          onChange={(e) =>
            setTaskForm({
              ...taskForm,
              description:
                e.target.value,
            })
          }
        />

        <button className="btn-primary">
          Create Task
        </button>
      </form>

      {/* Task Columns */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Todo */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-lg">
              Todo
            </h2>

            <span className="badge-todo">
              {todoTasks.length}
            </span>
          </div>

          <div className="space-y-4">
            {todoTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={
                  handleDeleteTask
                }
                onStatusChange={
                  handleStatusChange
                }
              />
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-lg">
              In Progress
            </h2>

            <span className="badge-in-progress">
              {progressTasks.length}
            </span>
          </div>

          <div className="space-y-4">
            {progressTasks.map(
              (task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDelete={
                    handleDeleteTask
                  }
                  onStatusChange={
                    handleStatusChange
                  }
                />
              )
            )}
          </div>
        </div>

        {/* Done */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-lg">
              Done
            </h2>

            <span className="badge-done">
              {doneTasks.length}
            </span>
          </div>

          <div className="space-y-4">
            {doneTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={
                  handleDeleteTask
                }
                onStatusChange={
                  handleStatusChange
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

