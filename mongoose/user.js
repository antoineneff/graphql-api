const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const UserSchema = new Schema({
    email       : String,
    firstname   : String,
    lastname    : String,
    password    : String
});

export default mongoose.model('User', UserSchema);