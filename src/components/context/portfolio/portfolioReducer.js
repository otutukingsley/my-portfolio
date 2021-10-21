import { GET_PROJECTS } from '../types'

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default portfolioReducer
