import httpCommand from './httpCommand.js';
import tcpCommand from './tcpCommand.js';
import udpCommand from './udpCommand.js';
import oscCommand from "./oscCommand.js";

export const commandHandlers = {
    http: httpCommand,
    osc: oscCommand,
    tcp: tcpCommand,
    udp: udpCommand,
};
