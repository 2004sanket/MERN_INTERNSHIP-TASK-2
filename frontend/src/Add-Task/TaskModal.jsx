import React from "react";
import { X } from "lucide-react";
import styles from './addTask.module.css'; 

function TaskModal({ onClose, onAddTask, newTask, setNewTask, isEditing }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          {/* Correction: Dynamic title based on mode */}
          <h3>{isEditing ? "Edit Task" : "Add New Task"}</h3>
          <button className={styles.closeBtn} onClick={onClose} type="button">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={onAddTask} className={styles.modalForm}>
          <label>Task Title</label>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            required
          />

          <label>Description</label>
          <textarea
            placeholder="Add some details..."
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            required
          ></textarea>

          <label>Deadline</label>
          <input
            type="datetime-local"
            value={newTask.deadline}
            onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
            required
          />

          {/* Correction: Dynamic button text */}
          <button type="submit" className={styles.submitBtn}>
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;