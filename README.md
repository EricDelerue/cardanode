
# Cardano Web API test

*October 2018*

## Project Overview

### Goal

* Create a web API to retrieve data from a mock database and structure it in a hierarchy before returning to the caller.

### Tasks

* In the data positions belong to portfolios. There are many positions for each portfolio. Take a look at /database/data.
* Create an endpoint, /portfolios or similar, with the ability to retrieve a JSON list of all portfolios and positions from the mock database module in the starter template. The data returned should be correctly structured so each portfolio has a property with the collection of positions related to each.
* Add the ability to retrieve only those portfolios which have the currency specified in the query. The data should be structured as above with positions as a property on each portfolio.
* Add whatever features you think necessary to make this a production ready application but you don't need a complete implementation as long as samples of each of the key ideas that should be implemented are included.

## Author: 

Eric Delerue
delerue_eric@hotmail.com

## Note: 

Nothing has been modified in the original test files, except in ./index.test.js and ./index.js 

No additional libraries or configuration files have been used.

The author hopes he has achieved the necessary and sufficient features to allow Cardano's technicians to evaluate his skills and potential.

The following functionalities do not appear in the project:

- Add tests

## Bugs or unecessary code

* app.use(express.static('public')) It is an API so there's nothing to show except a JSON object
* calls to log.info(...) instead of logger.info(...)

## Made on/with:

  - Windows 10
  - IE Edge
  - node 10.11.0
  - npm 6.4.1
  - body-parser 1.18.3
  - express 4.16.4

## Installation (local):

Put the files in a directory (i.e.: /cardanode/)

Open the command line and type: 

	npm install

Then

	npm start 

Open a browser window and type http://localhost:3000/portfolios or http://localhost:3000/portfolios/EUR or http://localhost:3000/portfolios/USD

Wait 2 seconds (setTimeout) to see the json result