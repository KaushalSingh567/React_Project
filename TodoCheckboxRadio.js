import React, { useState } from 'react';

const TodoCheckboxRadio = () => {
  const [item, setItem] = useState({
    fname: '',
    mName: '',
    lName: '',
    checkbox1: '',
    checkbox2: '',
    checkbox3: '',
    radiobtn: '',
  })

  const handleSubmit = () => {
    setItem({
      ...item, fname: item.fname, mName: item.mName, lName: item.lName,
      checkbox1: item.checkbox1, checkbox2: item.checkbox2, checkbox3: item.checkbox3, radiobtn: item.radiobtn
    }
    )
  }

  console.log(item);

  return (
    <>
      <h2>Todo App Checkbox</h2>
      {/* Todo */}
      First Name<input type="text" onChange={(e) => setItem({ ...item, fname: e.target.value })} /><br />
      Mid Name<input type="text" onChange={(e) => setItem({ ...item, mName: e.target.value })} /><br />
      Last Name<input type="text" onChange={(e) => setItem({ ...item, lName: e.target.value })} /><br />
      <p>Select Your Course</p>

      {/* Checkbox */}
      <input type="checkbox" value="JavaScript" onChange={(e) => setItem({ ...item, checkbox1: e.target.value })} />
      <label>JavaScript</label>
      <input type="checkbox" value="React js" onChange={(e) => setItem({ ...item, checkbox2: e.target.value })} />
      <label>React js</label>
      <input type="checkbox" value="Next js" onChange={(e) => setItem({ ...item, checkbox3: e.target.value })} />
      <label>Next js</label> <br />

      {/* radio btn */}
      <input type="radio" id="html" name="fav_language" value="male"
        onChange={(e) => setItem({ ...item, radiobtn: e.target.value })} />
      <label for="html">Male</label><br />
      <input type="radio" id="css" name="fav_language" value="female"
        onChange={(e) => setItem({ ...item, radiobtn: e.target.value })} />
      <label for="css">female</label><br />


      {/* Submit button */}
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default TodoCheckboxRadio


