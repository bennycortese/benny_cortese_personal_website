import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://czptjemnwhgrjdiykjzg.supabase.co', 'your_anon_key');

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchRecipes = async () => {
        setIsLoading(true);
        try {
          const { data, error } = await supabase
            .from('recipes')
            .select('*')
            .ilike('name', `%${query}%`);
          
          if (error) throw error;
          
          setRecipes(data);
        } catch (error) {
          console.error('Error searching recipes:', error.message);
        } finally {
          setIsLoading(false);
        }
      };

  return (
    <div>
      <div className="form-control">
        <input 
          type="text" 
          placeholder="Search for recipes..." 
          className="input input-bordered w-full max-w-xs" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          className={`btn btn-primary mt-2 ${isLoading ? 'loading' : ''}`}
          onClick={searchRecipes}
          disabled={isLoading}
        >
          Search Recipes
        </button>
      </div>
      <div className="mt-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card w-96 bg-base-100 shadow-xl my-2">
            <div className="card-body">
              <h2 className="card-title">{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
            <div className="card-body">
              <h2 className="card-title-2">{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
