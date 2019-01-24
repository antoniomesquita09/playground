import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="container">
            <div className="modal fade" id="myModal" role="dialog"></div>
            <div className="modal-dialog">
                <div onClick={(e) => e.stopPropagation()} className="modal-content">
                    <div className="modal-header">
                        {props.title}
                    </div>
                    <div className="modal-body">
                        {props.content}
                    </div>
                    <div className="modal-footer">
                        {props.actions}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;