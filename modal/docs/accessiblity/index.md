# Accessibility

## The `<dialog>` element
The `<dialog></dialog>` element is used to create a modal dialog box in a web page. It allows displaying contextual content that requires user attention before continuing to interact with the rest of the page.

## The `role="dialog"` attribute
The `role="dialog"` attribute applied to an HTML element indicates that the element represents a modal dialog box. This enables assistive technologies and browsers to correctly identify and handle the content of the dialog box, ensuring better accessibility for users.

## The `aria-modal` attribute
The `aria-modal` attribute is used to indicate whether a modal dialog box is currently open and blocking interaction with the rest of the page. When its value is set to `"true"`, it means that the dialog box is modal, and when its value is set to `"false"` or not present, it indicates that it is not modal. This information is crucial for assistive technologies as it allows users to understand the current state of the page and the dialog box.

## The `aria-hidden` attribute
The `aria-hidden` attribute is used to indicate whether an element should be hidden or ignored by assistive technologies. When its value is set to `"true"`, it means that the element and its content should be ignored by assistive technologies. This can be used to hide elements when a modal dialog box is open to ensure that the user's attention is solely on the dialog box.

## Keyboard Navigation
To ensure a smooth keyboard navigation experience within a modal dialog box, you can add the following functions to the file where you intend to place your modal:

```javascript
useEffect(() => {
    if (isModalOpen) {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }
}, [isModalOpen]);

const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
        closeConfirmModal();
    }
};
```

These functions add an event listener for the "Escape" key when the modal is open. When the user presses the "Escape" key, the `closeConfirmModal()` function (which should be implemented by you) is called to close the modal.

By using this approach, you enhance the accessibility of your modal by allowing users to easily close it using the keyboard, without relying solely on mouse or touch interactions.