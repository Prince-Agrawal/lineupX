const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  job_id: {
    type: Schema.Types.ObjectId,
  },
  candidate_id: {
    type: Schema.Types.ObjectId,
  },
  submit_date: {
    type: Schema.Types.Date,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  feedback: {
    type: [Schema.Types.String],
    required: true,
  },
  interview_date: {
    type: Schema.Types.Date,
  },
  offered_date: {
    type: Schema.Types.Date,
  },
});

module.exports = {
  Candidate: mongoose.model("candidates", CandidateSchema),
};
