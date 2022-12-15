declare const operatorsAliases: {
    $eq: symbol;
    $ne: symbol;
    $gte: symbol;
    $gt: symbol;
    $lte: symbol;
    $lt: symbol;
    $not: symbol;
    $in: symbol;
    $notIn: symbol;
    $is: symbol;
    $like: symbol;
    $notLike: symbol;
    $iLike: symbol;
    $notILike: symbol;
    $regexp: symbol;
    $notRegexp: symbol;
    $iRegexp: symbol;
    $notIRegexp: symbol;
    $between: symbol;
    $notBetween: symbol;
    $overlap: symbol;
    $contains: symbol;
    $contained: symbol;
    $adjacent: symbol;
    $strictLeft: symbol;
    $strictRight: symbol;
    $noExtendRight: symbol;
    $noExtendLeft: symbol;
    $and: symbol;
    $or: symbol;
    $any: symbol;
    $all: symbol;
    $values: symbol;
    $col: symbol;
};
declare const imageMimeTypes: {
    'image/jpeg': string;
    'image/gif': string;
    'image/png': string;
    'image/webp': string;
    'image/avif': string;
    'image/tiff': string;
    "image/heif": string;
};
export { operatorsAliases, imageMimeTypes };
