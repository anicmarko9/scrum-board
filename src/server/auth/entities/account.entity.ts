import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './user.entity';
import { transformer } from '@Auth/utils/transformer.util';

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    primaryKeyConstraintName: 'PK_Account',
  })
  id: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ name: 'type', type: 'varchar' })
  type: string;

  @Column({ name: 'provider', type: 'varchar' })
  provider: string;

  @Column({ name: 'provider_account_id', type: 'varchar' })
  providerAccountId: string;

  @Column({ name: 'refresh_token', type: 'varchar', nullable: true })
  refreshToken: string;

  @Column({ name: 'refresh_token_expires_in', type: 'int', nullable: true })
  refreshTokenExpiresIn: number;

  @Column({ name: 'access_token', type: 'varchar', nullable: true })
  accessToken: string;

  @Column({
    name: 'expires_at',
    type: 'bigint',
    nullable: true,
    transformer: transformer.bigint,
  })
  expiresAt: number;

  @Column({ name: 'token_type', type: 'varchar', nullable: true })
  tokenType: string;

  @Column({ name: 'scope', type: 'varchar', nullable: true })
  scope: string;

  @Column({ name: 'id_token', type: 'varchar', nullable: true })
  idToken: string;

  @Column({ name: 'session_state', type: 'varchar', nullable: true })
  sessionState: string;

  @Column({ name: 'oauth_token_secret', type: 'varchar', nullable: true })
  oauthTokenSecret: string;

  @Column({ name: 'oauth_token', type: 'varchar', nullable: true })
  oauthToken: string;

  @ManyToOne(() => User, (user) => user.accounts, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_User_Account',
  })
  user: User;
}
