import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FolderKanban,
  LogOut,
} from "lucide-react";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col p-5">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold">
          TeamFlow
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Project Manager
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FolderKanban size={18} />
          Projects
        </Link>
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;

