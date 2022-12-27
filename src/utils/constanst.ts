const {BASE_URL} = process.env;

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

const options = (email: string, token: string) => ({
  email,
  verification_url: `${BASE_URL}/user/email-verify/${token}`,
  facebook: 'https://imgur.com/pvqGGJp.png',
  instagram: 'https://imgur.com/U1rrvPD.png',
  twitter: 'https://imgur.com/dlxlYE5.png',
  verify: 'https://imgur.com/cEWqKLp.png' || 'https://imgur.com/Sa7XP1o.png'
})

const stripeConf = {
  currency: 'usd',
  payment_method_types: ['card']
}

export {
  imageMimeTypes,
  avatarImage,
  STRIPE_CLIENT,
  options,
  stripeConf,
};
