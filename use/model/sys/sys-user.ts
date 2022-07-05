import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseModel } from '../base-model';

@Entity({ name: 'SysUser' })
export class SysUser extends BaseModel {
  @PrimaryColumn()
  id: string;

  @atIn()
  roleId: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  salt: string;

  @Column()
  password: string;
}
