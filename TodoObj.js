import React,{useState} from 'react'

const TodoObj = () => {
    const [item,setitem]=useState({
        mydata1 : '',
        mydata2 : '',
        mydata3 : '',
        list : []
    })

    const handlesubmit = () => {
setitem( {...item, list : [...item.list , {mydata1:item.mydata1,mydata2:item.mydata2,mydata3:item.mydata3}] } )
    }
    console.log("hgcdghxcdgfx",item.list);

  return (
    <div>
        <h2>Todo3</h2>
        <input type="text" placeholder='Enter value'
        onChange={(e)=>{ setitem( { ...item,mydata1 : e.target.value } )}}/>
        
        <input type="text" placeholder='Enter value'
        onChange={(e)=>{ setitem( { ...item,mydata2 : e.target.value } )}}/>

        <input type="text" placeholder='Enter value'
        onChange={(e)=>{ setitem( { ...item,mydata3 : e.target.value } )}}/>

        <button onClick={handlesubmit}>Add Todo</button>
        <table>
            <tr>
                <th>state1</th>
                <th>state2</th>
                <th>state3</th>
            </tr>
            {item.list.map((ls)=>(
                <tr>
                    <td>{ls.mydata1}</td>
                    <td>{ls.mydata2}</td>
                    <td>{ls.mydata3}</td>
                    {console.log("map value",ls)}
                </tr>
                
            ))}
        </table>
    </div>
  )
}

export default TodoObj