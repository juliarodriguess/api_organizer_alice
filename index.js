const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router)

require('./api/controllers/authController')(app);
require('./api/controllers/agendaController')(app);
require('./api/controllers/roadController')(app);
require('./api/controllers/activitiesController')(app);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(process.env.PORT || 5000)

