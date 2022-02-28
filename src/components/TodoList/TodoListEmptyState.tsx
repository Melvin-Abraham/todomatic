import React from 'react';
import { motion } from 'framer-motion';
import { FilterOption } from 'components/TabGroup/TabGroup';;
import './TodoListEmptyState.css';

interface TodoListEmptyStateProps {
  filterOption: FilterOption;
}

type EmptyStateSlotData = {
  [key in FilterOption]: {
    illustration: string;
    heading: string;
    details: string;
  }
}

const emptyStateSlotData: EmptyStateSlotData = {
  all: {
    illustration: '(^-^*)',
    heading: 'It seems empty in here',
    details: 'There are no tasks to show for now. Consider adding some...',
  },
  pending: {
    illustration: '(≧∇≦)ﾉ',
    heading: 'Hooray! No pending tasks',
    details: 'You don\'t have any pending tasks for now. Enjoy :)',
  },
  completed: {
    illustration: '(´･ω･`)?',
    heading: 'Hmmm. I don\'t see any completed tasks',
    details: 'It seems you have not completed any tasks so far...',
  },
}

function TodoListEmptyState({ filterOption }: TodoListEmptyStateProps) {
  return (
    <motion.div
      key={filterOption}
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
        {emptyStateSlotData[filterOption].illustration}
      </div>

      <h2 className="todo-list-empty-state-heading">
        {emptyStateSlotData[filterOption].heading}
      </h2>

      <p className="todo-list-empty-state-details">
        {emptyStateSlotData[filterOption].details}
      </p>
    </motion.div>
  )
}

export default TodoListEmptyState;
