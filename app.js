const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes');
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(session({
    secret: 'L4tih4n',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}))
app.use(express.urlencoded({ extended: false }));

app.use(routes);


app.listen(port, () => console.log(`This app listening at ${port}`))