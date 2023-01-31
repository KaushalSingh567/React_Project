import { useState } from "react";

function Todo1() {
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [item3, setItem3] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = () =>{
      setList([...list,{item1,item2,item3}])
      setItem1('');
      setItem2('');
      setItem3('');
  }
console.log(list);
  return (
    <div>
      <input type="text" value={item1} onChange={(e) => setItem1(e.target.value)} placeholder="Enter first name" />
      <input type="text" value={item2} onChange={(e) => setItem2(e.target.value)} placeholder="Enter midd name" />
      <input type="text" value={item3} onChange={(e) => setItem3(e.target.value)} placeholder="Enter last name" />
      <button onClick={() => handleSubmit()}>Submit</button>
      
      <div>{list.map((ab)=>(
        <div>{ab.item1} {ab.item2} {ab.item3}</div>
      )
      )}
      </div>
    
    </div>
  );
}

export default Todo1;

