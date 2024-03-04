import React from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://czptjemnwhgrjdiykjzg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cHRqZW1ud2hncmpkaXlranpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwODAwNzYsImV4cCI6MjAyMTY1NjA3Nn0.De3wrVx-xxkSfLNBBnOWlhqr8UL2zZFMJmoUH06yGUc");

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
