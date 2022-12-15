import { File } from "../dto/main.dto";
declare const hashPassword: (password: string) => Promise<any>;
declare const checkPassword: (password: string, hash: string) => Promise<any>;
declare const writeImage: (fileName: string, file: File) => {
    image: string;
};
export { hashPassword, checkPassword, writeImage };
