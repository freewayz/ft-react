import React, {Component} from 'react'
import Question from './Question'

class Questions extends Component {
  render () {
    const {questions} = this.props

    return (
      <div>
        {
          questions.map((question, index) => {
            return <Question {...question} key={index} />
          })
        }
      </div>
    )
  }
}

export default Questions
