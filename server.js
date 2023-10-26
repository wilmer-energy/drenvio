const dotenv = require('dotenv');

const { app } = require('./app');

// Utils
//const { initModels } = require('./models/initModels');
const { connect } = require('./utils/database.util');

dotenv.config({ path: './config.env' });

const startServer = async () => {
	try {
		// Establish the relations between models
		//initModels();

		connect()

		// Set server to listen
		const PORT = 4000;

		app.listen(PORT, () => {
			console.log('Express app running!');
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
