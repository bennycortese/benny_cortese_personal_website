import React, {useState} from 'react';

const QuickNotes: React.FC = () => {

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quick Notes!</h1>

      <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
      
      <input type="submit" value="Submit" className="btn" />

    </div>
    
  );
}

export default QuickNotes;
