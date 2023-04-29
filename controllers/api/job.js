// const Order = require('../../models/order');
// // const Item = require('../../models/item');

// module.exports = {
//   cart,
//   addToCart,
//   setItemQtyInCart,
//   checkout,

// };

// // A cart is the unpaid order for a user
// async function cart(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }
// }

// // Add an item to the cart
// async function addToCart(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     await cart.addItemToCart(req.params.id);
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }

// // Updates an item's qty in the cart
// async function setItemQtyInCart(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     await cart.setItemQty(req.body.itemId, req.body.newQty);
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }
// }

// // Update the cart's isPaid property to true
// async function checkout(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     cart.onSubmit = true;
//     await cart.save();
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }

// // Return the logged in user's paid order history
// async function history(req, res) {
//     // Sort most recent orders first
//     try{
//       const orders = await Order
//         .find({ user: req.user._id, isPaid: true })
//         .sort('-updatedAt').exec();
//       res.status(200).json(orders);
//     }catch(e){
//       res.status(400).json({ msg: e.message });
//     }
  
//   }

import Job from "../../models/jobSchema";
import createError from "../";

export const createJob = async(req,res,next)=>{
const newJob= new Job({
companyName: req.body.companyName,
position: req.body.position,
source: req.body.source,
appliedOn:req.body.appliedOn,
jobStatus:req.body.jobStatus  
});
try {
const createdNewJob = await newJob.save();
return res.status(201).json(createdNewJob);   
} catch (error) {
  return next(error)  
}
}

export const getAllJobsUCreated = async(req,res,next)=>{
    try {
     const allJobs = await Job.find({});
     return res.status(200).json(allJobs)   
    } 
    catch (error) {
     return next(error)  
    }
}

/* what is moto of this class getCurrentUserTask is just to show you created or not task or show some [] when show this when you not created anytask */
export const getCurrentJob = async(req,res,next)=>{
  try {
  const currentJob = await Job.find({user: req.user.id})
  return res.status(201).json(currentJob)  
  } catch (error) {
    return next(error)
  }
}

/* @startegies */
export const updateJob = async(req,res,next)=>{
try {
const job = await Job.findById(req.params.jobId).exec();
console.log(job)
if(!job) return next(createError({status:404, message:"user Not found"}));
if(job._id.toString() !== req.job.id) return next(createError({status:401, message: "It's not your user"}));
/* task.user.toString() is coming from task which is already in string formate i.e toString() user & req.user.id is come from payload */
const updateIt = await Job.findByIdAndUpdate(req.params.jobId,{
  status: req.body.status,
 
},{new:true})
return res.status(200).json(updateIt)  
} catch (error) {
   return next(error);
}
}

export const deleteJob = async(req,res,next)=>{
  try {
    const job = await Job.findById(req.params.jobId).exec();
    if(!job) return next(createError({status:404, message:"user not found"}));
    if(job.companyName.toString() !== req.companyName.id) return next(createError({
      status:401, message: "It's not your task"
    }));
    await Job.findByIdAndDelete(req.params.jobId);
    return res.status(200).json("Task deleted successfully") 
  }catch (error) {
   return  next(error)
  }

}


