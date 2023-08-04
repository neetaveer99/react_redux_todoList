import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useState } from 'react';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';



function App() {

  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };


  const removeHandler =(t) => {
    dispatch(RemoveTodoAction(t));
  };


  return (
   <div className='App'>
    <header className='App-header'>
      <h2>Todo list app in redux</h2>
      
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter a todo'
        style={{
          width:350,
          padding: 10,
          borderRadius: 20,
          border: "none",
          fontSize: 20,
        }}
        onChange={(e) => setTodo(e.target.value)}
        />

        <button
        type='submit'
        style={{
          padding: 12,
          borderRadius: 25,
          fontSize: 15,
          marginLeft: 20,
        }}
        >Go</button>
      </form>

      <ul className='allTodo'>
        {
          todos && todos.map((t) => (
            <li key = {t.id} className='singleTodo'>
            <span className='todotext'>{t.todo}</span>
            <button
            style={{
              borderRadius: 25,
              padding:10,
              border: "1px solid white",
              color: "white",
              backgroundColor: "orangered",
            }}
            onClick = {() => removeHandler(t)}
            >Delete</button>
            </li>

          ) )
        }

         
      </ul>
    </header>
     
   </div>
  );
}

export default App;
