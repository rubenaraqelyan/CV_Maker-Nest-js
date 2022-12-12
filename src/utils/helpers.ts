import * as bcrypt from 'bcrypt'

const hashPassword = async (password: string) => await bcrypt.hash(password, 11);

const checkPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash)
}

export {
  hashPassword,
  checkPassword
}
