const mongoose = require('mongoose');

// This Schema defines the structure of your "Task" document in MongoDB
const TaskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  deadline: { 
    type: Date, 
    required: true 
  },
  completed: { 
    type: Boolean, 
    default: false 
  }
}, { 
  // Automatically creates 'createdAt' and 'updatedAt' fields
  timestamps: true 
});

module.exports = mongoose.model('Task', TaskSchema);