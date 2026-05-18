import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../components/Layout";

import API from "../api/axios";

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const { data } = await API.get(
        `/projects/${id}`
      );

      setProject(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="card animate-pulse h-40" />
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="card">
          Project not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="card">
        <h1 className="text-3xl font-semibold">
          {project.title}
        </h1>

        <p className="text-slate-500 mt-4">
          {project.description}
        </p>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

