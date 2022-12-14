import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
export declare class SocketConnection implements OnGatewayConnection, OnGatewayDisconnect {
    server: any;
    private static users;
    handleMessage(message: string): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(): void;
    private static disconnect;
    static emit(userId: string, event: string, data: {
        message: string;
    }): any;
}
