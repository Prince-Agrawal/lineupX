var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var recruterTemp= require('../model/recruter.model')

var recruterModel = mongoose.model("recruter");

var connection = require('../model/connection');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy ;

// @route POST routes/recruters/ecperience
// @desc Set experience
// @access Public

router.post('/experience', function(req, res, next) {
    
    let recruter = new recruterModel(req.body);
    recruter.save()
        .then(recruter => {
            res.status(200).json({'recruter': 'recruter added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new recruter failed');
        });
  
});

// @route PUT routes/recruters/domainDetail
// @desc Set domainDetail
// @access Public
router.put('/domainDetail', function(req, res, next) {
    
  recruterModel.findByIdAndUpdate(
    { _id: req.body._id },
    { domains : req.body.domains },
    { upsert: true },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );

});

// @route PUT routes/recruters/workDetail
// @desc Set workDetail
// @access Public

router.put('/workDetail', function(req, res, next) {
    
  recruterModel.findByIdAndUpdate(
    { _id: req.body._id },
    { hours : req.body.hours, 
      work_location : req.body.work_location },
    { upsert: true },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

// @route PUT routes/recruters/updateRecruter
// @desc Set updateRecruter
// @access Public
router.put('/updateRecruter', function(req, res, next) {
    
  var updateData = JSON.parse(JSON.stringify(req.body));
  delete updateData._id;

  recruterModel.findByIdAndUpdate(
    { _id: req.body._id },
    {
          $set: { ...updateData },
     },
    { upsert: true },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

// @route PUT routes/recruters/map
// @desc Set map
// @access Public
router.put('/map', function(req, res, next) {
    let objectId = req.body.id;
    let jobid = req.body.jobId;
    console.log(req.body);
    
    // updating the job  map section section
    recruterModel.findByIdAndUpdate(
        { _id: objectId },
        { job: {mapped : 500000, accept : 13},
         map : { job_id : jobid , add_date : today}},
        { upsert: true },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
    
});


// @route PUT routes/recruters/accept
// @desc Set accept
// @access Public
router.put('/accept', function(req, res, next) {
    let objectId = req.body.id;
    let jobid = req.body.jobId;
    console.log(req.body);
    
    // updating the job and aceept section section
    recruterModel.findByIdAndUpdate(
        { _id: objectId },
        { job: {mapped : 5000000000, accept : 103},
         accept : { job_id : jobid , add_date : today , candidate : " " , feedback : " "}},
        { upsert: true },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
    
});
module.exports = router;
