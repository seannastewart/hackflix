import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieCatalogue() {
    console.log('catalogue has rendered')
    const [movies, setMovies] = useState([])

    useEffect(function () {
        axios({
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: "ee3fb13aa785eb7ab7afe325323cedf7",
            },
        }).then((res) => {
            setMovies(res.data.results);
            console.log(res.data.results)
        })
    }, [])

    // ee3fb13aa785eb7ab7afe325323cedf7 API KEY
    return (
        <section>
            <h2>here are your viewing options:</h2>

            <ul className="catalogue">
                {
                    movies.map(function (movie) {
                        return (
                            <li key={movie.id}>
                                <Link to={`/${movie.id}`}>
                                    < img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={`Movie poster for ${movie.title}`} />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section >

    )
}

export default MovieCatalogue