const mongoose = require("mongoose");

const RecruterSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  acc_type: {
    type: String,
  },
  year_of_exp: {
    type: Intl,
  },
  year_of_relevant_exp: {
    type: Intl,
  },
  designation: {
    type: String,
  },
  company_name: {
    type: String,
  },
  company_location: {
    type: String,
  },
  domains: {
    type: [String],
  },
  hours: {
    type: String,
  },
  work_location: {
    type: String,
  },
  job: [
    {
      mapped: {
        type: Intl,
      },
      accept: {
        type: Intl,
      },
    },
  ],

  map: [
    {
      job_id: {
        type: String,
      },
      add_date: {
        type: String,
      },
    },
  ],

  accept: [
    {
      job_id: {
        type: String,
      },
      add_date: {
        type: String,
      },
      candidate: {
        type: String,
      },
      feedback: {
        type: String,
      },
    },
  ],
});

mongoose.model("recruter", RecruterSchema);
