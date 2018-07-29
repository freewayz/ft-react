import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {editOption, removeOption} from './../../actions'
import Option from './Option'

class OptionsContainer extends React.Component {

	handleUpdateOptionEdit = (details) => {
		// the index of the option
		this.props.editOption({details})
	}

	render () {
		const {options, removeOption} = this.props
		return (
			<div className='question__options'>
				<h2>Answers </h2>
				<div className='options'>
					{
						options.map((option, index) => <Option
							option={option} 
							id={index}
							removeOption={removeOption}
							onUpdate={this.handleUpdateOptionEdit}
							key={index} />
						)
					}
				</div>
			</div>
		)
	}
}

OptionsContainer.propTypes = {
	options: PropTypes.array,
	editOption: PropTypes.func.isRequired,
	removeOption: PropTypes.func.isRequired
}

const mapDispatchToProps = {
	editOption,
	removeOption
}

export default connect(null, mapDispatchToProps)(OptionsContainer)
