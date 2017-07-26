


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');


const db = "mongodb://kani:kani@ds119223.mlab.com:19223/videoplayer";

mongoose.Promise= global.Promise;  

mongoose.connect(db, function(err){
    if(err){
        console.error("Error!" + err);
    }
})



router.get('',function(req, res){
    res.send("api works");
})

router.get('/', function(req, res){
    console.log('api working');})

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        }else {
            res.json(videos);
        }
    });
});

module.exports= router;