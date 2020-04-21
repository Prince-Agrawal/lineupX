var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const {
  Company,
  Acc_settings,
  Template,
  Feedback,
  Transactions,
  Company_recruiter,
  Account_manager,
  Notification,
} = require("../../model/company.model");

var connection = require("../../model/connection");

const currentDate = require("../utilis/currentDate");

// @route POST job
// @desc Register company info
// @access Public
router.put("/", function (req, res, next) {
  var newCompany_info = new Company(req.body);
  newCompany_info.register_date = currentDate();
  newCompany_info.status = "Not Approved";

  newCompany_info
    .save((err, room) => {
      Company_recruiter.findOneAndUpdate(
        { _id: "5e9d20757fb2ff2aa0e647cf" },
        {
          $set: {
            organisation_id: room._id,
            phone_no: req.body.phone_no,
            designation: req.body.designation,
          },
        },
        { new: true }
      )
        .then((job) => {
          res.json({ status: "success", error: null, data: job });
        })
        .catch((err) => {
          res.json({ status: "error", error: err, data: null });
        });

      Account_manager.findOneAndUpdate(
        { _id: "5e9e6ab8022fe6368c1fcc0b" },
        { $push: { register_organisation: room._id } },
        { new: true }
      )
        .then((job) => {
          res.json({ status: "success", error: null, data: job });
        })
        .catch((err) => {
          res.json({ status: "error", error: err, data: null });
        });
    })
    .then((recruter) => {
      res.status(200).json({ recruter: "recruter added successfully" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// @route POST job
// @desc Register company info
// @access Public
router.put("/update", function (req, res, next) {
  const notificationInfo = new Notification({
    push_notification: req.body.push_notification,
    push_email: req.body.push_email,
  });
  var acc_settingsInfo;
  if ((req.body.type = "notify_schedule_interview")) {
    acc_settingsInfo = new Acc_settings({
      notify_schedule_interview: notificationInfo,
    });
  } else if ((req.body.type = "notify_rejected_candidate")) {
    acc_settingsInfo = new Acc_settings({
      notify_rejected_candidate: notificationInfo,
    });
  } else if ((req.body.type = "notify_offered_candidate")) {
    acc_settingsInfo = new Acc_settings({
      notify_offered_candidate: notificationInfo,
    });
  } else if ((req.body.type = "notify_onHold_candidate")) {
    acc_settingsInfo = new Acc_settings({
      notify_onHold_candidate: notificationInfo,
    });
  } else if ((req.body.type = "send_feedback")) {
    acc_settingsInfo = new Acc_settings({
      send_feedback: notificationInfo,
    });
  }

  Company.findOneAndUpdate(
    { _id: "5e9e85be77aea924f8f9eb49" },
    {
      $set: {
        acc_setting: acc_settingsInfo,
        feedback: [],
        template: {
          interview_stages: [],
          interview_schedule_email: [],
          acceptance_email: [],
          rejection_email: [],
          offerred_email: [],
          feedback_email: [],
        },
      },
    },
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
