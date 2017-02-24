const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require("body-parser");
const serveStatic = require('serve-static')
const static = serveStatic('public' )
var helmet = require('helmet');

app.use(session({
    secret: 'appxc',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*.aliyuncs.com")
    res.render('index.pug',{user:req.session.user})
})

app.listen(3000)
