import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const { isAuthenticated } =
    useContext(AuthContext);

  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      

      {/* Protected Project Detail */}
      <Route
        path="/projects/:id"
        element={
          <ProtectedRoute>
            <ProjectDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;