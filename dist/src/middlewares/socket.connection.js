"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SocketConnection_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketConnection = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
let SocketConnection = SocketConnection_1 = class SocketConnection {
    handleMessage(message) {
        this.server.emit('message', message);
    }
    handleConnection(socket) {
        try {
            console.log('connected');
            const decoded = socket.handshake.headers.authorization;
            SocketConnection_1.users[decoded] = socket;
            this.server.emit('connected');
        }
        catch (e) {
            return SocketConnection_1.disconnect(socket);
        }
    }
    handleDisconnect() {
        console.log('disconnected');
    }
    static disconnect(socket) {
        socket.emit('Error', new common_1.UnauthorizedException());
        socket.disconnect();
    }
    static emit(userId, event, data) {
        return this.users[userId] && this.users[userId].emit(event, data);
    }
};
SocketConnection.users = new Set();
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], SocketConnection.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocketConnection.prototype, "handleMessage", null);
SocketConnection = SocketConnection_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } })
], SocketConnection);
exports.SocketConnection = SocketConnection;
//# sourceMappingURL=socket.connection.js.map