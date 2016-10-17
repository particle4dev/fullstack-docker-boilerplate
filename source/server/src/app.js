import express from 'express';
import config from './config';
import cors from 'cors';
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

const wait = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, num);
  });
};

app.get('/todos', [cors()], async (req, res) => {
  await wait(5000);
  const t = TodosModel();
  return res.json(await(t.find({})));
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
