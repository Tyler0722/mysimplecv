import { Router } from 'express';
import querystring from 'querystring';
import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { URL } from 'url';
import { sign } from 'jsonwebtoken';

import { query } from '../../db/index';

const googleRouter = Router();

const randomString = () => {
  var chars = '0123456789';
  var string_length = 8;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const GOOGLE_REDIRECT_URI = IS_PRODUCTION
  ? 'http://mysimplecv.com/api/google/callback'
  : 'http://localhost:5000/api/auth/google/callback';

const FALLBACK_URL = IS_PRODUCTION ? 'http://mysimplecv.com/finish' : 'http://localhost:3000/finish';

googleRouter.get('/', (req, res) => {
  let url = FALLBACK_URL;

  if (typeof req.query.r === 'string') {
    url = req.query.r;
  }

  req.session.redirectUrl = url;

  const queryStrings = querystring.stringify({
    response_type: 'code',
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    scope: 'openid email profile'
  });

  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${queryStrings}`);
});

googleRouter.get('/callback', (req, res) => {
  const code = req.query.code;

  const queryStrings = querystring.stringify({
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    grant_type: 'authorization_code'
  });

  axios.post(`https://www.googleapis.com/oauth2/v4/token?${queryStrings}`).then((response) => {
    const { id_token } = response.data;
    const { email, name } = decode(id_token);
    const redirectUrl = req.session.redirectUrl ? new URL(req.session.redirectUrl) : new URL(FALLBACK_URL);

    // check if user exist with email
    query(
      'SELECT id, name, username, headline, summary, phone, email, website FROM "user" WHERE email = $1',
      [email],
      (err, result) => {
        const exists = result.rows.length > 0;

        if (exists) {
          req.session.userId = result.rows[0].id;
          res.redirect('http://localhost:3000/finish');
        } else {
          // const values = [randomString(), name, 'rr', '', '', '', email, ''];
          // query('INSERT INTO "user" VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', values, (err, result) => {
          //   res.redirect(redirectUrl.href);
          // });
          res.redirect('http://localhost:3000/finish');
        }
      }
    );
  });
});

export default googleRouter;
