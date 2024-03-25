import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {
  const API_ID = "7ab8b769";
  const API_KEY = "14e5986afc7c6f4da3aa8163407ed86d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=7ab8b769&app_key=14e5986afc7c6f4da3aa8163407ed86d`)

    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <h1>Vinay's Recipe Search App</h1>

      <form onSubmit={getSearch} action="" className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>


      <div className="recipes">

        {recipes.map(recipe => (
          <Recipe key={Math.random() * 1000 } ingredients = {recipe.recipe.ingredients} image={recipe.recipe.image} calories={recipe.recipe.calories} title={recipe.recipe.label} />
        ))}
      </div>
    </div>
  )
}

export default App;
