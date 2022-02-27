import React from 'react';
import './ModalActionButton.css';

export interface ModalAction {
  label: string;
  primary: boolean;
  onClick: () => void;
}

function ModalActionButton({ label, primary, onClick }: ModalAction) {
  return (
    <button
      type="button"
      className="modal-action-button"
      data-primary={primary}
      onClick={onClick}
    >
      { label }
    </button>
  )
}

export default ModalActionButton;
