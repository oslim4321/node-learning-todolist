const express = require('express')
const routes = require('./routes/routes')

/* Express app */
const app = express();

/* getting form */
app.use(express.urlencoded({ extended: true }));


/* static file */-
app.use(express.static('./public'))
/* Set View Engine */
app.set('view engine', 'ejs')

/* Fire routes */
app.use(routes)

/* Listen to app */
app.listen(3000)
console.log('listening')
// console.log(routes)

