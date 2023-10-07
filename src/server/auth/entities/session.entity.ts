import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  JoinColumn,
} from 'typeorm';

import { transformer } from '@Auth/utils/transformer.util';
import { User } from './user.entity';

@Entity({ name: 'sessions' })
@Unique('UQ_Session_token', ['sessionToken'])
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ name: 'session_token', type: 'varchar' })
  sessionToken: string;

  @Column({ name: 'expires', type: 'varchar', transformer: transformer.date })
  expires: string;

  @ManyToOne(() => User, (user) => user.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_User_Session',
  })
  user: User;
}
