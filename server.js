const express = require('express')
// const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

//middleware
app.use(express.json({ extended: false }))



//Routes
app.use('/api/send', require('./routes/send'))

//Serve Static assets in production
if (process.env.NODE_ENV == 'production') {
  //Set up static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  )
}


const HOST = process.env.HOST || '0.0.0.0'

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), HOST, () => {
  console.log(`Server is running on port 5000, host: ${HOST}`)
})