'use client'
import styles from './todo.module.css'

import { useState } from "react"

function Page() {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function getInput(e) {
    setInitial(e.target.value);
  }

  function getData() {
    if (editIndex !== null) {
      const updatedData = data.map((item, idx) =>
        idx === editIndex ? initial : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, initial]);
    }
    setInitial("");
  }

  const deleteTask = (index) => {
    const filtered = data.filter((_, id) => id !== index);
    setData(filtered);
    if (editIndex === index) {
      setInitial("");
      setEditIndex(null);
    }
  }

  const editTask = (index) => {
    setInitial(data[index]);
    setEditIndex(index);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>To-Do</h1>
      <div className={styles.inputSection}>
        <input
          type="text"
          placeholder="Write here"
          value={initial}
          onChange={getInput}
          className={styles.input}
        />
        <button onClick={getData} className={styles.button}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      {data.map((curValue, index) => (
        <div key={index} className={styles.task}>
          <p className={styles.taskText}>{curValue}</p>
          <div className={styles.taskButtons}>
            <button onClick={() => editTask(index)} className={`${styles.editBtn} ${styles.button}`}>Edit</button>
            <button onClick={() => deleteTask(index)} className={`${styles.deleteBtn} ${styles.button}`}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;







