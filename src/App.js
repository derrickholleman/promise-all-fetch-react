import { useEffect, useState } from "react";
import "./App.css";
import Weather from './Components/Weather'
import Movies from './Components/Movies'
import Cocktail from "./Components/Cocktails";

function App() {
  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);
  const [cocktail, setCocktail] = useState([])

  useEffect(() => {
    Promise.all([
      fetch("https://ghibliapi.herokuapp.com/films/"),
      fetch(
        "http://api.weatherapi.com/v1/current.json?key=fc6f5be1fc714afba7d24907212906&q=minneapolis&aqi=no"
      ), fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')]
    )
    .then(response => Promise.all(response.map(res => res.json())))
    .then(data => {
      setMovies(data[0])
      setWeather([data[1]])
      setCocktail([data[2]])

      console.log(data)
    })
  }, []);

  return (

  <div className="App">
    {
      weather.map((weatherData, index) => (
        <Weather 
        key={index}
        weather={weatherData}/>
      ))
    }

    {
      movies.map((movieData) => (
        <Movies 
        key={movieData.id}
        movie={movieData}/>
      ))
    }

    {
      cocktail.map((cocktailData) => (
        <Cocktail 
        key={cocktailData.drinks[0].idDrink}
        cocktail={cocktailData}/>
      ))
    }
  </div>
  )
}

export default App;
