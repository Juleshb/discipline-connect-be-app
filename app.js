
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loginRouter = require('./routers/login');
const usersRouter = require('./routers/user')

app.use(bodyParser.json());

app.use('/login', loginRouter);
app.use('/users', usersRouter);

app.listen(5000, () => console.log('Server started on port 5000'));
