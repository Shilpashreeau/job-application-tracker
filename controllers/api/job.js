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
  try {
    const job = await Job.findById(req.params.id).exec();
    console.log(job);
    if (!job)
      return next(createError({ status: 404, message: "job Not found" }));
    if (job._id.toString() !== req.job.id)
      return next(createError({ status: 401, message: "It's not your job" }));
    /* task.user.toString() is coming from job which is already in string formate i.e toString() user & req.user.id is come from payload */
    const updateIt = await Job.findByIdAndUpdate(
      req.params.id,
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

//* to delete job
 const deleteJob = async(req,res,next)=>{
  try {
    const job = await Job.findById(req.params.id).exec();
    if(!job) return next(createError({status:404, message:"user not foun"}));
    if(job.companyName.toString() !== req.user.id) return next(createError({
      status:401, message: "It's not your job"
    }));
    await Job.findByIdAndDelete(req.params.id);
    return res.status(200).json("Job deleted successfully") 
  }catch (error) {
   return  next(error)
  }

}

/*const deleteJob=async(req,res)=>{
try{


await Job.deleteOne(req.params.id)
console.log(deleteJob);

res.status(404).json({ message: 'Job not found' });
// }
// res.json(deleteJob);
}catch(error){
console.error(error);
res.status(500).json({ message: 'Server error' });
}


}*/




module.exports = {
  createJob,
  getAllJobsUCreated,
  getCurrentJob,
  updateJob,
  deleteJob,
};
