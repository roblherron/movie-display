/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../images/No-Photo-Available.jpg'
import Modal from './Modal'


// for (let i = 0; i + 1; i<21) { console.log(i)}

const Cards = (props) => {



    const [isOpen, setIsOpen] = React.useState(false)

    console.log(isOpen)
    console.log("key", props)
   
    function indexDown() {console.log("Hello there.")};
    function indexUp() {console.log("General Kenobi")};
    
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
    }

    console.log(props.index)
        //create a function for arrows
        //index cards
        //onFunctionClick for right arrow increase index by 1
        //onFunctionClick for left arrow decrease index by 1 
const date = props.card.release_date
    return (

        
    <div className="card">
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="modal-backdrop">
            <button onClick={indexDown} className="arrow-left"> {'<'} </button> <button onClick={indexUp} className="arrow-right"> {'>'} </button>
                <div className="modal-box">
                    <h1 className='modal-title'>{`${props.card.original_title}`}</h1>  
                    <h2 className='modal-release'>{<b>Release Date:</b>} {`${formatDate(date)}`}</h2>
                    <div className='image-container'>
                        <img src={[`https://image.tmdb.org/t/p/w500/${props.card.poster_path}`]} alt='card' className='modal-image'></img>
                    </div>
                    <p className="modal-overview">{`${props.card.overview}`} {<br></br>} {<br></br>} {<b>{`${props.card.vote_average}`}</b>}{` / 10 (${props.card.vote_count} total votes)`}</p>
                </div>
                
            </div>
            
        </Modal>


            <a onClick={() => {setIsOpen(true)}}>
            <div className="rating-bubble">
                <p className="rating">{`${props.card.vote_average}`}</p>
            </div>
            {props.card.poster_path === null
                ? <img src={[`${image}`]} alt='card' className="card-image"></img>
                : <img src={[`https://image.tmdb.org/t/p/w500/${props.card.poster_path}`]} alt='card' className="card-image"></img>
            }
            <h2 className="title">{`${props.card.original_title}`}</h2>
            </a>
    </div>
)
}
export default Cards;