const fbAdmin = require('firebase-admin');

const serviceCredentials = require('../etc/secrete/durable-stack-449615-n0-firebase-adminsdk-fbsvc-6377ce54f4.json');


fbAdmin.initializeApp({ credential: fbAdmin.credential.cert(serviceCredentials),
    storageBucket: "gs://durable-stack-449615-n0.firebasestorage.app"
 });
 
module.exports = fbAdmin;