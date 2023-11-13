import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      handleAddTask();
    }
  };

  return (
    <div className="app">
      <div className="appBox">
        <h2 className="title">Todo App</h2>
        
        <div className="searchBox">
          <input
            type="text"
            name="itemTextbox"
            className="itemTextbox"
            placeholder="Add your new todo"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            name="addItemBtn"
            className="addItemBtn"
            onClick={handleAddTask}
          >
            +
          </button>
        </div>

        <div className="itemList">
          {tasks.map((task, index) => (
            <div className="itemContainer" key={index}>
              <p>{task}</p>
              <button
                type="button"
                className="deleteItemBtn"
                onClick={() => {
                  const updatedTasks = [...tasks];
                  updatedTasks.splice(index, 1);
                  setTasks(updatedTasks);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}

          <div className="clearAllContainer">
            <p>You have {tasks.length} pending tasks</p>
            <button 
            type="button" 
            className="clearAllBtn"
            onClick={() => setTasks([])}
            >
              Clear All
            </button>
          </div>

        </div>

    
      </div>
    </div>  
  );
}

export default App;
