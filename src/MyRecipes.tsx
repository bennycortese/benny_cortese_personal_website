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
            // Check if the error is an instance of Error and has a message
            if (error instanceof Error) {
              console.error('Error searching recipes:', error.message);
              throw error;
            } else {
              // If it's not an instance of Error, handle or log it accordingly
              console.error('Error searching recipes:', error);
              throw new Error('An unknown error occurred');
            }
          }
          
          console.log(data); // Log the data or update state to render in UI
        } catch (error) {
          if (error instanceof Error) {
            console.error('Error searching recipes:', error.message);
          } else {
            console.error('An unexpected error occurred');
          }
        }
      };

  return (
    <div className="form-control">
      <button className="btn btn-primary mt-2" onClick={searchRecipes}>Search Recipes</button>
    </div>
  );
};

export default RecipeSearch;
