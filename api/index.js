import 'dotenv/config';

import express from 'express';
import http from 'http';
import session from 'express-session';
import cors from 'cors';
import authRoutes from './routes/auth';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000']
  })
);

app.use(
  session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false
  })
);

app.use('/api/auth', authRoutes);

import { query } from './db';

app.get('/api/users/@me', (req, res) => {
  const userId = req.session.userId;
  query('SELECT * FROM "user" WHERE id = $1', [userId], (error, result) => {
    console.log(req.session.userId);
    res.send(result.rows[0]);
  });
});

const updateUserByID = (id, cols) => {
  let query = ['UPDATE "user"'];
  query.push('SET');

  let set = [];

  Object.keys(cols).forEach((key, index) => {
    set.push(key + ' = ' + "'" + cols[key] + "'");
  });

  query.push(set.join(', '));

  query.push(`WHERE id = ${id}`);

  return query.join(' ');
};

app.put('/api/users/@me', (req, res) => {
  const userId = req.session.userId;
  const queryStr = updateUserByID(userId, req.body);
  query(queryStr, [], (err, result) => {
    res.send({ message: 'hello world' });
  });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

const server = http.createServer(app);

server.listen(PORT);
