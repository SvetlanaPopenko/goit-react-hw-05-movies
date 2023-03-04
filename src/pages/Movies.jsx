import axios from 'axios';
import { useEffect } from 'react';

const Movies = () => {
    useEffect(() => {
        const controller = new AbortController();

        async function fetchData(page) {
            try {
                const response = await axios.get(page,{signal: controller.signal});
                console.log(response.data);
            } catch (error) {
                
            }
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, []);
    return <div>other page</div>
};

export default Movies;