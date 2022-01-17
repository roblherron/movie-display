import React from "react";
import Cards from './Cards';

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
                    <Cards card={card}/>)
            }
            )
            }

        </div>
    )
    };
export default Grid;
