/*
- Connect to the database
- Get the data
- Filter it
- Send it back 
*/
const db = require('./database/');
const logger = require('./logger');

const joinObjectsByIds = (obj1, obj2, cur) => {
    
    obj1.sort();
    
		for (let i in obj1) {
			let idPortefeuillesCourant = obj1[i].id;
			obj1[i].portfoglios = obj2.filter( (position) => (position.portfolioId == idPortefeuillesCourant && ( cur !== null ? position.currency == cur : position.currency !== '' ) ) );
		}

	  return obj1;
};


const getData = async function () {
	
	try {
		
		let currency = (arguments.length) ? arguments[0].toUpperCase() : null;

		// Connect to the database
		const connection = await db.connect(true);
		logger.info('connection: ', connection);
		
		// Get the data
		const {portfolios, positions} = await connection.load();
    
    // Filter it
		const filtered_results = joinObjectsByIds(portfolios, positions, currency);
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