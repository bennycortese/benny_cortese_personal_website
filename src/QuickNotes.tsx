import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './QuickNotes_output.css';

const supabase = createClient("https://czptjemnwhgrjdiykjzg.supabase.co", "your_supabase_key");

type Note = {
  id: string; // Assuming 'id' is the unique identifier
  value: string; // The note content
};

const QuickNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    const { data, error } = await supabase.from("notes").select();
    if (error) {
      console.error("Error fetching notes", error);
    } else {
      setNotes(data || []);
    }
  }

  const handleInsert = async () => {
    const { data, error } = await supabase
      .from('notes')
      .insert([
        { id: key, value: value },
      ]);

    if (error) {
      console.error('There was an error inserting the data', error);
    } else {
      console.log('Data inserted successfully!', data);
      setKey('');
      setValue('');
      getNotes(); // To refresh the notes list
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quick Notes!</h1>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Key"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <button onClick={handleInsert} className="btn">Insert a Note</button>
      
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.id}: {note.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickNotes;
