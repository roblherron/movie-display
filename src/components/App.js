import React from 'react';
import axios from 'axios';
import Search from './Search';
import Grid from './Grid'
 
export default function App() {

     const [movies, setMovies] = React.useState([])
     const [searchQuery, setSearchQuery] = React.useState('')
     const [heading, setHeading] = React.useState('') 
     const [isClicked, setIsClicked] = React.useState(false)

     
    
	React.useEffect(() => {
     axios
     .get(
     `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
         )
         .then((response) => {
         setMovies( [...response.data.results])
         setHeading('Most Recent Movies')
         setIsClicked(false)
        })
         .catch(error => {
         console.log('error', error.response)
     });
	}, [])

  let moviesList = movies.map((deets) => ({
    adult: deets.adult,
    backdrop_path: deets.backdrop_path,
    genre_ids: deets.genre_ids,
    id: deets.id,
    original_language: deets.original_language,
    original_title: deets.original_title,
    overview: deets.overview,
    popularity: deets.popularity,
    poster_path: deets.poster_path,
    release_date: deets.release_date,
    title: deets.title,
    video: deets.video,
    vote_average: deets.vote_average,
    vote_count: deets.vote_count,
    index: ''
  }));

function addIndex() {
  for (let i = 0; i < moviesList.length; i++) {
moviesList[i].index = i + 1;
}}

addIndex();


//HANDLER FUNCTIONS

        // const handleLogoClick = (e) => {
        //     axios
        //         .get(
        //         `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
        //             )
        //             .then((response) => {
        //             setMovies( [...response.data.results])
        //             setHeading('Most Recent Movies')
        //             console.log('init response', response.data.results)
        //             })
        //             .catch(error => {
        //             console.log('error', error.response)
        //         });
        // }

      const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${searchQuery}`
                )
                .then((response) => {
                    setMovies( [...response.data.results])
                    setHeading(`Results for '${searchQuery}'`)
                        // console.log('response', response.data.results)
                } )
                .catch((error) => {
                  console.log('error', error.response)
              });
      }
 
      const handleChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value)
      }
 
        return (
<div>
    <div className="header">
        <Search handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
    <hr/>
    <h1 className="heading">{heading}</h1>
    <Grid movies={moviesList}/>
</div>)
}
