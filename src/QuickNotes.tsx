import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://czptjemnwhgrjdiykjzg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cHRqZW1ud2hncmpkaXlranpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwODAwNzYsImV4cCI6MjAyMTY1NjA3Nn0.De3wrVx-xxkSfLNBBnOWlhqr8UL2zZFMJmoUH06yGUc");

type Country = {
    name: string; // Add other properties as needed
  };

const QuickNotes: React.FC = () => {

    const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries();
  }, []);


  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    if (data) {
      setCountries(data);
    } else {
      setCountries([]);
    }
  }

  
    const [countryName, setCountryName] = useState('');
  
    const handleInsert = async () => {
      const { data, error } = await supabase
        .from('countries')
        .insert([
          { name: countryName },
        ]);
  
      if (error) {
        console.error('There was an error inserting the data', error);
      } else {
        console.log('Data inserted successfully', data);
        // Optionally reset the input field or provide further user feedback
        setCountryName('');
        getCountries(); // let's me rerender this if the note gets put in the database successfully. 
      }

    };

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quick Notes!</h1>

      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>

      <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
      
      <input type="submit" value="Submit" className="btn" />

      <input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        placeholder="Note"
      />
      <button onClick={handleInsert}>Insert a Note</button>

    </div>
    
  );
}

export default QuickNotes;
