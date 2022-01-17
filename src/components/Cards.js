/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../images/No-Photo-Available.jpg'
import Modal from './Modal'


//CARDS AND MODAL NEED TO COMMUNICATE TO EACH OTHER SO THE ONCLICK EVENT CAN WORK
//IF CARD INDEX MATCHES MODAL INDEX SET MODAL TO ISOPEN VALUE BASED ON ONCLICK BOOL

const Cards = (props) => {

//THIS IS A TEMPLATE FOR EACH CARD. EACH CARD IS IT'S OWN OBJECT

    const [isOpen, setIsOpen] = React.useState(false)


    console.log(isOpen)
    console.log("key", props)
//  let newTest= props.cards.map((test) => {return (test)})
// console.log("newtest", newTest)
    return (
        
        <div className="card">
            
            <Modal module={props.card} open={isOpen} onClose={() => setIsOpen(false)} />

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