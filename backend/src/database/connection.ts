import knex from 'knex';
import databaseConfig from '../config/databaseConfig'

const connection = knex(databaseConfig);

export default connection;