import React, { useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Assuming you have defined types for your recipes, if not, define a basic one as shown below.
interface Recipe {
    id: number;
    name: string;
    description: string;
}
// I need a way to add recipes, but only for me to add

const supabaseUrl: string = 'https://czptjemnwhgrjdiykjzg.supabase.co';
const supabaseAnonKey: string = 'your_anon_key';

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

const RecipeSearch: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const searchRecipes = async (): Promise<void> => {
        setIsLoading(true);
        setError('');
        try {
            const { data, error } = await supabase
              .from('recipes')
              .select('*')
              .ilike('name', `%${query}%`);
            
            if (error) throw error;
            
            setRecipes(data);
        } catch (error: any) {
            console.error('Error searching recipes:', error.message);
            setError('Failed to fetch recipes. Please try again later.');
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          />
          <button 
            className={`btn btn-primary mt-2 ${isLoading ? 'loading' : ''}`}
            onClick={searchRecipes}
            disabled={isLoading}
          >
            Search Recipes
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="mt-4">
          {recipes.map((recipe: Recipe) => (
            <div key={recipe.id} className="card w-96 bg-base-100 shadow-xl my-2">
              <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <p>{recipe.description}</p>
                {/* Consider adding a button or link to view more details */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default RecipeSearch;
