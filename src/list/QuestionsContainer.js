import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loading from '../Loading'
import {loadQuestions} from '../actions'
import Questions from './Questions'
import './index.css'

class QuestionContainer extends Component {
  componentDidMount () {
    const {loadQuestions} = this.props
    loadQuestions()
  }
  render () {
    const {questions} = this.props
    if (!questions) {
      return (<Loading />)
    }
    return (
      <div>
        <a href='/create' className='btn primary left'> Add Question</a>
        <div className='clearfix' />
        <div className='question__list'>
          <div className='question__item question__item__header'>
            <span>ID</span>
            <span>Accum Reviewed </span>
            <span>Title</span>
            <span>Library</span>
            <span>Visibility</span>
            <span>Type</span>
            <span>Type</span>
            <span>XML</span>
          </div>
          <Questions questions={questions} />
        </div>
      </div>
    )
  }
}

QuestionContainer.propTypes = {
  questions: PropTypes.array
}

const mapStateToProps = ({questions}) => {
  return {
    questions: questions.questions
  }
}
const mapDispatchToProps = {
  loadQuestions
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)
