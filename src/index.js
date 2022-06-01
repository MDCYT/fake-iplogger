const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const cors = require('cors')
// dotenv
require('dotenv').config()

// Iniciliaciones
const app = express()

consoptions = {
  origin: '/',
  optionsSuccessStatus: 200,
  methods: 'GET'
}

// Configuraciones
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  })
)
app.set('view engine', '.hbs')

// app use cors
app.use('cors', cors(consoptions))

// MiddleWares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('json spaces', 2)

// Variables Globales
app.use((req, res, next) => {
  next()
})

// Rutas
app.use(require('./router.js'))

// Publico
app.use(express.static(path.join(__dirname, 'public')))

// Error 404
app.use((req, res) => {
  res.redirect('/')
})

// Iniciar el servidor
app.listen(app.get('port'), () => {
  /* empty */
})
