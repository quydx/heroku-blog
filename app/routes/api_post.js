
'use strict';

var express = require('express');
var router = express.Router();

var Post = require('../model/post');

router.get('/all', function (req, res, next) {
    var $new_posts = Post.find({}).limit(6).sort({_id:'desc'});
	$new_posts.then(rows => {
		res.json(rows);
	}).catch(err => {
		res.json({status: "error", msg: "Khong lay duoc du lieu"});
})
});

router.get('/trending', function (req, res, next) {
  var $new_posts = Post.find({}).limit(6).sort({view:'desc'});
	$new_posts.then((rows) => {
	res.json(rows);
}).catch(err => {
	res.json({status: "error"})
})
});

router.get('/detail/:id', function (req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        if(err)
            res.json({status: 'error', msg: 'Không lấy được dữ liệu'});
        else
            res.json(post);
    });
});


router.get('/related/:id', function (req, res, next) {
    var $new_posts = Post.find({}).limit(6).sort({view:'desc'});
    $new_posts.exec(function (err, rows) {
        if(err)
            res.json({status: 'error', msg: 'Không lấy được dữ liệu'});
        else
            res.json(rows);
    });
});

module.exports = router;
