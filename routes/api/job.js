// const express = require('express');
// const router = express.Router();
// const ordersCtrl = require('../../controllers/api/addJobs');

// // GET /api/orders/cart
// router.get('/cart', ordersCtrl.cart);
// // GET /api/orders/history
// router.get('/alljobs', ordersCtrl.history);
// //*???????????????????????????????????????????/
// // POST /api/orders/cart/checkout
// router.post('/cart/checkout', ordersCtrl.checkout);


// module.exports = router;
import express from "express";
const router = express.Router();
import { createJob, deleteJob, getCurrentJob,updateJob,getAllJobsUCreated } from "../../controllers/api/job";

router.post("/", createJob); //without createJob getCurrentUserJobShow []
router.get("/all", getAllJobsUCreated)

router.get("/myjob", getCurrentJob);

// This one for upadating job
router.put("/:jobId", updateJob);

router.delete("/:jobId", deleteJob);





export default router;