# Testing

## Modal Implementation
Here is an example of the modal implementation structure in the file hierarchy of your React application:

``` 
├── src/
│   ├── components/
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       ├── modal.css
│   │       └── index.js
│   └── App.js
├── public/
│   └── index.html
├── package.json
├── package-lock.json
└── README.md

```

## DevDependencies
The following DevDependencies are added to your project:

### 1. Babel
- **@babel/core**: The core of Babel that enables JavaScript code transformation.
- **@babel/preset-env**: A Babel preset that transforms code based on the target environment.
- **@babel/preset-react**: A Babel preset specifically for React to support React features.

### 2. ESLint
- **eslint**: A JavaScript linter that helps detect and fix syntax errors and coding style issues.
- **eslint-plugin-react**: An ESLint plugin for React that applies React-specific linting rules.

### 3. Prettier
- **prettier**: A code formatting tool that helps maintain consistent code style.

These DevDependencies enhance your development environment by enabling code transformation, linting, and code formatting.

To install these DevDependencies, run the following command:

```bash
$ npm install
```

## Usage
Here's an example of how to use the modal in your code:

```jsx
import React, { useState } from 'react';
import Modal from './components/Modal';

const YourComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            {showModal && <Modal closeModal={closeModal} />}
        </div>
    );
};

export default YourComponent;
```

Make sure to adjust the import path of the `Modal` component based on your project's file structure.

## Licenses
Created by Clara Bernadou as part of the "JavaScript/React Application Developer" training program at OpenClassrooms.