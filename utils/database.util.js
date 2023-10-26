const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
function connect() {
	const uri="mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;

	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	db.once('open', () => {
		console.log('Connected to MongoDB');
	});
	/*const uri = "mongodb+srv://wilmerdev:dSYN0IYfKKesMWIH@cluster0.wfo9zhz.mongodb.net/";

	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = mongoose.connection;

	db.on('error', (err) => {
		console.error('MongoDB connection error:', err);
	});

	db.once('open', () => {
		console.log('Connected to MongoDB');
	});*/
}



module.exports = { connect };
