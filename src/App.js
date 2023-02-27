import "./App.css";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <MovieContainer />
    </div>
  );
}

export default App;
