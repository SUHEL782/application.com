const multer = require('multer');
const FirebaseStorage = require('multer-firebase-storage');
const fbAdmin = require('./firebase'); 

const storage = FirebaseStorage({
    bucketName: "durable-stack-449615-n0.appspot.com",  
    credential: fbAdmin.credential, 
    public: true,
    unique: true,
});

const upload = multer({ storage: storage });

module.exports = upload;
