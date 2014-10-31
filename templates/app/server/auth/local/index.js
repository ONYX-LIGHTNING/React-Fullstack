'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) {
      // TODO: Alert user that their info is incorrect and possibly redirect
      console.log('User email or password incorrect!');
      return res.json(401, error);
    }
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});
    var token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next)
});

module.exports = router;