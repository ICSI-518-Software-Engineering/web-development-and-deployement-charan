import axios from 'axios';
import { useEffect, useState } from 'react';

const API = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className='pt-2 pl-2'>
            <section>
                <h1 className='text-green-700 font-bold pb-2'>POSTS</h1>
                <table>
                    <thead className='bg-green-700 text-white'>
                        <tr>
                            <th className='pr-2'>User ID</th>
                            <th className='pr-8'>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td className='pr-8'>{post.title}</td>
                                <td className='pb-2'>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default API;
