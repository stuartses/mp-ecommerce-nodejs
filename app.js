const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;
const host = process.env.HOST;
const preference = require('./components/mercado-pago/preference');
const notifications = require('./components/mercado-pago/notifications');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/detail', function (req, res) {
  res.render('detail', req.query);
});

app.post('/preference', async function (req, res) {
    try {
      const preferenceId = await preference.createPreference(req.body);
      console.log(preferenceId);
      res.status(201).send(preferenceId);
    } catch(err) {
      console.error(err);
      res.status(400).send(err);
    }
  });

app.post('/notifications', async function (req, res) {
  try {
    await notifications(req.body);
    res.status(201).end();
  } catch {
    res.status(500).end();
  }
});

app.listen(port);
console.log(`Running ${host} on port: ${port}`);
