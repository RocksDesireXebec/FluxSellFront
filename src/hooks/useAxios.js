import { useState, useEffect } from "react";

// let's define our new hook
const useAxios = (configObj) => {
    const{
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;

    // On definit les etats
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    //On integre dans le use effect
    useEffect(()=>{
        const controller = new AbortController();
        
        const fetchData = async () => {
            try {
                const req = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    signal : controller.signal
                });
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        //useEffect cleanup function
        return ()=> controller.abort();
    },[]);

    return [response, error, loading];
}

export default useAxios;