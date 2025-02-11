import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null);

    const fetchData = async(url) =>{
        try {
            setIsPending(true)
            await fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                if(res){
                    setData(res)
                    setIsPending(false)
                    setError(null)
                }
            })
        } catch(err) {
            setError(err);
            setIsPending(false)
        }
    }

    useEffect(()=>{
        fetchData(url)
    }, [url])

    return {data, isPending, error}
}