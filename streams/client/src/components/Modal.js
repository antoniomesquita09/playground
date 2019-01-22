import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
    return ReactDom.createPortal(
        <h3>Modal</h3>,
        document.querySelector('#modal')
    );
};

export default Modal;