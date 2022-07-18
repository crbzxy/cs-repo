import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'toj9owp3jvz4.us-east-3.psdb.cloud',
  user: '71qfjotxu5jj',
  password: 'pscale_pw_YbjGJk0iZ8rKuV8C5LJxsLIz3rYqbDec-_8VGJv1T98',
  database: 'companiesdb',
  ssl: {
    rejectUnauthorized: false,
  },
});

export { pool };
