import React from "react";
import "./App.css"
import Critics from "./Critics/Critics";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Search from "./Search/Search"
import Footer from "./Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Movie/Movie";
import NotFound from "./NotFound/NotFound";

export default function App() {



  return (<>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<> <Main /><Critics /></>}></Route>
        <Route path="/search/:q" element={<Search/>} />
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>



      <Footer />
    </BrowserRouter>
  </>)
}