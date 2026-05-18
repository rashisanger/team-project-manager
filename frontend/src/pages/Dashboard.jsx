import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import ProjectCard from "../components/ProjectCard";

import API from "../api/axios";

import { Plus } from "lucide-react";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");

      setProjects(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Create project
  const handleCreateProject = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/projects",
        formData
      );

      // Optimistic UI update
      setProjects((prev) => [...prev, data]);

      setFormData({
        title: "",
        description: "",
      });

      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete project
  const handleDeleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);

      // Remove instantly from UI
      setProjects((prev) =>
        prev.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all your projects
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <form
          onSubmit={handleCreateProject}
          className="card mb-8 space-y-4"
        >
          <input
            type="text"
            placeholder="Project title"
            className="input"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            required
          />

          <textarea
            placeholder="Description"
            className="input h-28 py-3"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <button className="btn-primary">
            Create Project
          </button>
        </form>
      )}

      {/* Loading */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="card h-40 animate-pulse"
            />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="card text-center py-16">
          <h2 className="text-xl font-semibold mb-2">
            No Projects Yet
          </h2>

          <p className="text-slate-500">
            Create your first project to get started.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;

