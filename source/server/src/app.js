import express from 'express';
import config from './config';
import { mongo, redis } from './connect';
import { TodosModel } from './models';

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

app.get('/todos', async (req, res) => {
  const t = TodosModel();
  return res.json(await(t.find({})));
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
