const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  if (!req.body.title) return res.status(500).send({ msg: 'request failed' });

  res.send({ msg: 'request execute successfully' });
});

app.listen(process.env.port || 8547);
