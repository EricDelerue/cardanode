/*
- Connect to the database
- Get the data
- Filter it
- Send it back 
*/
const db = require('./database/');
const logger = require('./logger');

const filterPositionsByCurrency = (positions, cur) => {

    positions.sort();
    let filtered_positions = {};
    
		filtered_positions = positions.filter( position => cur !== null ? position.currency == cur : position.currency !== '' );
		
		return filtered_positions;    
    
}

const joinPortfoliosPositionsByIds = (portfolios, positions, cur) => {
    
    portfolios.sort();
    
    const filtered_positions = (cur !== null) ? filterPositionsByCurrency(positions, cur) : positions;
    logger.info('filtered_positions: ', filtered_positions);
    
		for (let i in portfolios) {
			let idPortefeuillesCourant = portfolios[i].id;
			portfolios[i].portfoglios = filtered_positions.filter( position => position.portfolioId == idPortefeuillesCourant );
		}

	  return portfolios;
};


const getData = async function () {
	
	try {
		
		const currency = (arguments.length) ? arguments[0].toUpperCase() : null;

		// Connect to the database
		const connection = await db.connect(true);
		logger.info('connection: ', connection);
		
		// Get the data
		const {portfolios, positions} = await connection.load();
    
    // Join results and filter it
		const filtered_results = joinPortfoliosPositionsByIds(portfolios, positions, currency);
		
		
		logger.info('filtered_results: ', filtered_results);
		
		// Send it back 
		return filtered_results;
		
	} catch(e) {
		
    logger.info('e: ', e);
    return null;
    
  }
  
};

//getData();

module.exports = getData;