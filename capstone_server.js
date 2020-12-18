/* Node.js Express Frame Work */
const express = require('express');
const app = express();

/*Import Log.js*/
const logs = require('./log.js');

/* routes HTTP requests */
var router = require('./router/main') (app);

/* setting for rendering engine and path */
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

/* body parser */
app.use(express.json());

/* PORT */
const port = 80;

app.listen(port, () => {
  logs.n("HTTP Server Listening at "+port);
})