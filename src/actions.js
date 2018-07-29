import { fetchQuestion, postQuestion, getQuestion, putQuestion } from './api/question'

export const addOption = (option) => ({
  type: 'ADD_OPTION',
  data: option
})

export const editOption = (details) => ({
  type: 'EDIT_OPTION',
  data: {...details}
})

export const updateQuestionEdit = (details) => ({
  type: 'UPDATE_QUESTION_EDIT',
  data: details
})

export const initQuestions = (questions) => ({
  type: 'INIT_QUESTIONS',
  data: questions
})

export const loadQuestions = () => (dispatch, getState) => {
  fetchQuestion()
    .then((response) => {
      dispatch(initQuestions(response.data))
    })
}

export const addQuestion = (data) => (dispatch, getState) => {
  dispatch({
    type: 'ADDING_QUESTION'
  })
  postQuestion(data)
    .then((respone) => {
      dispatch({
        type: 'ADD_QUESTION_SUCCESSFULL'
      })
    })
}

export const findQuestion = id => (dispatch, getState) => {
  dispatch({
    type: 'REQUEST_FIND_QUESTION'
  })
  getQuestion(id)
    .then((res) => {
      dispatch({
        type: 'FIND_QUESTION_SUCCESS',
        data: res.data
      })
    })
}

export const saveQuestionEdit = () => (dispatch, getState) => {
  dispatch({type: 'REQUEST_SAVE_QUESTION_EDIT'})
  const {questionEdit} = getState().questions
  putQuestion(questionEdit)
    .then((res) => {
      dispatch({type: 'SUCCESS_UPDATING_QUESTION'})
    })
    .catch((err) => {
      console.log('Error Saving Question ', err)
    })
}
