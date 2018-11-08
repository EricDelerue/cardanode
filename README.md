
# Simple Node / Express Web API example

*October 2018*

## Project Overview

### Goal

* This simple web API retrieves data from a mock database and structure it in a hierarchy before returning to the caller.

### Tasks

* In the data, positions belong to portfolios. There are many positions for each portfolio. Take a look at /database/data.
* It calls an endpoint, /portfolios, with the ability to retrieve a JSON list of all portfolios and positions from the mock database module in the starter template. The data returned is correctly structured so each portfolio has a property with the collection of positions related to each.
* It retrieves only those portfolios which have the currency specified in the query. The data should is structured as above with positions as a property on each portfolio.

## Author: 

Eric Delerue
delerue_eric@hotmail.com

## Note: 

No additional libraries or configuration files have been used, except prettier for code styling.

The following functionalities do not appear in the project but they will be implemented soon:

- Testing with ESLint

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
