const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  if (!req.body.title) return res.status(500).send(req.body);

  res.json(req.body);
});

app.listen(process.env.port || 8547);
