import {responseDto} from "../dto/main.dto";
import * as bcrypt from 'bcrypt'
const response = (data: responseDto) => {
  return data
}

const hashPassword = async (password: string) => await bcrypt.hash(password, 11);

const checkPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

export {
  response,
  hashPassword,
  checkPassword
}
