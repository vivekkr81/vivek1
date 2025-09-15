import { useEffect, useRef, useState } from 'react'
import axios, { Axios } from 'axios'

function App() {
  const [todo, settodo] = useState([])
  const [pika, setpika] = useState("Write your task here")
  let tick = null

  useEffect(() => {
    const monconnect = async()=>{
      const data = await axios.get('http://localhost:5000/api')
      console.log(data);
      
      settodo(data.data)
      
    }
     monconnect()
    
  }, [])
  
  function handle(e){
       
       setpika( e.target.value)
  }
  async function onchan(e){
      tick = e.target.checked
       const ide = e.target.getAttribute('data-id')
     const pika = await axios.post('http://localhost:5000/api/check', {check: tick, id: ide})
      console.log(pika)
      
  }
  
 async function submit(){
     
      const stat = await axios.post('http://localhost:5000/api/submit', {name: pika})
      settodo(stat.data)
 }
 async function del(e){
    const index = e.target.getAttribute('data-index')
      const stat = await axios.post('http://localhost:5000/api/delete', todo[index])
       settodo(stat.data)
 }
  return (
    <>
    <h1>To Do App</h1>
     <input type="text" name="task" value={pika} onChange={handle} className='input'/>
     <br />
     <button className='btn' onClick={submit}>Add</button>
     {
     todo.map((to, index)=>{
      return (<div className='diva' key={index} >
                <p>{to.name}</p>
          
               <label htmlFor="checkbox">Task completed :</label>
              <input onChange={onchan} data-id={to._id} type="checkbox" name="checku" defaultChecked={ to.check === 'true'}/>
               <br />
              <button className='btn1' data-index={index} onClick={del}>delete</button>
              </div>)
     }
    )
     }
    </>
  )
}

export default App
