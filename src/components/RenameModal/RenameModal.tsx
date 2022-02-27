import React, { useEffect, useRef, useState } from 'react';
import Modal from 'components/base/Modal/Modal';
import { TodoItem } from 'utils/types';
import './RenameModal.css';

interface RenameModalProps {
  todoItem?: TodoItem;
  onRename: (newName: string) => void;
  onCancel: () => void;
}

/**
 * Renders a modal for renaming tasks
 */
function RenameModal({ todoItem, onRename, onCancel }: RenameModalProps) {
  const [newName, setNewName] = useState(todoItem?.todo ?? '');
  const editInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (todoItem === undefined) return;

    // Set a default value for the edit input box
    setNewName(todoItem.todo);

    // Focus the edit input box
    setTimeout(() => {
      editInputRef.current?.focus();
    }, 200);
  }, [todoItem]);

  return (
    <Modal
      visible={todoItem !== undefined}
      title="Rename"
      onClose={onCancel}
      actions={[
        { label: 'Rename', primary: true, onClick: () => onRename(newName) },
        { label: 'Cancel', primary: false, onClick: onCancel },
      ]}
    >
      Rename item <strong>"{todoItem?.todo}"</strong>

      <div className="todo-rename-modal-input">
        <input
          ref={editInputRef}
          type="text"
          className="styled-input"
          placeholder="New name"
          value={newName}
          onChange={(e) => setNewName(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onRename(newName);
            }
          }}
        />
      </div>
    </Modal>
  )
}

export default RenameModal;
