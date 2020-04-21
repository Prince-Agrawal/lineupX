const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentDetailShema = require("../common/PaymentDetail");

const ActiveJobSchema = new Schema({
  job_id: {
    type: Schema.Types.ObjectId,
    ref: "jobs",
    required: true,
  },
  assignedJob: {
    type: [Schema.Types.ObjectId],
    required: "assigned_jobs",
    default: [],
  },
  mapped_recruiter: {
    type: [Schema.Types.ObjectId],
    ref: "freelance_recruiters",
    default: [],
  },
});

const AccountManagerSchema = new Schema({
  employee_id: {
    type: Schema.Types.String,
    required: true,
  },
  register_date: {
    type: Schema.Types.Date,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  location: {
    type: Schema.Types.String,
  },
  register_company: {
    type: [Schema.Types.String],
    ref: "companies",
    default: [],
  },
  jobs: {
    type: [Schema.Types.ObjectId],
    ref: "jobs",
    default: [],
  },
  freelancer_recruiter: {
    type: [Schema.Types.ObjectId],
    ref: "freelance_recruiter",
    default: [],
  },
  payment_details: {
    type: PaymentDetailShema,
    default: {},
  },
  active_jobs: {
    type: [ActiveJobSchema],
    default: [],
  },
});

module.exports = {
  AccountManager: mongoose.model("account_manager", AccountManagerSchema),
  ActiveJob: mongoose.model("active_jobs", ActiveJobSchema),
};
