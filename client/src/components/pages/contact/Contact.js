import React, { useState, useContext } from 'react'
import { ContactSection } from './ContactStyle'
import portfolioContext from '../../context/portfolio/portfolioContexts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })

  const context = useContext(portfolioContext)

  const { sendEmail, loading } = context

  const onChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const clearInput = () => {
    if (loading) {
      return;
    }

    setContact({
      name: '',
      email: '',
      message: '',
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sendEmail({ name, email, message })
    clearInput()
    toast.info('Success', { icon: false, delay: loading && 1000 })
  }

  const { name, email, message } = contact

  return (
    <ContactSection>
      <div className="border-line"></div>
      <div className="box content-box">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
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
