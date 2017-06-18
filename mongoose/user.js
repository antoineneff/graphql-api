import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    email       : String,
    firstname   : String,
    lastname    : String,
    password    : String
});

export default mongoose.model('User', UserSchema);