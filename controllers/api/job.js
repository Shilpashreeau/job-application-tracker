const Job = require("../../models/jobSchema");

const createError = require("../../utils/createError");
//* function to create job in db
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
    console.log(createdNewJob);
    return res.status(201).json(createdNewJob);
  } catch (error) {
    return next(error);
  }
};

//* to get all the jobs

const getAllJobsUCreated = async (req, res, next) => {
  try {
    const allJobs = await Job.find({});
    return res.status(200).json(allJobs);
  } catch (error) {
    return next(error);
  }
};

//* to get current job
const getCurrentJob = async (req, res, next) => {
  try {
    const currentJob = await Job.findById(req.params.id);
    return res.status(201).json(currentJob);
  } catch (error) {
    return next(error);
  }
};
//* to update job (based on check box status)
const updateJob = async (req, res, next) => {
  console.log(req.params.jobId);
  console.log("inside updatejob");
  try {
    // const job = await Job.findByIdAndUpdate(req.params.id).exec();
    // console.log(job);
    // if (!job)
    //   return next(createError({ status: 404, message: "job Not found" }));
    // if (job._id.toString() !== req.job.id)
    //   return next(createError({ status: 401, message: "It's not your job" }));
    /* task.user.toString() is coming from job which is already in string formate i.e toString() user & req.user.id is come from payload */
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.jobId,
      {
        jobStatus: false,
      },
      { new: true }
    );
    console.log(updatedJob);
    return res.status(200);
  } catch (error) {
    return next(error);
  }
};

//* to delete job
const deleteJob = async (req, res, next) => {
  try {
    console.log(req.params.jobId);
    await Job.findByIdAndDelete(req.params.jobId);
    return res.status(200).json("Job deleted successfully");
  } catch (error) {
    console.log(error);
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
