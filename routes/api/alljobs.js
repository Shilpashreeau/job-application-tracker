const express = require("express");
const router = express.Router();
const allJobsCtrl = require("../../controllers/api/allJobs");

// GET /api/jobs
router.get("/", allJobsCtrl.index);
// GET /api/jobs/:id
router.get("/:id", allJobsCtrl.show);

module.exports = router;
