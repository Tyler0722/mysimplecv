import { Pool } from 'pg';

const pool = new Pool();

const query = (str, params, callback) => {
  return pool.query(str, params, callback);
};

export { query };
