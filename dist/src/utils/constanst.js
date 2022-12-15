"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageMimeTypes = exports.operatorsAliases = void 0;
const sequelize_1 = require("sequelize");
const Op = sequelize_1.default.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col,
};
exports.operatorsAliases = operatorsAliases;
const imageMimeTypes = {
    'image/jpeg': '.jpg',
    'image/gif': '.gif',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/avif': '.avif',
    'image/tiff': '.tiff',
    "image/heif": ".heif",
};
exports.imageMimeTypes = imageMimeTypes;
//# sourceMappingURL=constanst.js.map