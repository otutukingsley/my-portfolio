const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator')

let emailId;
let word;
let clientId;
let clientSecret;
let refreshToken;


if(process.env.NODE_ENV !== 'production'){
  emailId = process.env.REACT_APP_EMAIL
  word = process.env.REACT_APP_WORD
  clientId = process.env.REACT_APP_OAUTH_CLIENTID
  clientSecret = process.env.REACT_APP_OAUTH_CLIENT_SECRET
  refreshToken = process.env.REACT_APP_OAUTH_REFRESH_TOKEN
}else{
  emailId = process.env.EMAIL
  word = process.env.WORD
  clientId = process.env.OAUTH_CLIENTID
  clientSecret = process.env.OAUTH_CLIENT_SECRET
  refreshToken = process.env.OAUTH_REFRESH_TOKEN
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: emailId,
    pass: word,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  },
})

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`)
})

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    let mailOptions = {
      from: `${req.body.email}`,
      to: emailId,
      subject: `Portfolio message from: ${req.body.email}`,
      text: `${req.body.message}`,
    }

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err)
        res.status(400).json({
          status: 'fail',
        })
      } else {
        console.log('email sent')
        res.status(200).json({
          status: 'success',
        })
      }
    })
  },
)

module.exports = router
