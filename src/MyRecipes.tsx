import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.example.com/search?query=${query}&apiKey=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button onClick={searchRecipes}>Search</button>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
