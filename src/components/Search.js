import React from "react";
import logo from '../images/logo.png';


const Search = (props) => {

    return(
      <div>
        <a href="#" >
          <img src={logo} alt="logo" className='logo'/>
        </a>
        <form className="search-form" onSubmit={props.handleSubmit}
        >
        <input
          className="search-input"
          type="search"
          name="search"
          placeholder="🔎︎  Search for a movie"
          onChange={props.handleChange}
        />
      </form>
      </div>
    )
}
export default Search;
