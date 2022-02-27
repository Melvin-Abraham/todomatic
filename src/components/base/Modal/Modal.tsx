import React, { useEffect } from 'react';
import BaseModal, { BaseModalProps } from 'components/base/BaseModal/BaseModal';
import ModalActionButton, { ModalAction } from './ModalActionButton';
import './Modal.css';

export interface ModalProps extends BaseModalProps {
  title: string;
  actions: ModalAction[];
}

let lastActiveElement: Element | null = null;

function Modal({ title, actions, visible, onClose, children }: ModalProps) {
  useEffect(() => {
    if (visible) {
      lastActiveElement = document.activeElement;
    }
    else {
      if (lastActiveElement !== null) {
        (lastActiveElement as HTMLElement).focus();
      }
    }
  }, [visible]);

  return (
    <BaseModal visible={visible} onClose={onClose}>
      <h2 className="modal-title">
        { title }
      </h2>

      <div className="modal-content">
        { children }
      </div>

      <div className="modal-actions-group">
        {actions.map((action) => (
          <ModalActionButton
            key={action.label}
            label={action.label}
            primary={action.primary}
            onClick={action.onClick}
          />
        ))}
      </div>
    </BaseModal>
  )
}

export default Modal;
