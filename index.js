const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/authController')(app);
require('./app/controllers/agendaController')(app);

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

app.listen(3000);

