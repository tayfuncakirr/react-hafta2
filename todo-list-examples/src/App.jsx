import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState ([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos){
      setTodos(JSON.parse(savedTodos));
    }
  },[]);

  const addTodo = () =>{
    if(inputValue.trim() === "") return;
    const newTodos =[...todos, inputValue];
    setTodos(newTodos);
    setInputValue("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_,i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const deleteAll = () =>{
    setTodos([]);
    localStorage.removeItem("todos");
  }

  return (
    <div className='list-container'>
      <input
        type="text"
        placeholder='Todo Giriniz...'
        value={inputValue}
        onChange={(event)=> setInputValue(event.target.value)}
      />
      <button className='add-btn' onClick={addTodo}>Ekle</button>
      <ul className='ul-list'>
        {todos.map((todo,index) =>(
            <li key={index}>
              {todo}
              <button className='delete-todo-btn' onClick={()=> deleteTodo(index)}>x</button>
              </li>
        ))}
      </ul>
      <button className='delete-all-btn' onClick={deleteAll}>Tümünü Sil</button>
      {todos.length === 0 && <p className='warning'>Henüz todo yok</p>}
    </div>
  )
}

export default App
