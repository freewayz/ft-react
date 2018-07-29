import React from 'react'
import Answer from './Answer'
import FeedBack from './FeedBack'

class Option extends React.Component {

	state = {
		is_correct: this.props.option.is_correct
	}

	handleIsCorrect = () => {
		const checked = !this.state.is_correct
		this.setState(({is_correct}) => ({is_correct: checked}))
		this.optionChange({is_correct: checked})

	}

	optionChange = (value) => {
		// update redux store with any of children 
		// component value change (Answer,FeedBack and Checkbox)
		const {id,onUpdate} = this.props
		onUpdate({id, ...value})
	}
	render() {
		const {option} = this.props
		const {is_correct} = this.state
		const commonProps = {
			handleUpdate: this.optionChange
		}
		const panelStyle = is_correct ? 'is__correct': ''

		return (
			<div className='option__panel'>
				<div className={`option__panel__header ${panelStyle}`}>
					<span className='option__label'> A </span>
					<span> {is_correct ? 'Correct' : 'Mark as correct'}
			<input 
							type='checkbox' 
							onChange={this.handleIsCorrect}
							checked={this.state.is_correct} />
					</span>
				</div>
				<div className='option__panel__content'>
					{/* Handle compoenent differently so we can test and refactor with ease */}
				<Answer info={option.answer} handleUpdate={this.optionChange} />
				<FeedBack info={option.feedback} {...commonProps} />
			</div>
			</div>
		)
	}
}

export default Option
