import React, { useState } from 'react';

const ToDo = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([]);

    const addTask = (task) => {
        task && setTodos([...todos, {task, isComplete: false}])
        setTask("")
    }

    const handleRemove = (index) => {

        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos([...newTodos])
    }

    const toggle = (index) => {

        let newTodos = [...todos]
        newTodos[index].isComplete = !newTodos[index].isComplete
        setTodos([...newTodos])
    }
    return (
        <>
            <input type="text" placeholder='write task'
            onChange={e => setTask(e.target.value)} 
            value={task}
            />
            <button onClick={() => addTask(task)}>Add</button>
            <ul>
                {
                    todos.map((task, index) => (
                        <li 
                        key={index}
                        style={ {textDecoration: task.isComplete ? "line-through" : "none"}}>{task.task}
                            <button onClick={() => toggle(index)}>Mark as complete</button>
                            <button onClick={() => handleRemove(index)}>remove</button>
                        </li>
                    ))
                    
                }
            </ul>
        </>
    )
}

export default ToDo