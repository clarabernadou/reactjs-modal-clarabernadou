import React, { useState, useEffect } from 'react';
import './styles/modal.css';

export default function Modal({ closeConfirmModal }) {
  // State variable for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Disable form inputs and scroll when the modal is open
      document.body.style.overflow = 'hidden';
      document.querySelectorAll('input, select, textarea').forEach((el) => {
        el.setAttribute('disabled', 'disabled');
      });

      // Close the confirmation modal with escape
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
      document.querySelectorAll('input, select, textarea').forEach((el) => {
        el.removeAttribute('disabled');
      });
    }
  }, [isModalOpen]);

  // Function to close the confirmation modal with escape
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeConfirmModal();
    }
  };

  return (
    <div className='test-modal'>
      <button onClick={() => setIsModalOpen(true)}>Test open modal</button>
      {isModalOpen && (
        <div className='modal'>
          <h2>Confirmation Modal</h2>
          <p>This is a confirmation modal.</p>
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
}