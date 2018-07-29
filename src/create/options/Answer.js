import React from 'react'
import TextEditor from '../TextEditor'

const Answer = ({info, handleUpdate}) => {
  const handleChange = (newValue) => {
    // send the udpate to the store
    handleUpdate({'answer': newValue})
  }

  return (
    <TextEditor
      label={'Answer'}
      info={info}
      onTextChange={handleChange}
    />
  )
}

export default Answer
