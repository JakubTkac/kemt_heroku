const path = require('path');

module.exports = ({ env }) => ({
    connection: { 
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'kmt'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'heslo'),
	  ssl:false,
        },
        useNullAsDefault: true,
        debug: false,
      },
});
