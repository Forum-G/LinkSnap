
const express = require('express');
const nanoid = require('nanoid');
const axios = require('axios');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const dotenv = require('dotenv');

dotenv.config(); // load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.RAPIDAPI_KEY;
const sessionSecret = process.env.SESSION_SECRET;

const db = {}; // a simple in-memory database

app.use(express.json()); // enable parsing JSON requests

app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000 // maximum age of a session (ms)
  }),
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true
}));

function requireHTTPS(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect(`https://${req.hostname}${req.url}`);
  }
  next();
}

app.use(requireHTTPS);

app.post('/shorten', (req, res) => {
  const longUrl = req.body.url;
  const id = nanoid(6); // generate a random 6-character ID

  db[id] = longUrl;
  const shortUrl = `https://example.com/${id}`;
  res.json({ url: shortUrl });
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const longUrl = db[id];
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

app.get('/api', (req, res) => {
  axios.get('https://example.com/api', {
    headers: {
      'x-rapidapi-host': 'example.com',
      'x-rapidapi-key': apiKey
    }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal server error');
    });
});

app.listen(port, () => {
  console.log(`URL shortener API listening at http://localhost:${port}`);
});
