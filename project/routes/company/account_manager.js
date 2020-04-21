var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const { Company , Acc_settings, Template, Feedback, Transactions, Company_recruiter, Account_manager } = require("../../model/company.model");

var connection = require('../../model/connection');

const currentDate = require("../utilis/currentDate");


// @route POST job
// @desc Register company info
// @access Public
router.put('/', function(req, res, next) {
    Company.findOneAndUpdate(
        { _id: "5e9e7abc5bb91f4a5c75c563" },
        { $set: { status : req.body.status} },
        { new: true }
      )
        .then((job) => {
          res.json({ status: "success", error: null, data: job });
        })
        .catch((err) => {
          res.json({ status: "error", error: err, data: null });
        });
});

module.exports = router;
