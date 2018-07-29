import mockQuestions from './mock-questions'
import axios from 'axios'

let baseUrl = 'http://localhost:8000/v1/questions/'
console.log('@@Reache here ', process.env.REACT_APP_HOST_ENV)
if (process.env.REACT_APP_HOST_ENV === 'prod') {
  baseUrl = '/v1/questions/'
}
export const getQuestions = () => {
  return Promise.resolve(mockQuestions)
}

export const fetchQuestion = () => {
  return axios.get(baseUrl)
}

export const postQuestion = (data) => {
  return axios.post(baseUrl, data)
}

export const getQuestion = (id) => {
  return axios.get(`${baseUrl}${id}/`)
}

export const putQuestion = (json) => {
  return axios.put(`${baseUrl}${json.id}/`, json)
}
