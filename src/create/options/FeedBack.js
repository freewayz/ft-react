import React from 'react'
import TextEditor from '../TextEditor'

const FeedBack = ({info, handleUpdate}) => {
  const handleChange = (newValue) => {
    // send the udpate to the store
    handleUpdate({'feedback': newValue})
  }

  return (
    <TextEditor
      label={'FeedBack'}
      info={info}
      onTextChange={handleChange}
    />
  )
}

export default FeedBack
