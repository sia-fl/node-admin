import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseModel {
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdByName: string;

  @Column()
  createdById: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  updatedByName: string;

  @Column()
  updatedById: string;
}
