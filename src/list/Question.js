import React from 'react'
import {Link} from 'react-router-dom'

const Question = (question) => {
  const {title, id, library, reviewed, type, visibility} = question
  const editLink = `/edit/${id}`
  return (
    <div className='question__item'>
      <div className='question__item__col'> {id} </div>
      <div className='question__item__col'> {reviewed ? <i class='fas fa-check' /> : <i class='fas fa-check' />} </div>
      <div className='quetion__item__col question__title'>
        <a href={editLink}>
          {title}
        </a>
      </div>
      <div className='question__item__col'>{library}</div>
      <div className='question__item__col'>{visibility}</div>
      <div className='question__item__col'>{type}</div>
      <div><span role='img' aria-label='xml'>❌</span></div>
      <div> <Link to={editLink}> Edit </Link> </div>
    </div>

  )
}

export default Question
