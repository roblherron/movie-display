/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../images/No-Photo-Available.jpg'
import Modal from './Modal'


// for (let i = 0; i + 1; i<21) { console.log(i)}

const Cards = (props) => {



    const [isOpen, setIsOpen] = React.useState(false)


    console.log(isOpen)
    console.log("key", props)

    console.log(props.card.index)

    return (
        
        <div className="card">
            
            <Modal module={props.card} open={isOpen} onClose={() => setIsOpen(false)} />

            {/* </Modal> */}

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