import React, {useState} from 'react'

const PracToDo = () => {

    const [task, setTask ] = useState("");
    const [todos, setTodos] = useState([])

    function handleAdd(){
        setTodos([...todos, {task, isComplete: false}])
        // console.log(todos)
        setTask("")
    }
    

    function handleMark(index){
        let newTodos = [...todos]
        newTodos[index].isComplete = !newTodos[index].isComplete
        setTodos([...newTodos])
    }

    function handleRemove(index){
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos([...newTodos])
    }

    return (
        <>
            <input 
            type='text' 
            placeholder='Add a task'
            onChange={e => setTask(e.target.value)}
            value={task}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
            {
                todos.map((task, index) => {
                   return <li key={index} style={{textDecoration: task.isComplete ? "line-through" : "none"}}>
                        {task.task}
                        <button onClick={()=>handleMark(index)}>Mark as {task.isComplete ? "inComplete" : "Complete"}</button>
                        <button onClick={()=>handleRemove(index)}>Remove</button> 
                    </li>
                })
            }
            </ul>
        </>
    )
}

export default PracToDo;