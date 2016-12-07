'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get ('/puppies' , (req, res, next) => {
  knex('puppies')
    .orderBy('name')
    .then((puppies) => {
      res.send(puppies);
      console.log(puppies);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
