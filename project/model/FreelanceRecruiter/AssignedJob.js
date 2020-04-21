const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignedJobSchema = new Schema({
  acc_manager: {
    type: Schema.Types.ObjectId,
    ref: "account_manager",
    required: true,
  },
  recruiter_id: {
    type: Schema.Types.ObjectId,
    ref: "freelance_recruiter",
    required: true,
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: "job",
    required: true,
  },
  assign_date: {
    type: Schema.Types.Date,
    required: true,
  },
  start_date: {
    type: Schema.Types.Date,
  },
  close_date: {
    type: Schema.Types.Date,
  },
  status: {
    type: Schema.Types.String,
    default: "pending",
  },
  candidates: {
    type: [Schema.Types.ObjectId],
    ref: "candidates",
    default: [],
  },
  feedback: {
    type: Schema.Types.String,
  },
});

module.exports = {
  AssignedJobSchema: mongoose.model("assigned_jobs", AssignedJobSchema),
};
