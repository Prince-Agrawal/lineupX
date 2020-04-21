const mongoose = require("mongoose");
const Schema = mongoose.Schema;




module.exports = {
  AccountManager: mongoose.model("account_manager", AccountManagerSchema),
  ActiveJob: mongoose.model("active_jobs", ActiveJobSchema),
};
