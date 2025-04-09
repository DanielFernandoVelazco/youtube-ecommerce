import * as dotenv from "dotenv";
import { registerAs } from "@nestjs/config";
import {DataSourceOptions} from "typeorm";

dotenv.config({
    path: '.env.development.local',
});

const mysqlDataSource: DataSourceOptions = {

    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
}

export const mysqlDataSourceConfig = registerAs('mysql', () => mysqlDataSource)