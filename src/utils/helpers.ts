import * as bcrypt from 'bcrypt'
import * as _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import {HttpException, HttpStatus} from "@nestjs/common";
import {imageMimeTypes} from "./constanst";
import {File} from "../dto/main.dto";

const hashPassword = async (password: string) => await bcrypt.hash(password, 11);

const checkPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash)
}

const validateImage = (file) => {
  if (_.isEmpty(file)) throw new HttpException('Avatar is mandatory', HttpStatus.UNPROCESSABLE_ENTITY);
  const extension = imageMimeTypes[file.mimetype];
  if (!extension) throw new HttpException('Image type error', HttpStatus.UNPROCESSABLE_ENTITY);
  return extension;
}
const writeImage = (fileName: string, file: File) => {
  const extension = validateImage(file);
  const folderName = 'avatars';
  const direction = path.resolve('public', folderName);
  if (!fs.existsSync(direction)) {
    fs.mkdirSync(direction, {recursive: true});
  }
  const writeDirection = path.join(direction, fileName) + extension;
  const image = path.join(folderName, fileName) + extension;
  fs.writeFileSync(writeDirection,file.buffer);
  return {image};
}

export {
  hashPassword,
  checkPassword,
  writeImage
}
