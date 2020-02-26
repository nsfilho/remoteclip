/* eslint-disable no-console */

import { createServer } from 'net';
import { spawn } from 'child_process';

const PORT = process.env.REMOTECLIP_PORT || 2000;

const sendToClipboard = (data: string): void => {
    const pbCopy = spawn('pbcopy');
    pbCopy.stdin.write(data);
    pbCopy.stdin.end();
};

const myServer = createServer(socket => {
    socket.on('data', buff => {
        const strToClipboard = String(buff);
        console.log(`From: ${socket.remoteAddress} - To clipboard: ${strToClipboard}`);
        sendToClipboard(strToClipboard);
    });
});

myServer.listen(PORT, () => {
    console.log(`RemoteClip is listening: ${PORT}`);
});
