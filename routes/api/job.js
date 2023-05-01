const express = require("express");
const router = express.Router();

const jobsCtrl = require("../../controllers/api/job");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", jobsCtrl.createJob);
router.get("/all", jobsCtrl.getAllJobsUCreated);

router.get("/myjob", jobsCtrl.getCurrentJob);

// This one for upadating job
router.put("/:jobId", jobsCtrl.updateJob);

router.delete("/:jobId", jobsCtrl.deleteJob);

module.exports = router;
