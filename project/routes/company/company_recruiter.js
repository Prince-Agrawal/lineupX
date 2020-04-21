var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const { Company , Acc_settings, Template, Feedback, Transactions, Company_recruiter, Account_manager } = require("../../model/company.model");

var connection = require('../../model/connection');

const currentDate = require("../utilis/currentDate");

// @route POST job
// @desc Register company recruter
// @access Public
router.post('/', function(req, res, next) {

        var newCompany_recruter = new Company_recruiter(req.body);
        newCompany_recruter.save()
        .then(recruter => {
            res.status(200).json({'recruter': 'recruter added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new recruter failed');
        });  
    
});

module.exports = router;
