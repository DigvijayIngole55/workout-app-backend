const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json'); // Replace with the correct path to your service account key JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;