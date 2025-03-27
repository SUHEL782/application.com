const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log(' Mongodb connected.....');
        }).catch(err => {
            console.error(err.message);
            process.exit(1);
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}    

/*mongodb+srv://workwithsuhel:erOMdtcMcn3BmHjS@application.wxs32.mongodb.net/app*/

module.exports = connectDB;
