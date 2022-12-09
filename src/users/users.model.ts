import {Table, Column, Model, DataType} from 'sequelize-typescript';
@Table
export class users extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true
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
  },)
  username: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    get: () => null,
  })
  password: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    defaultValue: "",
  })
  image: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
    defaultValue: {},
  })

  get socials(): string {
    return JSON.parse(this.getDataValue("socials"));
  }
  set socials(value: string) {
    this.setDataValue("socials", JSON.stringify(value));
  }

  @Column({
    type: "TIMESTAMP",
    allowNull: true,
    defaultValue: null,
  })
  verified_at: string;

}
