import React from 'react';
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client (replace 'your_supabase_url' and 'your_supabase_anon_key' with actual values)
const supabaseUrl = 'your_supabase_url';
const supabaseAnonKey = 'your_supabase_anon_key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const RecipeSearch = () => {
  const searchRecipes = async () => {
    const query = 'chicken'; // Example hardcoded query
    
    try {
      const { data, error } = await supabase
        .from('recipes') // Assuming your table name is 'recipes'
        .select('*') // Selects all columns
        .ilike('name', `%${query}%`); // Assuming you're searching for recipes by name, and using case-insensitive 'like'
      
      if (error) {
        throw error;
      }
      
      console.log(data); // Log the data or update state to render in UI
    } catch (error) {
      console.error('Error searching recipes:', error.message);
    }
  };

  return (
    <div className="form-control">
      <button className="btn btn-primary mt-2" onClick={searchRecipes}>Search Recipes</button>
    </div>
  );
};

export default RecipeSearch;
