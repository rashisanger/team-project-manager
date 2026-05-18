import { Trash2, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const ProjectCard = ({ project, onDelete }) => {
    return (
        <div className="card hover:shadow-md">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold">
                        {project.title}
                    </h2>

                    <p className="text-slate-500 mt-2 text-sm">
                        {project.description}
                    </p>
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault();

                        onDelete(project._id);
                    }}
                    className="text-red-500 hover:text-red-600"
                >
                    <Trash2 size={18} />
                </button>
            </div>

            <Link
                to={`/projects/${project._id}`}
                className="mt-5 inline-flex items-center gap-2 text-indigo-600 font-medium"
            >
                Open Project
                <ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ProjectCard;