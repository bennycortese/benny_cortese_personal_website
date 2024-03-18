import React, { useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


const supabaseUrl: string = 'https://czptjemnwhgrjdiykjzg.supabase.co';
const supabaseAnonKey: string = 'your_anon_key';

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

const MyBlog: React.FC = () => {
    return (
      <div className="bg-[#FAF9F6] flex flex-col items-center justify-center min-h-screen p-2 mb-0">
        <div className="flex flex-row justify-between items-start w-full max-w-6xl mb-0">
  
        {/* Left Column for my text*/}
        <div className="flex flex-col w-3/4 pr-12 mb-0">
  
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-0">Hi, I am Benny Cortese!</h1>
          <p className="text-xl mt-2">This is where I blog about things I've thought about.</p>
        </div>

        </div>
        </div>
        </div>
    )
}

export default MyBlog;
