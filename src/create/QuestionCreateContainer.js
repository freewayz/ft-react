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
			library: "AP US History",
			type: "Multi Choice",
			visibility:"Draft",
		}
		this.typesOptions = ['Multi Choice', 'Free Response', 'Text', 'Quiz']
	}

	handleSaveQuestion = () => {
		const {addQuestion} = this.props
		// use the default question state for creating a new question
		addQuestion({...this.state, options:[]} )
	}

	handleTextChange = (name, value) => {

		this.setState({
			[name]: name === 'type'? value.target.value : value
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
				<div className='question__input__row'>
					<label className='q__label'>
						Question Type
					</label>
					<div>
					{
						this.typesOptions.map((value, index) =>
							<label key={index} style={{paddingRight: '10px'}}>
								{value}
								<input 
									type='radio' 
									value={value}
									onChange={this.handleTextChange.bind(this, 'type')}
									checked={this.state.type === value} />

							</label>
						)
					}
				</div>
				</div>

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
