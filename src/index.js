const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 4000
const route = require('./routes')
const database = require('./config/db')

database.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(morgan('combined'))



app.engine('handlebars', handlebars.engine({
      helpers: {
            sum(a,b) {return a+b;},
            loud(aString) {return aString.toUpperCase()}
      }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(methodOverride('_method'))

route(app)



app.listen(port, () => { console.log(`Example app listening on port http://localhost:${port}`) })