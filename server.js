const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config()

//middleware
app.use(express.json({ extended: false }))
app.use(cors())

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || '0.0.0.0'
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port: ${PORT}`)
})

//Routes
app.use('/send', require('./routes/send'))

//Serve Static assets in production
if (process.env.NODE_ENV == 'production') {
  //Set up static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  )
}