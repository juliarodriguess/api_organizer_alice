const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
  });

require('./api/controllers/authController')(app);
require('./api/controllers/agendaController')(app);
require('./api/controllers/roadController')(app);
require('./api/controllers/activitiesController')(app);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(process.env.PORT || 5000)



