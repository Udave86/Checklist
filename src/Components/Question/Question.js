import React from 'react'

const Question = ({ text, selected, onChange }) => {
  return (
    <div>
    <label>
      <input type="checkbox" checked={selected} onChange={onChange} />
      {text}
    </label>
  </div>
  )
}

export default Question