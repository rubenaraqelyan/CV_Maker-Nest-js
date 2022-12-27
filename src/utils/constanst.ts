const STRIPE_CLIENT = 'STRIPE_CLIENT';
const STRIPE_CURRENCY = 'usd';
const PAYMENT_METHOD_TYPE = 'card';
const INTERVAL = 'year';
const imageMimeTypes = {
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/tiff': '.tiff',
  "image/heif": ".heif",
}
const avatarImage = {
  folderName:'avatars',
  extension: '.webp',
  format: 'webp',
  width: 800,
  height: 800,
}

export {
  imageMimeTypes,
  avatarImage,
  STRIPE_CLIENT,
  STRIPE_CURRENCY,
  PAYMENT_METHOD_TYPE,
  INTERVAL
};
