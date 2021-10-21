import React, { useReducer } from 'react'
import portfolioContext from './portfolioContexts'
import portfolioReducer from './portfolioReducer'
import { GET_PROJECTS } from '../types'
import { client } from '../../../client'

const PortfolioState = ({ children }) => {
  const initialState = {
    projects: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(portfolioReducer, initialState)

  const getProjects = async () => {
    try {
      const response = await client.getEntries()
      console.log(response.items)
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

  return (
    <portfolioContext.Provider
      value={{
        projects: state.projects,
        loading: state.loading,
        getProjects,
      }}
    >
      {children}
    </portfolioContext.Provider>
  )
}

export default PortfolioState
