import * as bcrypt from 'bcrypt'
import * as _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import {HttpException, HttpStatus} from "@nestjs/common";
import {avatarImage, imageMimeTypes} from "./constanst";
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
const writeImage = async (fileName: string, file: File) => {
  validateImage(file);
  const direction = path.resolve('public', avatarImage.folderName);
  if (!fs.existsSync(direction)) {
    fs.mkdirSync(direction, {recursive: true});
  }
  const writeDirection = path.join(direction, fileName) + avatarImage.extension;
  const image = path.join(avatarImage.folderName, fileName) + avatarImage.extension;
  fs.writeFileSync(writeDirection,file.buffer);
  await sharp(file.buffer)
    .resize(avatarImage.width, avatarImage.height)
    .toFormat(avatarImage.format)
    .toFile(writeDirection);
  return {image};
}

export {
  hashPassword,
  checkPassword,
  writeImage
}
