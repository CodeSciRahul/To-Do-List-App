import React from 'react'
import './main.css'
import { useState } from 'react'

const main = () => {
    const [todo, settodo] = useState('')
    const [todos, settodos] = useState([])
    const handleAdd = () =>{
        settodos(...todo)
        console.log(todos);
        settodo(" ")
    }
    const handleChange = (e) =>{
        settodo(e.target.value);
    }
    // const handleAdd = () =>{
    //     settodos(...todo, iscompleted= false)
    //     settodo(" ")
    // }
    const handleEdit = () =>{
    }
    const handledelete = () =>{
    }

  return (
    <div className="container bg-violet-300 mx-auto my-5 rounded-lg" style={{maxWidth: '80vw'}}>
        <h2 className='font-bold px-5 py-7 text-xl'>Add a Todo</h2>
        <input className='mx-5 w-1/2 rounded-sm outline-none px-4' onChange={handleChange} value={todo} type="text"/>
        <button className='bg-violet-800 text-white font-bold px-3 py-1 rounded-lg hover:opacity-80' onClick={handleAdd}>Add</button>
        <h2 className='font-bold px-5 py-7  text-xl'>Your Todos</h2>
        {todos.map(iteam=>{
             <div className="container2 flex">
        <input type="checkbox" className='mx-5 cursor-pointer' />
        <span>{iteam.todo}</span>
        <div className="btn">
        <button className='bg-violet-800 text-white font-bold px-2 py-1 rounded-lg hover:opacity-80 mx-4' onClick={handleEdit}>edit</button>
        <button className='bg-violet-800 text-white font-bold px-2 py-1 rounded-lg hover:opacity-80' onClick={handledelete}>Delete</button> 
        </div>
        </div>
        })}
       
       
        
        
    </div>
  )
}

export default main