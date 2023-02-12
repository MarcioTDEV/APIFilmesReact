import React from "react"
import { Link } from "react-router-dom"
import styles from "./Main.module.css"


export default function Main() {
    const apiKey = "81ae08ff86ec73ab4579ee43f410afaa"
    const [dadosSlider, setDadosSlider] = React.useState()
    const [cont,setCont] = React.useState(1)
    React.useEffect(() => {
        //url padrão 
        fetch(`http://api.themoviedb.org/3/movie/top_rated?page=2&api_key=${apiKey}`)
            //url de pesquisa
            // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=batman+dark`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setDadosSlider(data)
            })

    }, [])

    const handleClickLeft = () =>{
        if (cont===0)return setCont(6);
        console.log(cont)
        setCont(cont -1)
        
    }

    const handleClickRight = () =>{
        if (cont>6)return setCont(0);
        setCont(cont +1)
    }





    return (
        <main className={styles.Main}>
            <h1>Our Selection...</h1>



            <div className={styles.MainSlider}>
                {dadosSlider && (
                    <>
                        <div className={styles.MainSliderPoster}>
                            <img src={`https://image.tmdb.org/t/p/w500/${dadosSlider.results[cont].backdrop_path}`} />
                        </div>

                        <div className={styles.MainSliderBotoes}>

                            <button 
                            className={styles.MainSliderBotoesEsquerda}
                            onClick={handleClickLeft}
                            >&lt;&lt;</button>

                            <button 
                            onClick={handleClickRight}
                            className={styles.MainSliderBotoesDireita}>&gt;&gt;</button>
                        </div>

                        <div className={styles.MainSliderTitle}>
                            <img
                                className={styles.MainSliderTitleImg}
                                src={`https://image.tmdb.org/t/p/w500/${dadosSlider.results[cont].poster_path}`}
                            />

                            <div className="MainSliderTitleData">
                                <h2>{dadosSlider.results[cont].original_title}</h2>
                                <p>Release: {dadosSlider.results[cont].release_date}</p>
                                <p>Average: {dadosSlider.results[cont].vote_average}</p>
                                <button
                                className={styles.MainSliderTitleDataButton}
                                >
                                    <Link to={`movie/${dadosSlider.results[cont].id}`}>
                                    more details
                                    </Link>
                                    
                                    </button>
                            </div>
                        </div>

                    </>
                )}





            </div>


        </main>
    )
}