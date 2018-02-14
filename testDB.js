const PouchDB = require('pouchdb-node');

const db = new PouchDB('http://127.0.0.1:5984/image-search');

db.get('oinoin', (err, res) => {
	if(err) { return console.log({ err }); };
	return console.log({ res });
});
