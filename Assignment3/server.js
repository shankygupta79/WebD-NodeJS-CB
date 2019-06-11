const express = require('express')
const srv = express()

const taskRoute = require('./task.js')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use("/todos",taskRoute)

srv.listen(3333)