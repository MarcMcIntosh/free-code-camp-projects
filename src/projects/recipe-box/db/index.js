import PouchDB from 'pouchdb-browser';
/*
PouchDB.on('created', function (dbName) {
  // called whenever a db is created.
});
*/
const db = new PouchDB('recipes');

export default db;
