import React, {useState, useEffect} from 'react'
import "./styles.scss"

// Components
import Btn from '../Form/Btn'

// API
import moviesApi from '../../Api/moviesApi'

const MovieDetails = ({movieID, setMovieID}) => {
    const [movieData, setMovieData] = useState()

    useEffect(() => {
      if(movieID) {
        getMoviesData()
      }
    }, [movieID])
  
    const getMoviesData = async() => {
      const res = await moviesApi.get(`en/API/Title//k_aw1o71z1/${movieID}/FullActor,Ratings`)
      setMovieData(res.data)
      console.log("Results from fullActor APIS: ", res.data)
    }
    if(movieData) {
        return (
            <div className="MovieDetails">
                <div
                style={{
                    backgroundImage: `url(${movieData.image})`,
                    width: "38vh",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    position: "relative"
                }} 
                className="MovieDetails-img">
                </div>
                <div className="MovieDetails-flexbox__left">
                    <h2>Title:</h2> <h3>{movieData.title}</h3>
                    <div className="MovieDetails-ratings">
                        <h2>Ratings:</h2>
                        <br/>
                        <h3>imDb:</h3> <p>{movieData.ratings.imDb}</p>
                        <h3>metacritic:</h3> <p>{movieData.ratings.metacritic}</p>
                        <h3>rottenTomatoes:</h3> <p>{movieData.ratings.rottenTomatoes}</p>
                        <h3>tV_com:</h3> <p>{movieData.ratings.tV_com}</p>
                        <h3>theMovieDb:</h3> <p>{movieData.ratings.theMovieDb}</p>
                    </div>
                    <h2>Cast:</h2>
                    <div className="MovieDetails-cast">
                        {movieData.actorList.splice(0, 9).map(actor => {
                            return (
                            <div
                            key={actor.id}
                            style={{
                                backgroundImage: `linear-gradient(
                                    to right bottom,
                                    #000000c9,
                                    #92fe9d08
                                  ), url(${actor.image})`,
                                height: "200px",
                                width: "120px",
                                backgroundSize: "cover",
                                backgroundPosition: "top",
                                position: "relative",
                                color: 'white',
                                fontSize: "1.4rem"
                            }}
                            className="MovieDetails-cast__actorImg">
                                {actor.name}
                            </div>
                            )
                        })}
                    </div>
                    <Btn className="MovieDetails-btn" onClick={() => setMovieID()}>Go to search</Btn>
                </div>
            </div>
        ) 
    } else {
        return("Loading")
    }
}

export default MovieDetails
