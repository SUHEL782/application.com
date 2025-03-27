const mongoose = require('mongoose');
const {Schema} = mongoose;

// Create Schema
const blacklistSchema = new Schema({
    token: {
        type: String,
        required: true
    }
}, {timestamps: true});

blacklistSchema.index({token: 1}, {unique: true});
const blacklist = mongoose.model('blacklist', blacklistSchema);

module.exports = blacklist;
