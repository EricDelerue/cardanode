/*
- Connect to the database
- Get the data
- Filter it
  Two-stage pass:
  1) combine the portfolios with their positions, and 
  2) filter out those portfolios who have positions in the specified currency.
- Send it back 
*/
const db = require('./database/');
const logger = require('./logger');

/*
function _findPositionsByPortfolios(portfolios, positions, currency) {

  // Map over the portfolios and get their positions
  const combined = portfolios.map(portfolio => {
    const filteredPositions = positions.filter(position => position.portfolioId === portfolio.id);
    return { ...portfolio, positions: filteredPositions };
  });

  // If a currency has been specified, return only those portfolios who have positions in that currency
  return currency ? combined.filter(portfolio => portfolio.positions.some(position => position.currency === currency)) : combined;
  
}
*/

function findPositionsByPortfolios(portfolios, positions, currency) {
  // Map over the portfolios and get their positions
  const combined = portfolios.map(portfolio => {
    const filteredPositions = currency
      ? positions.filter(
          position => position.portfolioId === portfolio.id && position.currency === currency,
        )
      : positions.filter(position => position.portfolioId === portfolio.id);
    return { ...portfolio, positions: filteredPositions };
  });

  // If a currency has been specified, return only those portfolios who have positions in that currency
  return currency
    ? combined.filter(portfolio =>
        portfolio.positions.some(position => position.currency === currency),
      )
    : combined;
}

const getData = async function(currency) {
  try {
    // const currency = arguments.length ? arguments[0].toUpperCase() : null;
    logger.info('getData currency: ', currency);

    // Connect to the database
    const connection = await db.connect(true);
    //logger.info('connection: ', connection);

    // Get the data
    const { portfolios, positions } = await connection.load();

    // Join results and filter it
    //const portfoliosPositions = findPositionsByPortfolios(portfolios, positions);
    //logger.info('getData portfoliosPositions: ', portfoliosPositions);

    const portfoliosPositionsCurrency = findPositionsByPortfolios(portfolios, positions, currency);
    logger.info('getData portfoliosPositionsCurrency: ', portfoliosPositionsCurrency);

    // Send it back
    return portfoliosPositionsCurrency;
  } catch (e) {
    logger.error('e: ', e);
    return e;
  }
};

//getData();

module.exports = getData;
