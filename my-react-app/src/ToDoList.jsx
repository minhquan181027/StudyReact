import { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    };

    return (
        <div>
            <h1>Todo List</h1>

            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />

            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;