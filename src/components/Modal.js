import React from 'react';

const Modal = ({open, children, onClose}) => {
    return(
        <div>
            {open === true
                ?   <div className='modal-box'> 
                        <button onClick={onClose} className="button"> ╳ </button> {children} 
                        <button className="arrow-left"> {'<'} </button> <button className="arrow-right"> {'>'} </button>
                    </div>
                : null
            }
        </div>
)
}

export default Modal;