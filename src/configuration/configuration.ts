import dotenv from 'dotenv';
dotenv.config();


export const CONNECT_STRING: string = `amqp://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}`;




