import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'toj9owp3jvz4.us-east-3.psdb.cloud',
  user: 'yp1g88phvjqo',
  password: 'pscale_pw_8LwIBfGss-TqNKEYL5pIN6y-kMiW1Y8CgkTcWO1CWm0',
  database: 'companiesdb',
  ssl: {
    rejectUnauthorized: false,
  },
});

export { pool };
