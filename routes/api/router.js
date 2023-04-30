// const express = require('express');
// const router = express.Router();
// // const itemsCtrl = require('../../controllers/api/allJobs');
// const jobs = require("../../models/jobSchema");

// //add job
// router.post("/register",async(req,res)=>{
//     // console.log(req.body);
//     const {companyName,source,appliedOn,jobStatus} = req.body;

//     if(!companyName || !source || !appliedOn || !jobStatus){
//         res.status(422).json("plz fill the data");
//     }
//     })


// // get jobsdata

// router.get("/getajob",async(req,res)=>{
//     try {
//         const jobdata = await jobs.find();
//         res.status(201).json(jobdata)
//         console.log(jobdata);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

// // get individual job

// router.get("/getajob/:id",async(req,res)=>{
//     try {
//         console.log(req.params);
//         const {id} = req.params;

//         const individualJob = await jobs.findById({_id:id});
//         console.log(individualJob);
//         res.status(201).json(individualJob)

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// // update job

// router.patch("/updatejob/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const updateJob = await jobs.findByIdAndUpdate(id,req.body,{
//             new:true
//         });

//         console.log(updateJob);
//         res.status(201).json(updateJob);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// // delete job
// router.delete("/deletejob/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const deleteJob = await jobs.findByIdAndDelete({_id:id})
//         console.log(deleteJob);
//         res.status(201).json(deleteJob);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })





// module.exports = router;