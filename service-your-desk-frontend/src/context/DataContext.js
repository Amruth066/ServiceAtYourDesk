// // src/context/DataContext.js
// import { createContext, useState, useEffect } from 'react';

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem('serviceData');
//         if (storedData) {
//             setData(JSON.parse(storedData));
//             setIsLoading(false);
//         } else {
//             fetchData();
//         }
//     }, []);

//     const fetchData = async () => {
//         try {
//             setIsLoading(true);
//             setError(null);
//             const response = await fetch('http://localhost:8080/api/providers/services-with-providers');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const result = await response.json();
//             setData(result);
//             localStorage.setItem('serviceData', JSON.stringify(result));
//         } catch (error) {
//             setError(error.message || 'Something went wrong');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <DataContext.Provider value={{ data, isLoading, error, refresh: fetchData }}>
//             {children}
//         </DataContext.Provider>
//     );
// };
import { createContext,useState,useEffect, Children } from "react";
export const DataContext = createContext();
export const DataProvider =({children})=>{

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    const CACHE_KEY = 'serviceData'
    const TIMESTAMP_KEY = 'serviceDataTimestamp'
    const CACHE_EXPIRY = 60*60*1000;

    useEffect(()=>{
        const storedData = localStorage.getItem(CACHE_KEY)
        const storedtimestamp = localStorage.getItem(TIMESTAMP_KEY);

        const isStale = !storedtimestamp || Date.now() - parseInt(storedtimestamp,10) > CACHE_EXPIRY;

        if(storedData && !isStale){
            setData(JSON.parse(storedData))
            setIsLoading(false)
        }
        else{
            fetchData();
        }
    },[]);

    const fetchData = async()=>{
        try{
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/api/providers/services-with-providers");
            if(!response.ok){
                throw new Error("Failed to fetch service-with-provider call");
            }
            const result = await response.json();
            setData(result);
            localStorage.setItem(CACHE_KEY,JSON.stringify(result));
            localStorage.setItem(TIMESTAMP_KEY,Date.now().toString());
        }catch(error){
            console.error("Error in fetching data:",error);
            setError(error.message);
        }finally{setIsLoading(false)}
    };
    return(
        <DataContext.Provider value={{data,isLoading,error}}>
            {children}
        </DataContext.Provider>

    );
}