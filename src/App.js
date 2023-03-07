import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import Searchbar from "./components/Searchbar";

const API_KEY = "25be1a64";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [searchInput, setsearchInput] = useState("");
  const [films, setFilms] = useState([]);

  const searchFilms = async function (title) {
    const response = await fetch(`${BASE_URL}&s=${title}`);
    const data = await response.json();
    if (data.Response === "True") {
      setFilms(data.Search);
    } else {
      alert(`Alas! Films not Found 😑`);
      setsearchInput("");
    }
  };

  return (
    <div className="App">
      <Header />
      <Searchbar
        searchInput={searchInput}
        setsearchInput={setsearchInput}
        searchFilms={searchFilms}
      />
      <MovieContainer films={films} searchFilms={searchFilms} />
    </div>
  );
}

export default App;
