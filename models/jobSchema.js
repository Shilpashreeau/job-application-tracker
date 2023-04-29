const mongoose=require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    position: { type: String, required: true },

    source: {
      type: String,
      required: true,
    },

    appliedOn: {
      type: Date,
      required: true,
      default: Date.now
    },

    jobStatus: {
      type: String,
      required: true,
    },
   
  },

  {
    timestamps: true,
  }
);
const Job = mongoose.model('Job', jobSchema);

 module.exports = Job;
