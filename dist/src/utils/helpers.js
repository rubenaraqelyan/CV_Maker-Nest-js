"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeImage = exports.checkPassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const common_1 = require("@nestjs/common");
const constanst_1 = require("./constanst");
const hashPassword = async (password) => await bcrypt.hash(password, 11);
exports.hashPassword = hashPassword;
const checkPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
exports.checkPassword = checkPassword;
const validateImage = (file) => {
    if (_.isEmpty(file))
        throw new common_1.HttpException('Avatar is mandatory', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    const extension = constanst_1.imageMimeTypes[file.mimetype];
    if (!extension)
        throw new common_1.HttpException('Image type error', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    return extension;
};
const writeImage = (fileName, file) => {
    const extension = validateImage(file);
    const folderName = 'avatars';
    const direction = path.join(__dirname, '..', '..', 'public', folderName);
    if (!fs.existsSync(direction)) {
        fs.mkdirSync(direction, { recursive: true });
    }
    const writeDirection = path.join(direction, fileName) + extension;
    const image = path.join(folderName, fileName) + extension;
    fs.writeFileSync(writeDirection, file.buffer);
    return { image };
};
exports.writeImage = writeImage;
//# sourceMappingURL=helpers.js.map