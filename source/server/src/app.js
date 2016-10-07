import config from './config';
import { mongo } from './connect';

// configurations
config();

// mongo
mongo();

const express = require('express');

// Constants
const PORT = 4000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world 231\n');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
