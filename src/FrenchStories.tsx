
import React, {useState} from 'react';
import { ChatGPTAPI } from 'chatgpt'


async function example() {
    const api = new ChatGPTAPI({
      //apiKey: process.env.OPENAI_API_KEY
      apiKey: "hi"
    })
  
    const res = await api.sendMessage('Hello World!')
    console.log(res.text)
  }

const FrenchStory: React.FC = () => {

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hello! These are some of my favorite french stories</h1>
      <div>
      <h1 className="text-2xl font-bold mb-4">Stories: </h1>
      <h1 className="text-2xl font-bold mb-4">

        Lorem ipsum dolor sit amet. Et aperiam delectus ad omnis omnis est dicta fugiat ut voluptas consectetur. Et placeat nobis et praesentium itaque est debitis veniam?

        Vel eaque quia quo consequatur necessitatibus ex placeat nihil ea perferendis incidunt? Quo sunt expedita ut illum rerum ea quam nemo. A iusto odio ut tempora adipisci nam dolorem quia rem iusto velit.

        Ut dolor rerum nam possimus maiores eos placeat architecto et quidem neque cum excepturi delectus sed repellat provident. Ex esse odit ut officiis accusamus aut tempore delectus.
</h1>
      </div>
    </div>
    //download button here
  );
}

export default FrenchStory;
