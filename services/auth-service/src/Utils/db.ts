import mongoose from 'mongoose';
import logger from './logger';

const ConnectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        logger.info('Connected to Database Successfully - {auth-service}');
    } catch (error) {
        logger.error('Database Connection Failed');
        process.exit(1);
    }
}

export default ConnectDb;

