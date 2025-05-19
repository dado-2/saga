
const express = require('express');
const app = express();
const path = require('path');
const PORT = 5500;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`S.A.G.A server running at http://localhost:${PORT}`);
});
