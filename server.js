const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/public/contacto.html');
});

app.post('/contactar', (req, res) => {

  res.redirect('/confirmacion');
});

app.get('/confirmacion', (req, res) => {
  res.sendFile(__dirname + '/public/confirmacion.html');
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
