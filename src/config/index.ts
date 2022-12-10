import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const {
    NODE_ENV, PORT, SECRET_KEY,
    LOG_FORMAT, LOG_DIR, ORIGIN
} = process.env;

export {
    NODE_ENV, PORT, 
    SECRET_KEY, 
    LOG_FORMAT, LOG_DIR, 
    ORIGIN
};