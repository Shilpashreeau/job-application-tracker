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
const express = require('express');
const router = express.Router();
// import { createJob, deleteJob, getCurrentJob,updateJob,getAllJobsUCreated } from "../../controllers/api/job";
const usersCtrl = require('../../controllers/api/job');
router.post("/",usersCtrl.createJob); //without createJob getCurrentUserJobShow []
router.get("/all", usersCtrl.getAllJobsUCreated)

router.get("/myjob",usersCtrl.getCurrentJob);

// This one for upadating job
router.put("/:jobId", usersCtrl.updateJob);

router.delete("/:jobId",usersCtrl.deleteJob);





module.exports= router;