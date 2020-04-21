const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentDetailShema = require("../common/PaymentDetail");

const NotificationSchema = new Schema({
  push_notification: {
    type: Schema.Types.Boolean,
    required: true,
  },
  push_email: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const AccountSettingsSchema = new Schema({
  notify_schedule_interview: {
    type: NotificationSchema,
    default: {},
  },
  notify_rejected_candidate: {
    type: NotificationSchema,
    default: {},
  },
  notify_offered_candidate: {
    type: NotificationSchema,
    default: {},
  },
  notify_onHand_candidate: {
    type: NotificationSchema,
    default: {},
  },
  send_feedback: {
    type: notificationSchema,
    default: {},
  },
});

const TemplateSchema = new Schema({
  interview_stages: {
    type: [Schema.Types.Array],
    required: true,
  },
  interview_schedule_email: {
    type: [Schema.Types.Array],
    required: true,
  },
  acceptance_email: {
    type: [Schema.Types.Array],
    required: true,
  },
  rejection_email: {
    type: [Schema.Types.Array],
    required: true,
  },
  offerred_email: {
    type: [Schema.Types.Array],
    required: true,
  },

  feedback_email: {
    type: [Schema.Types.Array],
    required: true,
  },
});

const FeedbackSchema = new Schema({
  job_id: {
    type: Schema.Types.String,
    required: true,
  },
  candidate_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  post_date: {
    type: Schema.Types.Date,
    required: true,
  },
  data: {
    type: collection,
    required: true,
  },
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
    ref: "comoany_recruiter",
    required: true,
  },
  acc_manager: {
    type: Schema.Types.ObjectId,
    ref: "account_manager",
  },
  acc_setting: {
    type: AccountSettingsSchema,
  },
  feedback: {
    type: [FeedbackSchema],
  },
  template: {
    type: TemplateSchema,
  },
  payment_details: {
    type: PaymentDetailShema,
  },
  jobs: {
    type: [Schema.Types.ObjectId],
    ref: "jobs",
  },
});

module.exports = {
  Company: mongoose.model("company", CompanySchema),
};
