import React from 'react';
import { motion } from 'framer-motion';
import './TodoListEmptyState.css';

function TodoListEmptyState() {
  return (
    <motion.div
      className="todo-list-empty-state-root"
      animate={{
        scale: [1.2, 0.98, 1],
        opacity: [0, 1],
        transition: {
          duration: 0.5,
          type: 'spring',
          bounce: 1,
        }
      }}
    >
      <div className="todo-list-empty-state-illustration">
        {'(^-^*)'}
      </div>

      <h2 className="todo-list-empty-state-heading">
        It seems empty in here
      </h2>

      <p className="todo-list-empty-state-details">
        There are no tasks to show for now...
      </p>
    </motion.div>
  )
}

export default TodoListEmptyState;
