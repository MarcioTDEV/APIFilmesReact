import React from "react"
import { useParams } from "react-router"
import styles from "./Movie.module.css"

export default function Movie (){

    const apiKey = "81ae08ff86ec73ab4579ee43f410afaa"
    const id = useParams()
    const [dados, setDados] = React.useState()

    React.useEffect(() => {
        
        fetch(`http://api.themoviedb.org/3/movie/${id.id}?api_key=${apiKey}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setDados(data)
            })

    }, [])

    return (<>
    
    {dados && 
    
    <div className={styles.BoxMovie}>

        <div className={styles.BoxMovieImg}>
        <img src={`https://image.tmdb.org/t/p/w500/${dados.poster_path}`}/>
        </div>

        <div className={styles.BoxMovieData}>
            <h1>{dados.title}</h1>
            <h4>Original Title: {dados.original_title}</h4>
            <h4>Popularity: {dados.popularity}</h4>
            <h4>Average: {dados.vote_average}</h4>
            <br></br>
            <h3>{dados.tagline}</h3>
            <br></br>
            <h4>{dados.overview}</h4>
            <br></br>
            
            <h2></h2>
        </div>

    </div>
    
    }
    


    </>)
}