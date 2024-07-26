import { useState, useEffect } from 'react';
import './FetchData.css';
import Posts from './Posts';

const FetchData = () => {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController.signal;
        const fetchData = async () => {
            try {
                setLoader(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {signal});
                const data = await response.json();
                setPosts(data);
                setLoader(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        }
        fetchData();
        return (() => {
            abortController.abort();
        });
    }, []);

    if (loader) {
        return <div>Fetching your response...</div>
    }
    if (error) {
        return <div>Error fetching data: {error.message}</div>
    }
    if (posts?.length > 0) {
        return(
            <div className="fetchData">
                <Posts posts={posts} />
            </div>
        )
    }
}

export default FetchData;