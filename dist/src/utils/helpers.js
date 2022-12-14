"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = async (password) => await bcrypt.hash(password, 11);
exports.hashPassword = hashPassword;
const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
exports.checkPassword = checkPassword;
//# sourceMappingURL=helpers.js.map