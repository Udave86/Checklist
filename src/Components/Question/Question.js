import React from 'react'

const Question = ({ text, selected, onChange }) => {
  return (
    <div className="ms-4 ">
    <label>
      <input 
      className='custom_checkbox form-check-input'
      type="checkbox"
       checked={selected} 
       onChange={onChange} />
      <span className='ms-3 fs-18 fw-normal'>
        {text}
      </span>
    </label>
  </div>
  )
}

export default Question