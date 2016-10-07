import express from 'express';
import config from './config';
import { mongo, redis } from './connect';

// configurations
config();

// mongo
mongo();

// redis
redis();

// Constants
const PORT = 4000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world 23\n');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
