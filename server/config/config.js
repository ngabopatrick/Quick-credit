
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.NODE_ENV);
// DATABASE CONNECTION
if (process.env.NODE_ENV === 'production') {
  module.exports = new Pool({
    connectionString: process.env.DATABASE_URL_PRO,
  });
}

if (process.env.NODE_ENV === 'development') {
  module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

if (process.env.NODE_ENV === 'test') {
  module.exports = new Pool({
    connectionString: process.env.TEST_DATABASE_URL,
  });
}