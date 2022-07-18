import { createPool } from 'mysql2/promise';
require('dotenv').config();

const pool = createPool({
  host: 'toj9owp3jvz4.us-east-3.psdb.cloud',
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'companiesdb',
  ssl: {
    rejectUnauthorized: false,
  },
});

export { pool };
