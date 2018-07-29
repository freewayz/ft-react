import React from 'react'
import PropTypes from 'prop-types'
import RichTextEditor from 'react-rte'

class TextEditor extends React.Component {

	constructor(props) {
		super(props)
		const {inputMode, info} = props
		const initialValue = inputMode ? info: RichTextEditor.createValueFromString(this.props.info, 'html')

		this.state = {
			value: initialValue	
		}
	}

	handleChange = (event) => {
		console.log('This changes', event)
		const value = this.props.inputMode ? event.target.value: event
		this.setState({value})
		if (this.props.onTextChange) {
			// react rich text spit out a decorated string with some html formating
			const cleanValue = this.props.inputMode ? value : value.toString('html')
			this.props.onTextChange(cleanValue)
		}
	}


	render () {
		const {label, inputMode} = this.props
		return (
			<div className='question__input__row'>
				<label className='q__label'>
					{label} 
				</label>
				{ inputMode ?
						<input  
							className='input__title' 
							value={this.state.value}
							onChange={this.handleChange}
							/> :

						<RichTextEditor
							value={this.state.value}
							onChange={this.handleChange}
							/>
				}
			</div>

		)
	}
}


TextEditor.propTypes = {
	title: PropTypes.string,
	info: PropTypes.string,
	// for rendering either rich text or normal input
	inputMode: PropTypes.bool, 
	onTextChange: PropTypes.func.isRequired
}


export default TextEditor
