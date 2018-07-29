import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
	findQuestion, 
	addOption, 
	updateQuestionEdit,
	saveQuestionEdit} from '../actions'
import TextEditor from './TextEditor'
import Loading from './../Loading'
import OptionsContainer from './options/OptionsContainer'

class QuestionEditContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			question: this.props.question
		}
	}
	componentDidMount() {
		const {findQuestion, match} = this.props
		const questionId  = match.params.id
		if (questionId) {
			findQuestion(questionId)
		}
	}

	handleAddOption = () => {
		this.props.addOption({
			answer: '',
			feedback: '',
			is_correct: false,
		})
	}

	handleSaveQuestionEdit = () => {
		this.props.saveQuestionEdit()
	}

	handleTextChange = (name, value) => {
		const changes = {}
		changes[name] = value
		this.props.updateQuestionEdit(changes)
	}


	render () {
		const {question} = this.props
		if (!question) {
			return <Loading/>
		}
		return (
			<div className='question__content__edit'>	
				<div className='content__toolbar'>
					<span className='edit__header'>
						AP US History
					</span>
					<div>
						<button className='btn primary' onClick={this.handleSaveQuestionEdit}> 
							Save Draft
						</button>
						<button className='btn secondary' onClick={this.handleSaveQuestionEdit}> 
							Publish....
						</button>
					</div>
				</div>
				<TextEditor
					inputMode
					info={question.title}
					label={'Title'}
					onTextChange={this.handleTextChange.bind(this,'title')}
					/>

				<section className='content__section'>
					{ question && <TextEditor
						info={question.description}
						label={'Question'}
						onTextChange={this.handleTextChange.bind(this,'description')}
						/>
					}
					{ question.options && <OptionsContainer
						options={question.options}
						/>
					}
					<button className='btn primary' onClick={this.handleAddOption}>Add Answer</button>
				</section>
			</div>
		)
	}
}

QuestionEditContainer.propTypes = {
	question: PropTypes.object,
	saveQuestionEdit: PropTypes.func.isRequired
}
const mapStateToProps = ({questions}) => {
	return {
		question: questions.questionEdit
	}
}
const mapDispatchToProps = {
	findQuestion,
	addOption,
	updateQuestionEdit,
	saveQuestionEdit
}
export default connect(mapStateToProps, mapDispatchToProps) (QuestionEditContainer)
