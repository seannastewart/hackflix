import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function MovieInfo() {

    const { movieId: movie_id } = useParams()

    const [details, setDetails] = useState({})
    console.log(useParams())

    useEffect(function () {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: 'ee3fb13aa785eb7ab7afe325323cedf7'
            },
        }).then((res) => {
            console.log(res.data)
            setDetails(res.data);
        })
    }, [])



    return (
        <div className="poster">
            <div className="description">
                <h2>{details.original_title}</h2>
                <h3>{details.tagline}</h3>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    alt={`Movie poster for ${details.original_title}`}
                />
            </div>
        </div>

    )
}

export default MovieInfo