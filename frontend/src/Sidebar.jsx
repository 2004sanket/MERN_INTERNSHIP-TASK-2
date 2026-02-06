import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Plus, Inbox, CalendarDays, CalendarRange, CheckCircle, Settings } from 'lucide-react';
import axios from 'axios';
import styles from './Sidebar.module.css';
import TaskModal from './Add-Task/TaskModal';

const Sidebar = () => {
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "", deadline: "" });

  const handleSidebarSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
      if (response.status === 201 || response.status === 200) {
        setNewTask({ title: "", description: "", deadline: "" });
        setShowForm(false);
        window.location.reload(); 
      }
    } catch (err) {
      console.error("Error saving task:", err);
      alert("Failed to save task.");
    }
  };

  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.profileSection}>
          <div className={styles.userImage}>S</div>
          <p className={styles.userName}>Sanket Parmar</p>
        </div>

        <button className={styles.addButton} onClick={() => setShowForm(true)}>
          <Plus size={20} />
          <span>Add Task</span>
        </button>

        <ul className={styles.navList}>
          <li><NavLink to="/inbox" className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}><Inbox size={18} /> <span>Inbox</span></NavLink></li>
          <li><NavLink to="/today" className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}><CalendarDays size={18} /> <span>Today</span></NavLink></li>
          <li><NavLink to="/upcoming" className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}><CalendarRange size={18} /> <span>Upcoming</span></NavLink></li>
          <li><NavLink to="/completed" className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}><CheckCircle size={18} /> <span>Completed</span></NavLink></li>
          <li><NavLink to="/settings" className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}><Settings size={18} /> <span>Settings</span></NavLink></li>
        </ul>
      </nav>

      {/* Modal is now outside the <nav> but inside the Fragment */}
      {showForm && (
        <TaskModal 
          onClose={() => setShowForm(false)} 
          onAddTask={handleSidebarSubmit}
          newTask={newTask}
          setNewTask={setNewTask}
        />
      )}
    </>
  );
};

export default Sidebar;