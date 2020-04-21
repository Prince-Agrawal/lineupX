var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const { Job, UpdateJob } = require("../model/job.model");

var connection = require('../model/connection');

const currentDate = require("./utilis/currentDate");



// @route POST job
// @desc Register new Job
// @access Public
router.post("/", async (req, res) => {
  const {
    companyName,
    creator_id,
    candidate_type,
    title,
    department,
    location,
    job_shift,
    functional_area,
    job_openings,
    experience_level,
    skills,
    additional_skills,
    min_salary,
    max_salary,
    job_description,
    skill_description,
  } = req.body;

  var job_id = 0;
  await Job.estimatedDocumentCount({}, (err, count) => {
    if (err) {
      res.json({ status: "error", error: err, data: null });
    }
    count = count + 1;
    job_id = job_id + count;
  });

  job_id = companyName + String(job_id).padStart(8, "0");

  const newJob = new Job({
    job_id,
    creator_id,
    status: "pending",
    created_date: currentDate(),
    candidate_type,
    title,
    department,
    location,
    job_shift,
    functional_area,
    job_openings,
    experience_level,
    skills,
    additional_skills,
    min_salary,
    max_salary,
    job_description,
    skill_description,
    stages: [],
    collaborators: [],
    interviewers: [],
    hiring_managers: [],
    updates: [],
  });

  newJob
    .save()
    .then((job) => {
      res.json({ status: "success", error: null, data: job });
    })
    .catch((err) => {
      res.json({ status: "error", error: err, data: null });
    });
});

// @route PUT job/setStage
// @desc Set Interview Stages
// @access Public
router.put("/setStages", async (req, res) => {
  Job.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { stages: req.body.stages } },
    { new: true }
  )
    .then((job) => {
      res.json({ status: "success", error: null, data: job });
    })
    .catch((err) => {
      res.json({ status: "error", error: err, data: null });
    });
});

// @route PUT job/setTeam
// @desc Set Hiring Team
// @access Public
router.put("/setTeam", async (req, res) => {
  Job.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        status: "open",
        collaborators: req.body.collaborators,
        interviewers: req.body.interviewers,
        hiring_managers: req.body.hiring_managers,
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

// @route PUT job/updateJob
// @desc Update Existing Job
// @access Public
router.put("/updateJob", async (req, res) => {
  var updateData = JSON.parse(JSON.stringify(req.body));
  delete updateData._id;
  updateData.status = "open update";

  Job.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: { ...updateData },
    }
  )
    .then((_) => {
      var fieldsName = Object.keys(updateData);
      fieldsName = fieldsName.filter(
        (item) => item !== "status" && item !== "updater_id"
      );

      const updatedFieldInfo = new UpdateJob({
        date: currentDate(),
        message: fieldsName.join(","),
        updater_id: req.body.updater_id,
      });

      Job.findOneAndUpdate(
        { _id: req.body._id },
        { $push: { updates: updatedFieldInfo } },
        { new: true }
      )
        .then((job) => {
          res.json({ status: "success", error: null, data: job });
        })
        .catch((err) => {
          res.json({ status: "error", error: err, data: null });
        });
    })
    .catch((err) => {
      res.json({ status: "error", error: err, data: null });
    });
});

module.exports = router;
