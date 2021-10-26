import { GET_PROJECTS, SEND_EMAIL, EMAIL_NOT_SENT } from '../types'

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      }

    case SEND_EMAIL:
      return {
        ...state,
        loading: false,
        success: action.payload,
      }

    case EMAIL_NOT_SENT:
      return {
        ...state,
        loading: true,
        error: action.payload,
      }
    default:
      return state
  }
}

export default portfolioReducer
