import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'sam@210205',
  database: 'db_13',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
