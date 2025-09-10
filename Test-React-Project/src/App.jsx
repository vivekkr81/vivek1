import React, { useEffect, useState } from 'react'
import Card from './Card'


const App = () => {
    const [findata, setfindata] = useState([])
    const [error, seterror] = useState(null)
      useEffect(() => {
        const mew = async()=>{
          try{const recdata = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await recdata.json()
             setfindata(data)
          }
          catch(e){console.log("NO internet connection "+ e)
            seterror(e)
          }
        
        }
        mew()
      }, [])
        
      if(error){
        return <h1>No internet connection Error: {error}</h1>
      }
  
  return (
    <div>
        {
          findata.map((e)=>{
            return <Card key = {e.id} id ={e.id} title = {e.title} body = {e.body}/>
          })
        }

    </div>
    
  )
}

export default App
