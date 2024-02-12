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

  const handleInsertOrUpdate = async () => {
    // Step 1: Check if the note with the given key exists
    const { data: existingNote, error: fetchError } = await supabase
        .from('benny_notes')
        .select()
        .eq('id', key)
        .single();

      /*if (!fetchError && !existingNote) {
        console.error('Error checking for existing note', fetchError);
        return; // Stop execution if there's an error and no existing note is found
      }*/
  
    if (existingNote) {
      // Step 2: Append to the existing note's value
      const appendedValue = existingNote.name + ',' + value; // Append the new value to the existing value
      const { error: updateError } = await supabase
        .from('benny_notes')
        .update({ name: appendedValue })
        .eq('id', key);
  
      if (updateError) {
        console.error('Error updating the note', updateError);
      } else {
        console.log('Note updated successfully with appended value');
      }
    } else {
      // Step 3: Insert a new note if it does not exist
      const { data, error: insertError } = await supabase
        .from('benny_notes')
        .insert([
          { id: key, name: value },
        ]);
  
      if (insertError) {
        console.error('There was an error inserting the new note', insertError);
      } else {
        console.log('New note inserted successfully', data);
      }
    }
  
    // Reset input fields and refresh notes list
    setKey('');
    setValue('');
    getNotes();
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
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen p-4">
  <h1 className="text-4xl font-bold mb-8">Quick Notes!</h1>
  
  <div className="form-control mb-4">
    <label className="label">
        <span className="label-text"></span>
    </label>
    <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Key"
        className="input input-bordered w-full"
    />
  </div>

  <div className="form-control mb-4">
    <label className="label">
        <span className="label-text"></span>
    </label>
    <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
        className="input input-bordered w-full"
    />
  </div>

  <button onClick={handleInsertOrUpdate} className="btn btn-primary mb-4">Insert a Note</button>

  <div className="form-control mb-4">
    <label className="label">
        <span className="label-text"></span>
    </label>
    <input
        type="text"
        value={retrieveKey}
        onChange={(e) => setRetrieveKey(e.target.value)}
        placeholder="Key to Retrieve"
        className="input input-bordered w-full"
    />
  </div>

  <button onClick={handleRetrieve} className="btn btn-secondary mb-8">Retrieve a Note</button>

  {retrievedNote && (
  <div className="mt-8 p-4 bg-base-100 shadow-lg rounded-lg">
    <div className="flex items-center mb-4">
      <h2 className="text-xl font-bold">Retrieved Note</h2>
    </div>
    <div className="border-t pt-2">
      <p className="font-semibold">{retrievedNote.id}</p>
    </div>
    <div className="border-t pt-2 mt-2">
      <p className="text-lg">{retrievedNote.name}</p>
    </div>
  </div>
)}
</div>

  );
};

export default QuickNotes;