import React from 'react';



const Modal = ({module, open, children, onClose, indexUp, indexDown}) => {

    function indexDown() {console.log("Hello there.", module)};
    function indexUp() {console.log("General Kenobi")};
    
    const date = module.release_date;
//THERE IS ONE MODAL PER CARD. TO SWITCH MODALS YOU HAVE TO SWITCH CARDS.
//THEREFORE, UP AND DOWN ARROWS NEED TO TELL GRID TO SET ISOPEN(TRUE) TO THE NEXT CARD
//NEED TO RESTRUCTURE SO THAT MODALS ARE SIBLINGS TO CARDS INSTEAD OF CHILDREN OF CARDS

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [month, day, year].join('/');
    };

    return(
        <div>
            {open === true
                ?   <div className='modal-box'> 
                        <button onClick={onClose} className="button"> ╳ </button> {children} 
                        <div className="modal-backdrop">
                <button onClick={indexDown} className="arrow-left"> {'<'} </button> <button onClick={indexUp} className="arrow-right"> {'>'} </button>
                    <div className="modal-box">
                        <h1 className='modal-title'>{`${module.original_title}`}</h1>  
                        <h2 className='modal-release'>{<b>Release Date:</b>} {`${formatDate(date)}`}</h2>
                        <div className='image-container'>
                            <img src={[`https://image.tmdb.org/t/p/w500/${module.poster_path}`]} alt='module' className='modal-image'></img>
                        </div>
                        <p className="modal-overview">{`${module.overview}`} {<br></br>} {<br></br>} {<b>{`${module.vote_average}`}</b>}{` / 10 (${module.vote_count} total votes)`}</p>
                    </div>
                    
                </div>
                    </div>
                : null
            }
        </div>
)
}

export default Modal;