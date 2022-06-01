// Router for all the routes in the folder routes

const express = require('express')
const router = express.Router()
const cors = require('cors')
const consoptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET'
}

const path = require('path')
const { readdir, readdirSync } = require('fs')

readdirSync(__dirname + '/routes/').forEach(function (file) {
  if (file.endsWith('.js')) {
    // Make a route with the name of the file
    const route = require(`./routes/${file}`)
    // Use the route name to create the route and if it is index, use "/"
    router.use(`/${file.replace('.js', '').replace('index', '')}`, route)
  }
})

module.exports = router
