# Modal for ReactJS

This project created by Clara Bernadou

## Table of Contents

* [Installation](#installation)
* [API documentation](#api-documentation)
* [Examples](#examples)
* [Render](#render)

## Installation

`$ npm install`
`$ npm i --save @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core`
Use `<Modal closeConfirmModal={closeConfirmModal}/>` inside your React app

## API documentation

## Examples

```jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './app.css'

Modal.setAppElement('#yourAppElement');

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelectorAll('input, select, textarea').forEach((el) => {
        el.setAttribute('disabled', 'disabled');
      });

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

  const openConfirmModal = () => {
    setShowModal(true);
    setIsModalOpen(true);
  };

  const closeConfirmModal = () => {
    setShowModal(false);
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeConfirmModal();
    }
  };

  return (
    <div className='test-modal'>
      <button onClick={openConfirmModal}>Test open modal</button>
      {showModal && <Modal closeConfirmModal={closeConfirmModal} />}
    </div>
  );
}

ReactDOM.render(<App />, appElement);
```

## Render

![Screenshot](./modal-render.png "Modal Render") 

