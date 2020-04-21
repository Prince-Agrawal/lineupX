const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyRecruiterSchema = new Schema({
  organisation_id: {
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
    default: "",
  },
  designation: {
    type: Schema.Types.String,
    default: "",
  },
});

module.exports = {
  CompanyRecruiter: mongoose.model("account_manager", CompanyRecruiterSchema),
};
