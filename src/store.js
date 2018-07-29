import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const defaultState = {
  questions: [],
  questionEdit: null
}

const ADD_QUESTION = 'ADD_QUESTION'
const INIT_QUESTIONS = 'INIT_QUESTIONS'
const FIND_QUESTION_SUCCESS = 'FIND_QUESTION_SUCCESS'
const ADD_OPTION = 'ADD_OPTION'
const EDIT_OPTION = 'EDIT_OPTION'
const REMOVE_OPTION = 'REMOVE_OPTION'
const UPDATE_QUESTION_EDIT = 'UPDATE_QUESTION_EDIT'

const questions = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        questionEdit: {...state.questionEdit},
        questions: [
          ...state.questions,
          {...action.data}
        ]}
    case INIT_QUESTIONS:
      return {
        questionEdit: {...state.questionEdit},
        questions: [...action.data]
      }
    case FIND_QUESTION_SUCCESS:
      return {
        ...state,
        questionEdit: action.data
      }
    case ADD_OPTION:
      return {
        ...state,
        questionEdit: {
          ...state.questionEdit,
          options: [...state.questionEdit.options, action.data]
        }
      }
    case EDIT_OPTION:
      const {details} = action.data
      const optionIndex = details.id
      // remove the id so we dont put it inside the options
      delete details.id
      const options = [...state.questionEdit.options].map((option, index) => {
        if (index === optionIndex) {
          return {...option, ...details}
        }
        return option
      })
      return {
        ...state,
        questionEdit: {
          ...state.questionEdit,
          options: [...options]
        }
      }
    case REMOVE_OPTION:
      const filterOptions = [...state.questionEdit.options].filter((option, index) => {
        return index !== action.id
      })
      return {
        ...state,
        questionEdit: {
          ...state.questionEdit,
          options: [...filterOptions]
        }
      }

    case UPDATE_QUESTION_EDIT:
      return {
        ...state,
        questionEdit: {
          ...state.questionEdit,
          ...action.data
        }
      }
    default:
      return state
  }
}

const storeReducer = combineReducers({
  questions
})

const store = createStore(
  storeReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store
