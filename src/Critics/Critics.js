import React from "react";
import { Link } from "react-router-dom";
import styles from "./Critics.module.css"

export default function Critics() {
    const apiKey = "81ae08ff86ec73ab4579ee43f410afaa"
    const [dadosMovie, setDadosMovie] = React.useState()
    const [cont, setCont] = React.useState(1)
    React.useEffect(() => {

        fetch(`http://api.themoviedb.org/3/movie/top_rated?page=3&api_key=${apiKey}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setDadosMovie(data)
            })

    }, [])
    return (
        <div className={styles.Critics}>
            <h1>Critic's Suggestion...</h1>

            <div className={styles.CriticsMovies}>

                {dadosMovie && dadosMovie.results.map((item, index) => (

                    <div className={styles.CriticsMoviesBox} key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        />
                        <h2>{item.title}</h2>
                        <p>Release: {item.release_date}</p>
                        <p>Average: {item.vote_average}</p>
                        <Link to={`movie/${item.id}`}>
                        <button
                            className={styles.MainSliderTitleDataButton}
                        >more details</button>
                        </Link>
                    </div>

                ))}

            </div>
        </div>
    )
}