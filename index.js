const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./api/controllers/authController')(app);
require('./api/controllers/agendaController')(app);

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

app.listen(3000);

