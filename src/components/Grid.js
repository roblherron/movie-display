import React from "react";
import Cards from './Cards';
import Modal from './Modal';

//indexup and down needs to somehow move the card in the .map function up and down the array


function indexUp(arr) {

    for (let i = 0; i <= arr.length; i++)
    {
        console.log("heyo", arr[i + 1])
    }
}


const Grid = (props) => {

    indexUp(props.movies);
    console.log("test", props.movies.index)
    
    return (
        <div className="grid">
            {
                props.movies.length < 1
                ? <h2>Sorry, no results were found.</h2>
                : props.movies.map((card) => {
                    console.log(card.index)
                return (
                    <Cards card={card} />
                    )}
                )}
            {/*   THIS MAKES MODAL INTO A CHILD OF GRID   ) &&
                 props.movies.map((module) => { 
                 return (
                    <Modal module={module}/>
                    )} )

              } */}
)
        </div>
        
    )
    };
export default Grid;
