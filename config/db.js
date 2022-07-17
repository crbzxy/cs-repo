import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'toj9owp3jvz4.us-east-3.psdb.cloud',
  user: '6g89xrtxybc9',
  password: 'pscale_pw_w6BeQkp3GLw9eNcwZfZiFH29Jehn0ezXLMJR6kP5zTY',
  database: 'companiesdb',
  ssl: {
    rejectUnauthorized: false,
  },
});

export { pool };
