const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

app.use("/send", require("./routes/send"));
