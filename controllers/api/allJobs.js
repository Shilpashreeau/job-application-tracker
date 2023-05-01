const Job = require("../../models/job");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  try {
    const jobs = await Job.find({}).sort("companyName").exec();

    res.status(200).json(jobs);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
