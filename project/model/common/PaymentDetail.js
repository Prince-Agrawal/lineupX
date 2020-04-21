const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
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
});

const PaymentDetailSchema = new Schema({
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
    type: [TransactionSchema],
    required: true,
  },
});

module.exports = {
  PaymentDetail: mongoose.model("payment_detail", PaymentDetailSchema),
  Transaction: mongoose.model("transaction", TransactionSchema),
};
