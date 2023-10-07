import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { config } from 'dotenv';

config();

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [join(__dirname, '../', '**', '*.entity.{ts,js}')],
  synchronize: true,
};

export const dataSource = new DataSource(dataSourceConfig);
