import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { transformer } from '@Auth/utils/transformer.util';

@Entity({ name: 'verification_tokens' })
export class VerificationToken {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    primaryKeyConstraintName: 'PK_VerificationToken',
  })
  id: string;

  @Column({ name: 'token', type: 'varchar' })
  token: string;

  @Column({ name: 'identifier', type: 'varchar' })
  identifier: string;

  @Column({ name: 'expires', type: 'varchar', transformer: transformer.date })
  expires: string;
}
