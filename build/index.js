"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = require("net");
var child_process_1 = require("child_process");
var PORT = process.env.REMOTECLIP_PORT || 2000;
var sendToClipboard = function (data) {
    var pbCopy = child_process_1.spawn('pbcopy');
    pbCopy.stdin.write(data);
    pbCopy.stdin.end();
};
var myServer = net_1.createServer(function (socket) {
    socket.on('data', function (buff) {
        var strToClipboard = String(buff);
        console.log("From: " + socket.remoteAddress + " - To clipboard: " + strToClipboard);
        sendToClipboard(strToClipboard);
    });
});
myServer.listen(PORT, function () {
    console.log("RemoteClip is listening: " + PORT);
});
//# sourceMappingURL=index.js.map