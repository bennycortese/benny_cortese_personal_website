import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './QuickNotes_output.css';

const supabase = createClient("https://czptjemnwhgrjdiykjzg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cHRqZW1ud2hncmpkaXlranpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwODAwNzYsImV4cCI6MjAyMTY1NjA3Nn0.De3wrVx-xxkSfLNBBnOWlhqr8UL2zZFMJmoUH06yGUc");

type Note = {
  id: string;
  name: string;
};

const QuickNotes: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [retrieveKey, setRetrieveKey] = useState('');
    const [retrievedNote, setRetrievedNote] = useState<Note | null>(null);  

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    const { data, error } = await supabase.from("benny_notes").select();
    if (error) {
      console.error("Error fetching notes", error);
    } else {
      setNotes(data || []);
    }
  }

  const handleInsert = async () => {
    const { data, error } = await supabase
      .from('benny_notes')
      .insert([
        { id: key, name: value },
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

  const handleRetrieve = async () => {
    const { data, error } = await supabase
      .from('benny_notes')
      .select()
      .eq('id', retrieveKey)
      .single();

    if (error) {
      console.error('Error retrieving the note', error);
      setRetrievedNote(null);
    } else {
      setRetrievedNote(data);
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

      <input
        type="text"
        value={retrieveKey}
        onChange={(e) => setRetrieveKey(e.target.value)}
        placeholder="Key to Retrieve"
      />
      <button onClick={handleRetrieve} className="btn">Retrieve a Note</button>

      {retrievedNote && (
        <div>
          <h2>Retrieved Note:</h2>
          <p>{retrievedNote.id}: {retrievedNote.name}</p>
        </div>
      )}

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.id}: {note.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickNotes;