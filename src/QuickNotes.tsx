import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './QuickNotes_output.css';

const supabase = createClient("https://czptjemnwhgrjdiykjzg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cHRqZW1ud2hncmpkaXlranpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwODAwNzYsImV4cCI6MjAyMTY1NjA3Nn0.De3wrVx-xxkSfLNBBnOWlhqr8UL2zZFMJmoUH06yGUc");

type Note = {
    name: string; // Add other properties as needed
  };

const QuickNotes: React.FC = () => {

    const [benny_notes, setBennyNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes();
  }, []);


  async function getNotes() {
    const { data } = await supabase.from("benny_notes").select();
    if (data) {
        setBennyNotes(data);
    } else {
        setBennyNotes([]);
    }
  }

  
    const [noteName, setNoteName] = useState('');
  
    const handleInsert = async () => {
      const { data, error } = await supabase
        .from('benny_notes')
        .insert([
          { name: noteName },
        ]);
  
      if (error) {
        console.error('There was an error inserting the data', error);
      } else {
        console.log('Data inserted successfully', data);
        // Optionally reset the input field or provide further user feedback
        setNoteName('');
        getNotes(); // let's me rerender this if the note gets put in the database successfully. 
      }

    };

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quick Notes!</h1>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        {benny_notes.map((note) => ( // I realllllly don't like this format, need to figure something else out
           <li key={note.name}>
           <tr
             className="text-lg font-medium leading-relaxed tracking-normal text-gray-600 mt-4"
             onClick={() => {/* handle click */}}
           >
             {note.name}
           </tr>
           </li>
        ))}
        </tr>
      {/* row 2 */}
      <tr>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
      </tr>
    </tbody>
  </table>
</div>
      
      

      <input
        type="text"
        value={noteName}
        onChange={(e) => setNoteName(e.target.value)}
        placeholder="Note"
      />

      <input onClick={handleInsert} type="submit" value="Insert a Note! " className="btn" />

    </div>
    
  );
}

export default QuickNotes;
