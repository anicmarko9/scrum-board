import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ValueTransformer,
  Unique,
} from 'typeorm';

import { transformer } from '@Auth/utils/transformer.util';
import { Account } from './account.entity';
import { Session } from './session.entity';

@Entity({ name: 'users' })
@Unique('UQ_User_email', ['email'])
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    primaryKeyConstraintName: 'PK_User',
  })
  id: string;

  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({
    name: 'email_verified',
    type: 'varchar',
    nullable: true,
    transformer: transformer.date,
  })
  emailVerified: string;

  @Column({ name: 'image', type: 'varchar', nullable: true })
  image: string;

  @Column({ name: 'role', type: 'varchar', nullable: true })
  role: string;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
}
