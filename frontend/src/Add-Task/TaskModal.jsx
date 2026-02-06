import { X } from "lucide-react";
import styles from './addTask.module.css'; 

function TaskModal({ onClose, onAddTask, newTask, setNewTask }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>Add New Task</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={onAddTask} className={styles.modalForm}>
          <label>Task Title</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            required
          />

          <label>Description</label>
          <textarea
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

          <button type="submit" className={styles.submitBtn}>Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;