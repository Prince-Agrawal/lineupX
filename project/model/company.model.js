const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionsSchema = new Schema({
  txn_id: {
    type: Schema.Types.String,
    required: true,
  },
 amount: {
   type: Schema.Types.Number,
   required: true,
 },
 date: {
   type: Schema.Types.Date,
   required: true,
 },
 reason: {
   type: Schema.Types.String,
   required: true,
 },
 credit_acc_no: {
  type: Schema.Types.String,
  required: true,
},
})

const payment_detailsSchema = new Schema({
 name: {
   type: Schema.Types.String,
   required: true,
 },
account_no: {
  type: Schema.Types.String,
  required: true,
},
IFSC_code: {
  type: Schema.Types.String,
  required: true,
},
transactions: {
  type: [transactionsSchema],
  required: true,
},
})

const companyRecruiterSchema = new Schema({
  organisation_id : {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  phone_no: {
    type: Schema.Types.String,
  },
  designation: {
    type: Schema.Types.String,
  },
});

const candidatesSchema = new Schema({
  job_id : {
    type: Schema.Types.ObjectId,
  },
  candidate_id : {
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

const active_jobsSchema = new Schema({
  job_id : {
    type: Schema.Types.ObjectId,
  },
  assigned_recruiters : {
    type: [Schema.Types.ObjectId],
  },
  mapped_recruiters: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
});

const account_managerSchema = new Schema({
  employee_id : {
    type: Schema.Types.ObjectId,
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
  register_organisation: {
    type: [Schema.Types.String],
  },
  jobs: {
    type: [Schema.Types.ObjectId],
  },
  freelancer_recruiter: {
    type: [Schema.Types.ObjectId],
  },
  candidates: {
    type: [candidatesSchema],
  },
  payment_details: {
    type: payment_detailsSchema,
  },
  active_jobs: {
    type: [active_jobsSchema],
  },
});

const notificationSchema = new Schema({
  push_notification : {
    type: Schema.Types.Boolean,
    required: true,
  },
  push_email : {
    type: Schema.Types.Boolean,
    required: true,
  },
});


const acc_settingSchema = new Schema({
  notify_schedule_interview : {
    type: notificationSchema,
    required: true,
  },
  notify_rejected_candidate : {
    type: notificationSchema,
    required: true,
  },
  notify_offered_candidate : {
    type: notificationSchema,
    required: true,
  },
  notify_onHand_candidate : {
    type: notificationSchema,
    required: true,
  },
  send_feedback : {
    type: notificationSchema,
    required: true,
  },
});

const templateSchema = new Schema({
    interview_stages : {
      type: [Schema.Types.Array],
      required: true,
    },
    interview_schedule_email : {
      type: [Schema.Types.Array],
      required: true,
    },
    acceptance_email : {
      type: [Schema.Types.Array],
      required: true,
    },
    rejection_email : {
      type: [Schema.Types.Array],
      required: true,
    },
    offerred_email : {
      type: [Schema.Types.Array],
      required: true,
    },

    feedback_email : {
      type: [Schema.Types.Array],
      required: true,
    },
    
  });

const feedbackSchema = new Schema({
    job_id : {
      type: Schema.Types.String,
    },
    candidate_id : {
      type: Schema.Types.ObjectId,
    },
    post_date : {
      type: Schema.Types.Date,
      required: true,
    },
    // data : {
    //   type: collection,
    //   required: true,
    // },
    
  });

 

const CompanySchema = new Schema({
  register_date: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  license_no: {
    type: Schema.Types.Mixed,
    required: true,
  },
  official_name: {
    type: Schema.Types.String,
    required: true,
  },
  public_name: {
    type: Schema.Types.String,
    required: true,
  },
  
  company_type: {
    type: Schema.Types.String,
    required: true,
  },
  employee_count: {
    type: Schema.Types.String,
    required: true,
  },
  offices: {
    type: Schema.Types.Array,
    required: true,
  },
  details: {
    type: Schema.Types.String,
    required: true,
  },
  logo_url: {
    type: Schema.Types.String,
    required: true,
  },
  recruter_id: {
    type: Schema.Types.String,
    ref: "users",
    required: true,
  },
  acc_manager: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  acc_setting: {
    type: acc_settingSchema,
  },
  feedback: {
    type: [feedbackSchema],
  },
  template: {
    type: templateSchema,
  },
  payment_details: {
    type: payment_detailsSchema,
  },
  jobs: {
    type: [Schema.Types.ObjectId],
  },  
});

module.exports = {
  Company: mongoose.model("company", CompanySchema),
  Acc_settings: mongoose.model("acc_setting", acc_settingSchema),
  Template: mongoose.model("template", templateSchema),
  Feedback: mongoose.model("feedback", feedbackSchema),
  Transactions: mongoose.model('transaction', transactionsSchema),
  Company_recruiter: mongoose.model('company_recruiter', companyRecruiterSchema),
  Account_manager: mongoose.model('account_manager' , account_managerSchema),
  Notification: mongoose.model('notification' , notificationSchema),

};
