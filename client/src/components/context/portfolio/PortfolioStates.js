import React, { useReducer } from 'react'
import portfolioContext from './portfolioContexts'
import portfolioReducer from './portfolioReducer'
import { GET_PROJECTS, SEND_EMAIL, EMAIL_NOT_SENT } from '../types'
import { client } from '../../../client'
import axios from 'axios'

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
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await axios.post('/api/send', formData, config)

      dispatch({
        type: SEND_EMAIL,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: EMAIL_NOT_SENT,
        payload: error.response.data,
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
