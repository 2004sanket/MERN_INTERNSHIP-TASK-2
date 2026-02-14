import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './addTask.module.css'; 
import { Plus, Pencil, Trash2 } from "lucide-react";
import TaskModal from "./TaskModal"; 

function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [currentTaskId, setCurrentTaskId] = useState(null); 
  const [newTask, setNewTask] = useState({ title: "", description: "", deadline: "" });

  const API_URL = 'http://localhost:5000/api/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Prepare form for Editing
  const handleEditClick = (task) => {
    setIsEditing(true);
    setCurrentTaskId(task._id);
    // Format date to YYYY-MM-DD so HTML date inputs can read it
    const formattedDate = task.deadline ? new Date(task.deadline).toISOString().split('T')[0] : "";
    setNewTask({ 
      title: task.title, 
      description: task.description, 
      deadline: formattedDate 
    });
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
    setIsEditing(false);
    setCurrentTaskId(null);
    setNewTask({ title: "", description: "", deadline: "" });
  };

  // THE FIX: Unified Save Logic
  const handleSaveTask = async (e) => {
    if (e) e.preventDefault(); // Prevent page refresh
    
    try {
      if (isEditing && currentTaskId) {
        // PUT request for editing
        await axios.put(`${API_URL}/${currentTaskId}`, newTask);
      } else {
        // POST request for new task
        await axios.post(API_URL, newTask);
      }
      
      fetchTasks(); // Refresh list from DB
      handleCloseModal(); // Reset form and close
    } catch (err) {
      console.error("Error saving task:", err);
      alert("Failed to save task. Check console.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchTasks();
      } catch (err) {
        console.error("Error deleting:", err);
      }
    }
  };

  return (
    <div className={styles.tasksContainer}>
      <h2 className={styles.tasksTitle}>My Tasks</h2>
      
      <div className={styles.tasksList}>
        {tasks.map(task => (
          <div key={task._id} className={styles.taskCard}>
            <div className={styles.taskHeader}>
              <h3>{task.title}</h3>
              <div className={styles.taskActions}>
                <button onClick={() => handleEditClick(task)} className={styles.editBtn}><Pencil size={18}/></button>
                <button onClick={() => handleDelete(task._id)} className={styles.deleteBtn}><Trash2 size={18}/></button>
              </div>
            </div>
            <p>{task.description}</p>
            <small>Deadline: {new Date(task.deadline).toLocaleDateString()}</small>
          </div>
        ))}
      </div>

      <button className={styles.fab} onClick={() => { setIsEditing(false); setShowForm(true); }}>
        <Plus size={24} />
      </button>

      {showForm && (
        <TaskModal 
          onClose={handleCloseModal} 
          onAddTask={handleSaveTask} // This is the crucial prop
          newTask={newTask}
          setNewTask={setNewTask}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}

export default AddTask;