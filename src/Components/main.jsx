import React from 'react'
import './main.css'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const main = () => {
    const [todo, settodo] = useState('')
    const [todos, settodos] = useState([])

    useEffect(() => {
     let todostring=localStorage.getItem("todos")
     if(todostring)
     {
       let todos=JSON.parse(localStorage.getItem("todos"))
      settodos(todos);
     }
     
    }, [])//it will run only first time
    
    const savetols = (params) => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    const handleAdd = () =>{
      
      settodos([...todos, {id:uuidv4(), todo, iscompleted: false}])
      settodo("");
      savetols();
    }
    const handleChange = (e) =>{
        settodo(e.target.value);
    }
    const handleCheck = (e)=>{
      let id=e.target.name;
      let index=todos.findIndex(iteam=>{
        return iteam.id === id;
      })
      let newTodo=[...todos];
      settodos(newTodo);
      newTodo[index].iscompleted=!newTodo[index].iscompleted;
      savetols();
    }
    const handleEdit = (e) =>{
      let id =e;
      let t=todos.filter( iteam => {
        return iteam.id===id
      })
      console.log(id);
      console.log(t[0]);
      settodo(t[0].todo);

      let newTodo=todos.filter(iteam=>{
        return iteam.id!==id;
      });
      settodos(newTodo);
      savetols();
    }
    const handledelete = (e) =>{
      confirm("are you sure you want to delete")
      let id=e;
      let newTodo=todos.filter(iteam=>{
        return iteam.id!==id;
      });
      settodos(newTodo);
      savetols();
    }
  return (
    <div className="container bg-violet-300 mx-auto my-5 rounded-lg" style={{maxWidth: '80vw'}}>
        <h2 className='font-bold px-5 py-7 text-xl'>Add a Todo</h2>
        <input className='mx-5 w-1/2 rounded-sm outline-none px-4' onChange={handleChange} value={todo} type="text"/>
        <button className='bg-violet-800 text-white font-bold px-3 py-1 rounded-lg hover:opacity-80' onClick={handleAdd}>Save</button>
        <h2 className='font-bold px-5 py-7  text-xl'>Your Todos</h2>
        

        {todos.map(  iteam=>{
        return  <div key={iteam.id} className="container2 flex my-2">
          <div style={{minWidth: "70%"}}>
        <input type="checkbox" name={iteam.id} className='mx-5 cursor-pointer' onChange={handleCheck} value={iteam.iscompleted}/>
        <span className={iteam.iscompleted?"line-through":''}>{iteam.todo}</span>
        </div>
        <div className="btn">
        <button className='bg-violet-800 text-white font-bold px-2 py-1 rounded-lg hover:opacity-80 mx-4' onClick={()=>handleEdit(iteam.id)}>edit</button>
        <button className='bg-violet-800 text-white font-bold px-2 py-1 rounded-lg hover:opacity-80' onClick={()=>handledelete(iteam.id)}>Delete</button> 
        </div>
        </div>
        })}
    </div>
  )
}

export default main