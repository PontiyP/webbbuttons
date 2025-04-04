import { Socket } from 'net';

export default async function tcpCommand(settings) {
    return new Promise((resolve, reject) => {
        const tcpClient = new Socket();

        tcpClient.on('error', (err) => {
            console.error('TCP ошибка:', err);
            tcpClient.destroy();
            return reject({ status: 'TCP ERROR', error: err.message });
        });

        tcpClient.connect(settings.port, settings.host || '127.0.0.1', () => {
            tcpClient.write(settings.payload || 'default payload');
            tcpClient.end();
            resolve({ status: 'TCP Sent' });
        });
    });
}
