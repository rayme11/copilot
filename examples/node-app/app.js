const config = require('./config');
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const index = require('./routes/index');
const who = require('./routes/who');
const contact = require('./routes/contact');
const blogRouter = require('./routes/blog');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', config.port);

app.use('/', express.static('public'));
app.use('/', index);
app.use('/who', who);
app.use('/contact', contact);
app.use('/blog', blogRouter);

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});

module.exports = app;