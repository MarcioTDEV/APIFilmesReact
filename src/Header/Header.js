import React from "react"
import lupa from "../Assets/icone_lupa.png"
import styles from "./Header.module.css"

import { Link, useNavigate } from "react-router-dom"


export default function Header (){

    const [dados, setDados] = React.useState()
    
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(!dados)return ;
        
        navigate("/search/"+dados)
    }

    return (<>
    <header className={styles.Header}>
        <div className={styles.HeaderLogo}>
            <Link to="/">
            <span className="HeaderLogoSpan">TheMovieHall</span>
            </Link>
        </div>
        
        <div className={styles.HeaderSearch}>
           <form onSubmit={handleSubmit}>

            <input 
            className={styles.HeaderInput}
            type="text"
            onInput={(e)=>setDados(e.target.value)}
            placeholder="Search Movie..."
            />

           </form>
            
        </div>
    </header>
    </>)
}