import {
  useEffect,
  useState,
} from "react";

import Layout from "../components/Layout";

import ProjectCard from "../components/ProjectCard";

import API from "../api/axios";

import { Plus } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] =
    useState([]);

  const [showForm, setShowForm] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
    });

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get(
        "/projects"
      );

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Create project
  const handleCreateProject =
    async (e) => {
      e.preventDefault();

      try {
        const { data } =
          await API.post(
            "/projects",
            formData
          );

        setProjects((prev) => [
          data,
          ...prev,
        ]);

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
  const handleDeleteProject =
    async (id) => {
      try {
        await API.delete(
          `/ projects / ${ id } `
        );

        setProjects((prev) =>
          prev.filter(
            (project) =>
              project._id !== id
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Projects
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all your projects
          </p>
        </div>

        <button
          onClick={() =>
            setShowForm(!showForm)
          }
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={
            handleCreateProject
          }
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
              formData.description
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                description:
                  e.target.value,
              })
            }
          />

          <button className="btn-primary">
            Create Project
          </button>
        </form>
      )}

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onDelete={
              handleDeleteProject
            }
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

