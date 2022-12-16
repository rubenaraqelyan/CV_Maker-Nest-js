import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { addresses } from '../addresses/addresses.model';
import { skills } from '../skills/skills.model';
import { languages } from '../languages/languages.model';
import { bios } from '../bios/bios.model';
import { certificates } from '../certificates/certificates.model';
import { educations } from '../educations/educations.model';
import { phone_numbers } from 'src/phone_numbers/phone_numbers.model';
import { paymentMethods } from 'src/payment_method/payment_methods.model';

@Table
export class users extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    defaultValue: null,
    unique: true,
  })
  social_id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  get password(): null {
    return null;
  }
  set password(password: string) {
    const social_id = this.getDataValue('social_id');
    if (!social_id && !password) throw new Error('Password is mandatory!');
    this.setDataValue('password', password);
  }

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    defaultValue: '',
  })
  image: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
    defaultValue: '[]',
  })
  get socials(): string {
    return JSON.parse(this.getDataValue('socials'));
  }
  set socials(value: string) {
    this.setDataValue('socials', JSON.stringify(value));
  }

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  forgot_password_code: string;

  @Column({
    type: 'TIMESTAMP',
    allowNull: true,
    defaultValue: null,
  })
  verified_at: string;

  @HasMany(() => addresses)
  addresses: addresses[];

  @HasMany(() => skills)
  skills: skills[];

  @HasMany(() => languages)
  languages: languages[];

  @HasMany(() => bios)
  bios: bios[];

  @HasMany(() => certificates)
  certificates: bios[];

  @HasMany(() => educations)
  educations: educations[];

  @HasMany(() => phone_numbers)
  phone_numbers: phone_numbers[];

  @HasMany(() => paymentMethods)
  payment_methods: paymentMethods[];
}
