const express = require("express");
const router = express.Router();

const jobsCtrl = require("../../controllers/api/job");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", jobsCtrl.createJob);
router.get("/", jobsCtrl.getAllJobsUCreated);

router.get("/:jobId", jobsCtrl.getCurrentJob);
//req.params.id
// This one for updating job
router.put("/:jobId", jobsCtrl.updateJob);

router.delete("/:jobId", jobsCtrl.deleteJob);

module.exports = router;
