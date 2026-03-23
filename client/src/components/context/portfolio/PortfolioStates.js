import React, { useReducer } from 'react'
import portfolioContext from './portfolioContexts'
import portfolioReducer from './portfolioReducer'
import { GET_PROJECTS, SEND_EMAIL, EMAIL_NOT_SENT } from '../types'
import { client } from '../../../client'
import emailjs from '@emailjs/browser'

const PortfolioState = ({ children }) => {
  const initialState = {
    projects: [],
    loading: true,
    error: null,
    success: null,
  }

  const [state, dispatch] = useReducer(portfolioReducer, initialState)

  const getProjects = async () => {
    try {
      const response = await client.getEntries()
      dispatch({
        type: GET_PROJECTS,
        payload: response.items,
      })
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
  }

  const sendEmail = async (formData) => {
    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )

      dispatch({
        type: SEND_EMAIL,
        payload: response,
      })
    } catch (error) {
      dispatch({
        type: EMAIL_NOT_SENT,
        payload: error,
      })
    }
  }

  return (
    <portfolioContext.Provider
      value={{
        projects: state.projects,
        loading: state.loading,
        success: state.success,
        error: state.error,
        getProjects,
        sendEmail,
      }}
    >
      {children}
    </portfolioContext.Provider>
  )
}

export default PortfolioState
