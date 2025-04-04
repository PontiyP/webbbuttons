import { createSocket } from 'dgram';
import { Buffer } from 'buffer';

export default async function udpCommand(settings) {
    return new Promise((resolve) => {
        const udpClient = createSocket('udp4');
        const message = Buffer.from(settings.payload || 'default payload');
        udpClient.send(
            message,
            0,
            message.length,
            settings.port,
            settings.host || '127.0.0.1',
            () => {
                udpClient.close();
                resolve({ status: 'UDP Sent' });
            }
        );
    });
}
