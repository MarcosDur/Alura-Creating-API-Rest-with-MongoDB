import mongoose, { mongo } from 'mongoose';

async function conectDB() {
    mongoose.connect(process.env.DB_CONECTION_STRING);
    return mongoose.connection;
}

export default conectDB;