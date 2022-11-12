import mongoose from 'mongoose'
require('dotenv').config();

const uri = process.env.MONGO_URI;
const mongodb = async () => mongoose.connect(uri, {userNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});

export default mongodb;