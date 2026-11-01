import { useEffect, useState } from 'react';
import { Modal } from './lib';
import './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const openConfirmModal = () => setShowModal(true);
  const closeConfirmModal = () => setShowModal(false);

  useEffect(() => {
    if (!showModal) {
      return undefined;
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <main className="test-modal">
      <h1>Modal for ReactJS</h1>
      <p>This project is created by Clara Bernadou.</p>
      <button type="button" onClick={openConfirmModal}>Test open modal</button>
      <p className="hint">Close it with the cross button or the Escape key.</p>
      <p>
        <a href="https://github.com/clarabernadou/reactjs-modal-clarabernadou">Source code and documentation</a>
      </p>
      {showModal && <Modal closeConfirmModal={closeConfirmModal} />}
    </main>
  );
}
