declare const hashPassword: (password: string) => Promise<any>;
declare const checkPassword: (password: string, hash: string) => Promise<any>;
export { hashPassword, checkPassword };
