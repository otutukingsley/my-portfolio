import React, { useState } from 'react'
import { ContactSection } from '../themes/styles'
import axios from 'axios'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })

  const onChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log({ contact })
    const response = await axios
      .post('http://localhost:3001/send', {
        headers: { 'Content-Type': 'application/json' },
        contact,
      })
      .then((res) => res)
      .then(async (res) => {
        const resData = await res
        console.log(resData)
        if (resData.status === 'success') {
          alert('Message Sent')
        } else if (resData.status === 'fail') {
          alert('Message Failed to send')
        }
      })
      .then(() => {
        setContact({
          name: '',
          email: '',
          message: '',
        })
      })
  }

  const { name, email, message } = contact

  return (
    <ContactSection>
      <div className="border-line"></div>
      <div className="box content-box">
        <div className="header-content">
          <h1>Contact</h1>
          <p>Get in touch</p>
        </div>
        <div className="form-div">
          <div className="contact-heading">
            <h3 className="contact-h3">Contact Form</h3>
          </div>
          <form onSubmit={onSubmit} className="form" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                name="name"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                name="email"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                value={message}
                placeholder="Message for Me"
                name="message"
                onChange={onChange}
                required
                rows={8}
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-outline-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactSection>
  )
}

export default Contact
