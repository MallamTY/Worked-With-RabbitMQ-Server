import { Message, Connection, Channel } from 'amqplib';
import { CONNECT_STRING } from './configuration/configuration';
const amqp = require('amqplib');


async function displayMessage() {
try {
    const connection: Connection = await amqp.connect(CONNECT_STRING);
    const channel: Channel = await connection.createChannel();
  
    const queueName: string = 'Qualified_Customers';
  
    await channel.assertQueue(queueName, { durable: true });
  
    console.log(`Customers eligible for invitations are`);
  
    await channel.consume(queueName, (message: Message | null) => {
      if (message !== null) {
        console.log(` ${message.content.toString()}`);
        channel.ack(message);
        
      }
    })
    await channel.close();
    await connection.close();
    ;
} 
catch (error: any) {
  console.log(error);
}
}

displayMessage();
