'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get ('/puppies' , (req, res, next) => {
  knex('puppies')
    .then((puppies) => {
      res.send(puppies);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
