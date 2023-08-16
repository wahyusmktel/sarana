module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'admin',
        database: 'sarana'
      },
      migrations: {
        directory: './migrations'
      },
      useNullAsDefault: true
    }
  };
  