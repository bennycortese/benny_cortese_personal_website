import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');

  const searchRecipes = async () => {
    const apiKey = 'YOUR_API_KEY';
    // Replace the URL with your actual recipe search API URL
    const apiUrl = `https://api.example.com/search?query=${query}&apiKey=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      // Assuming the API returns an array of recipe objects
      console.log(response.data); // For debugging, log the response data
      // Update your state or UI here based on the API response
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="form-control">
      <label className="label" htmlFor="recipeSearch">
        <span className="label-text">Search for recipes</span>
      </label>
      <input
        type="text"
        id="recipeSearch"
        className="input input-bordered"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type ingredients, dish names..."
      />
      <button className="btn btn-primary mt-2" onClick={searchRecipes}>Search</button>
    </div>
  );
};

export default RecipeSearch;
