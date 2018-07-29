import React from 'react'
import {Link} from 'react-router-dom'

const Question = ({question}) => {
  const {title, id} = question
  const editLink = `/edit/${id}`
  return (
    <div className='question__item'>
      <div> 8 </div>
      <div> Recieved </div>
      <div>
        <a href={editLink}>
          {title}
        </a>
      </div>
      <div> Libarary</div>
      <div>Published </div>
      <div> Multichoice </div>
      <div> XML </div>
    </div>

  )
}

export default Question
