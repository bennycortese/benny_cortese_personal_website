import React, { useState } from 'react';
import OpenAI from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY || (() => {
  throw new Error('REACT_APP_OPENAI_API_KEY is not defined');
})();

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

const ChatExample = () => {
  const [result, setResult] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const handleFetchData = async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { "role": "system", "content": "Vous êtes un assistant utile qui rendra une histoire en français à l'utilisateur" },
          { "role": "user", "content": query }
        ],
        model: "gpt-3.5-turbo",
      });

      if (completion.choices && completion.choices.length > 0) {
        setResult(completion.choices[0]?.message?.content ?? "No content available.");
      }
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
      setResult("Failed to fetch response.");
    }
  };

  return (
    <div>
      <h1>French Story Generator</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question..."
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={handleFetchData} className="btn mt-2">
        Submit
      </button>
      <div>
        <h2>Response:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default ChatExample;
