import React, { useState, useEffect } from 'react';
import { ChatGPTAPI } from 'chatgpt'

const FrenchStory: React.FC = () => {
  const [result, setResult] = useState<string>(''); // Initialize state for storing the result

  useEffect(() => {
    async function fetchData() {
      const api = new ChatGPTAPI({
        //apiKey: process.env.OPENAI_API_KEY
        apiKey: "hi"
      })

      const res = await api.sendMessage('Hello World!');
      setResult(res.text); // Set the result in the state
    }

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hello! These are some of my favorite french stories</h1>
      <div>
        <h1 className="text-2xl font-bold mb-4">Stories: </h1>
        <h1 className="text-2xl font-bold mb-4">{result}</h1> {/* Display the result */}
      </div>
    </div>
    //download button here
  );
}

export default FrenchStory;
