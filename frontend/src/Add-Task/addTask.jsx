import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./addTask.module.css";
import { CheckCircle, Trash2, Plus } from "lucide-react";
import TaskModal from "./TaskModal";

function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  // 1. Fetch tasks from MongoDB on component load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // 2. Add Task API Call
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        newTask
      );

      if (response.status === 201 || response.status === 200) {
        setNewTask({ title: "", description: "", deadline: "" });
        setShowForm(false);
        fetchTasks(); // Refresh list
      }
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // 3. Delete Task API Call (✅ FIXED HERE)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks(); // Refresh list
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className={styles.tasksContainer}>
      <h2 className={styles.tasksTitle}>My Tasks</h2>

      <div className={styles.tasksList}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className={styles.taskCard}>
              <div className={styles.taskHeader}>
                <h3>{task.title}</h3>

                {/* Delete Button */}
                <Trash2
                  size={18}
                  className={styles.deleteIcon}
                  onClick={() => handleDelete(task._id)}
                />
              </div>

              <p>{task.description}</p>
              <small>
                Deadline: {new Date(task.deadline).toLocaleString()}
              </small>
            </div>
          ))
        ) : (
          <p>No tasks found. Add one!</p>
        )}
      </div>

      {/* Floating Add Button */}
      <button className={styles.fab} onClick={() => setShowForm(true)}>
        <Plus size={24} />
      </button>

      {/* Modal */}
      {showForm && (
        <TaskModal
          onClose={() => setShowForm(false)}
          onAddTask={handleAddTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
      )}
    </div>
  );
}

export default AddTask;
