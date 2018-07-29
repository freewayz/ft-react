import React, {Component} from 'react'
import Question from './Question'

class Questions extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {questions} = this.props

    return (
      <div>
        {
          questions.map((question, index) => {
            return <Question question={question} key={index} />
          })
        }
      </div>
    )
  }
}

export default Questions
