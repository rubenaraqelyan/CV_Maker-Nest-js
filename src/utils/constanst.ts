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

const STRIPE_CLIENT = 'STRIPE_CLIENT';

export {
  imageMimeTypes,
  avatarImage,
  STRIPE_CLIENT,
};
