import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'toj9owp3jvz4.us-east-3.psdb.cloud',
  user: 'dvb9jgah904u',
  password: 'pscale_pw_geFmeSGr3AaukS3aIuiLdt-Ay7p_jjak7dgXqCwriwg',
  database: 'companiesdb',
  ssl: {
    rejectUnauthorized: false,
  },
});

export { pool };
