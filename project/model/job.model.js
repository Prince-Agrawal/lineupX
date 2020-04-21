const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdateSchema = new Schema({
  date: {
    type: Schema.Types.String,
    required: true,
  },
  message: {
    type: [Schema.Types.String],
    required: true,
  },
  updater_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const JobSchema = new Schema({
  job_id: {
    type: Schema.Types.String,
    required: true,
  },
  creator_id: {
    type: Schema.Types.String,
    ref: "user",
    required: true,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  created_date: {
    type: Schema.Types.String,
    required: true,
  },
  candidate_type: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  department: {
    type: Schema.Types.String,
    required: true,
  },
  location: {
    type: Schema.Types.String,
    required: true,
  },
  job_shift: {
    type: Schema.Types.String,
    required: true,
  },
  functional_area: {
    type: Schema.Types.String,
    required: true,
  },
  job_openings: {
    type: Schema.Types.Number,
    required: true,
  },
  experience_level: {
    type: Schema.Types.String,
    required: true,
  },
  skills: {
    type: [Schema.Types.String],
    required: true,
  },
  additional_skills: {
    type: [Schema.Types.String],
    required: true,
  },
  min_salary: {
    type: Schema.Types.Number,
    required: true,
  },
  max_salary: {
    type: Schema.Types.Number,
    required: true,
  },
  job_description: {
    type: Schema.Types.String,
    required: true,
  },
  skill_description: {
    type: Schema.Types.String,
    required: true,
  },
  stages: {
    type: [Schema.Types.String],
    required: true,
  },
  collaborators: {
    type: [Schema.Types.String],
    required: true,
  },
  interviewers: {
    type: [Schema.Types.String],
    required: true,
  },
  hiring_managers: {
    type: [Schema.Types.String],
    required: true,
  },
  updates: {
    type: [UpdateSchema],
    default: [],
  },
});

module.exports = {
  Job: mongoose.model("job", JobSchema),
  UpdateJob: mongoose.model("updateJob", UpdateSchema),
};
