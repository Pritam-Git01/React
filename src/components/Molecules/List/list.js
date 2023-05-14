import React, { useState } from 'react'
import styles from './list.module.css'

function List() {
    const [task, SetTask] = useState([])
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        SetTask([...task, input])
        setInput('')
    }
    const handleDelete = (index) => {
        const newTask = [...task]
        newTask.splice(index, 1)
        SetTask(newTask)
    }
    return (
        <div className={styles.container}>
            
            <div className={styles.wraper}>
            <h2>Your To-Do App</h2>
                <div className={styles.taskField}>
                    
                    <input type='text' placeholder='Add Your Task' value={input} onChange={handleChange} />
                    <button className={styles.btn} onClick={handleClick}>Add Task</button>
                </div>
                <div className={styles.item}>
                    {task.map((item, index) => {
                        return (
                            <>
                                <ul className={styles.list}>
                                    <li key={index}>{item}
                                        <button className={styles.delBtn} onClick={() => handleDelete(index)}>Delete</button></li>
                                </ul>

                            </>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default List;