import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addQuestion} from './../actions'
import TextEditor from './TextEditor'

class QuestionCreateContainer extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			title: '',
			description: '',
			reviewed: false,
			library: "Ahmedu Bello University",
			type: "Multi Choice",
			visibility:"Draft",
		}
	}

	handleSaveQuestion = () => {
		const {addQuestion} = this.props
		// use the default question state for creating a new question
		addQuestion({...this.state, options:[]} )
	}

	handleTextChange = (name, value) => {
		this.setState({
			[name]: value
		})
	}

	render () {
		const {title, description} = this.state

		return (
			<div>
				<TextEditor
					inputMode
					label={'Title'}
					info={title}
					onTextChange={this.handleTextChange.bind(this, 'title')}
					/>
				<TextEditor
					label={'Question'}
					info={description}
					onTextChange={this.handleTextChange.bind(this, 'description')}
					/>

				<button className='btn primary' onClick={this.handleSaveQuestion}>Save Question</button>
			</div>
		)
	}
}

QuestionCreateContainer.propTypes = {
	addQuestion: PropTypes.func
}

const mapDispatchToProps ={
	addQuestion
}

export default connect(null, mapDispatchToProps)(QuestionCreateContainer)
