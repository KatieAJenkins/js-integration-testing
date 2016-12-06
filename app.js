'use strict';

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const puppies = require('./routes/puppies');
app.use('/puppies' , puppies);

app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');
app.use(express.static(path.join('public')));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});

module.exports = app;
