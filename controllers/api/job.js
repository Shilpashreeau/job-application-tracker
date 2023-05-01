const Job = require("../../models/jobSchema");

const createError = require("../../utils/createError");

const createJob = async (req, res, next) => {
  const newJob = new Job({
    companyName: req.body.companyName,
    position: req.body.position,
    source: req.body.source,
    appliedOn: req.body.appliedOn,
    jobStatus: req.body.jobStatus,
  });
  try {
    const createdNewJob = await newJob.save();
    return res.status(201).json(createdNewJob);
  } catch (error) {
    return next(error);
  }
};

const getAllJobsUCreated = async (req, res, next) => {
  try {
    const allJobs = await Job.find({});
    return res.status(200).json(allJobs);
  } catch (error) {
    return next(error);
  }
};

const getCurrentJob = async (req, res, next) => {
  try {
    const currentJob = await Job.find({ user: req.user.id });
    return res.status(201).json(currentJob);
  } catch (error) {
    return next(error);
  }
};

const updateJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.jobId).exec();
    console.log(job);
    if (!job)
      return next(createError({ status: 404, message: "user Not found" }));
    if (job._id.toString() !== req.job.id)
      return next(createError({ status: 401, message: "It's not your user" }));
    /* task.user.toString() is coming from job which is already in string formate i.e toString() user & req.user.id is come from payload */
    const updateIt = await Job.findByIdAndUpdate(
      req.params.jobId,
      {
        status: req.body.status,
      },
      { new: true }
    );
    return res.status(200).json(updateIt);
  } catch (error) {
    return next(error);
  }
};

const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.jobId).exec();
    if (!job)
      return next(createError({ status: 404, message: "user not found" }));
    if (job.companyName.toString() !== req.companyName.id)
      return next(
        createError({
          status: 401,
          message: "It's not your task",
        })
      );
    await Job.findByIdAndDelete(req.params.jobId);
    return res.status(200).json("Task deleted successfully");
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createJob,
  getAllJobsUCreated,
  getCurrentJob,
  updateJob,
  deleteJob,
};
