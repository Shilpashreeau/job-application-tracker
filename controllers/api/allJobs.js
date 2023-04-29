// const Job = require('../../models/job');

// module.exports = {
//   index,
//   show
// };

// async function index(req, res) {
//   try{
//     const items = await Job.find({}).sort('name').exec();
   
   
//     res.status(200).json(items);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }
// }

// async function show(req, res) {
//   try{
//     const item = await Job.findById(req.params.id);
//     res.status(200).json(item);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }