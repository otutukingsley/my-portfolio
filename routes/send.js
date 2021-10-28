const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
      to: process.env.EMAIL,
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
