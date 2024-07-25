import React, { useState } from 'react';

// wait ok hear me out
// we make a storytime app with the widget michael showed me for old nlp and gemini chrome 

const StoryGen: React.FC = () => {
const [story, setStory] = useState("Hello");

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Story Time!</h1>
      <input
        placeholder={story}
        className="input input-bordered mb-4"
      />
    </div>
  );
};

export default StoryGen;
