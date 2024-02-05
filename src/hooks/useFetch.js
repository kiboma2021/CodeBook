import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState("");

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const result = await response.json();
                setData(result);
            } catch(error){
                setError(error.message);

            }
    };
        fetchData();
    },[url]);
  return {data,error}
}

