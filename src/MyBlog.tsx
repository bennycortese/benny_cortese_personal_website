import React, { useEffect, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://czptjemnwhgrjdiykjzg.supabase.co';
const supabaseAnonKey = 'your_anon_key';
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
        <div className="bg-base-200 min-h-screen p-4">
            <div className="container mx-auto">
                <header className="text-center my-12">
                    <h1 className="text-4xl font-bold">Hi, I am Benny Cortese!</h1>
                    <p className="text-xl mt-4">This is where I blog about things I've thought about.</p>
                    <p className="mt-2">I need to settle on a blog template though. I also need a better way to insert my little posts. Maybe a script which puts things in the blog somehow? The issue is that it can't be accessible from this page but it should be easy to access for me if it's going into a database which adds a layer of abstraction. Need to look into this/see if it's worth building something out myself. Also got into UPenn today which was rad! I feel pretty good about that :)</p>
                </header>

                <main>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="card bg-base-100 shadow-xl mb-6">
                                <div className="card-body">
                                    <h2 className="card-title">{post.title}</h2>
                                    <p>{post.content}</p>
                                    <div className="card-actions justify-end">
                                        <p className="text-sm">Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="alert alert-warning">
                            <div className="flex-1">
                                <label>No posts found.</label>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default MyBlog;
