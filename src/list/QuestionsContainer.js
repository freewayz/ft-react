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
        { questions.length > 0
          ? <div className='question__list'>
            <div className='question__item question__item__header'>
              <span className='question__item__col'>ID Accum</span>
              <span className='question__item__col'>Reviewed</span>
              <span className='question__item__col question__title'>Title</span>
              <span className='question__item__col'>Library</span>
              <span className='question__item__col'>Visibility</span>
              <span className='question__item__col'>Type</span>
              <span className='question__item__col'>XML</span>
              <span className='question__item__col'> Action </span>
            </div>
            <Questions questions={questions} />
          </div>
          :	<div style={{textAlign: 'center'}}>
            <div><i class='fal fa-box-open' /></div>
            <h3>No Question has been added, use the Add Quesiton button to create one</h3>
          </div>
        }
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
