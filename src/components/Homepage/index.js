import React, {useState, useEffect} from 'react'
import './styles.scss'

// API
import moviesApi from "../../Api/moviesApi"

// Components
import SearchInput from '../Form/SearchInput'
import Btn from '../Form/Btn'

const Homepage = ({getMovieID}) => {
    const [movies, setMovies] = useState([])
    const [term, setTerm] = useState("")

    useEffect(() => {
        const timeId = setTimeout(async() => {
            if(term) {
                const res =  await moviesApi.get(`/en/API/SearchTitle/k_aw1o71z1/${term}`)
                setMovies(res.data.results)
                console.log(res.data.results)
            }
        }, 1000);
        
        return () => {
            clearTimeout(timeId)
        }
        
    }, [term])

    return (
        <div className="Homepage">
            <SearchInput label="Search for your favourite movie" type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            {
            movies.map(movie => {
                    return (
                    <div className="movieCard" key={movie.id}>
                        <div className="movieCard-dec">
                            <h3>Title: {movie.title}</h3>
                            <p>description: {movie.description}</p>
                            <p>id: {movie.id}</p>
                            <Btn onClick={() => getMovieID(movie.id)}>
                                Read more
                            </Btn>
                        </div> 
                        <div className="movieCard-img" style={{
                            backgroundImage: `linear-gradient(
                                to right bottom,
                                white,
                                #92fe9d08
                              ), url(${movie.image})`,
                            height: "38vh",
                            width: "27vh",
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                            position: "relative"
                        }}>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Homepage
