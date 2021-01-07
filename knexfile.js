module.exports = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user:     'postgres',
    password: 'roch@bd1'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
