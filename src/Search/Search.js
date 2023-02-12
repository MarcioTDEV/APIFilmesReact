import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./Search.module.css"

export default function Search() {

    const [dados, setDados] = React.useState()

    const rota = useParams()
    const busca = rota.q.toLowerCase().replaceAll(" ", "+")
    

    React.useEffect(() => {
        
        const apiKey = "81ae08ff86ec73ab4579ee43f410afaa"
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busca}`)
            .then(data => data.json())
            .then(data => {
                
                
                setDados(data)
                console.log(data)    
            })
            
    }, [busca])




    return (<>
        
        {dados && dados.results.length === 0 && <div className={styles.NoResults}><h2>No Results for {rota.q}</h2></div>}

        {dados && dados.results.length > 0 && 
        
        <div className={styles.SearchResultsMain}>

            <h1>All results for {rota.q}</h1>
        <div className={styles.SearchResults}>

            

        {dados.results.map((item, index) => (

            <div className={styles.SearchResultsBox} key={index}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
                <h2>{item.title}</h2>
                <p>Release: {item.release_date}</p>
                <p>Average: {item.vote_average}</p>
                
                <Link to={`/movie/${item.id}`}>
                <button
                    className={styles.SearchResultsButton}
                >more details</button>
                </Link>
            </div>

        ))}

    </div>
    </div>
        }

        

      
    </>)
}