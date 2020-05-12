// Update with your config settings.
//npx knex init
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/produce.db3",
    },
    useNullAsDefault: true,
  },

  // veggies: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./data/produce.db3",
  //   },
  //   useNullAsDefault: true,
  // },

  // staging/testing server
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  //production
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
