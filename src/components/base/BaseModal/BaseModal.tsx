import React from 'react';
import { createPortal } from 'react-dom';
import './BaseModal.css';

export interface BaseModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

function BaseModal({ children, visible, onClose }: BaseModalProps) {
  const BaseModalElement = (
    <div
      className="modal-root"
      data-visible={visible}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
    >
      <div
        className="modal-scrim"
        onClick={onClose}
      />

      <div className="modal-container">
        { children }
      </div>
    </div>
  );

  return createPortal(
    BaseModalElement,
    document.querySelector('body')!,
  );
}

export default BaseModal;
