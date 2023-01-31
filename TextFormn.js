import React, { useState } from 'react'

const TextFormn = () => {
  const [textvalue, setTextvalue] = useState('');

  const handleuppercase = () => {
    const newvalue = textvalue.toUpperCase();
    setTextvalue(newvalue);
  }

  const handlelowercase = () => {
    const newvalue = textvalue.toLowerCase();
    setTextvalue(newvalue);
  }

  const handleOnChange = (e) => {
    setTextvalue(e.target.value);
  }

  return (
    <>
      <div>
        <h2>Enter a Text</h2>
        <textarea placeholder='Enter any Text' value={textvalue} onChange={handleOnChange} />
        <button onClick={handleuppercase}>Convert to Uppercase</button>
        <button onClick={handlelowercase}>Convert to Lowercase</button>
      </div>
      <div>
        <h2>Your Text Summary</h2>
        <p>{textvalue.split(' ').length} words and {textvalue.length} chracters</p>
      </div>
    </>
  )
}

export default TextFormn


















