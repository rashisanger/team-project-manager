const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    getAllProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
} = require("../controllers/projectController");

// Routes
router
    .route("/")
    .get(protect, getAllProjects)
    .post(protect, createProject);

router
    .route("/:id")
    .get(protect, getProjectById)
    .put(protect, updateProject)
    .delete(protect, deleteProject);

module.exports = router;