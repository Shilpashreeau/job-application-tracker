const Schema = require("mongoose").Schema;

const jobSchema = new Schema(
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

module.exports = jobSchema;
