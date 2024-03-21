import React, { useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


const supabaseUrl: string = 'https://czptjemnwhgrjdiykjzg.supabase.co';
const supabaseAnonKey: string = 'your_anon_key';

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

const MyBlog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        let { data: posts, error } = await supabase
            .from('posts') // Assuming your table is named 'posts'
            .select('*')
            .order('createdAt', { ascending: false });

        if (!error && posts) {
            setPosts(posts);
        } else {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="bg-[#FAF9F6] min-h-screen p-4">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold">Hi, I am Benny Cortese!</h1>
                    <p className="text-xl mt-2">This is where I blog about things I've thought about.</p>
                    <p className="text-xl mt-2">I need to settle on a blog template though</p>
                </header>

                <main>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <article key={post.id} className="mb-8">
                                <h2 className="text-2xl font-semibold">{post.title}</h2>
                                <p className="text-gray-700 mt-2">{post.content}</p>
                                <p className="text-gray-500 text-sm">Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
                            </article>
                        ))
                    ) : (
                        <p>No posts found.</p>
                    )}
                </main>
            </div>
        </div>
    );
}

export default MyBlog;