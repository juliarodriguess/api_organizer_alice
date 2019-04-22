const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./api/controllers/authController')(app);
require('./api/controllers/agendaController')(app);
require('./api/controllers/roadController')(app);
require('./api/controllers/activitiesController')(app);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(process.env.PORT || 5000)

