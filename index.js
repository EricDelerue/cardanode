const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');

const db = require('./database');
const runTests = require('./index.test.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(express.static('public'));

app.get('/', (req, res) => {
  const testResult = runTests();
  logger.info('testResult: ', testResult);
  res.json(testResult);
});
*/

app.use(express.static(__dirname + '/'));

app.get('/portfolios', async (req, res, next) => {
  try {
    const testResult = await runTests();
    logger.info('testResult: ', testResult);
    res.json(testResult);
  } catch (e) {
    //this will eventually be handled by the error handling middleware
    next(e);
  }
});

app.get('/portfolios/:currency', async (req, res, next) => {
  try {
    const currency = req.params.currency;
    const testResult = await runTests(currency);
    logger.info('testResult: ', testResult);
    res.json(testResult);
  } catch (e) {
    //this will eventually be handled by the error handling middleware
    next(e);
  }
});


app.listen(3000, () => logger.info('Server started'));
