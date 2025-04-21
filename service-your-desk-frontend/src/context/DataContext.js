import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('serviceData'); 
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            fetchData(); 
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/providers/services-with-providers'); 
            const result = await response.json();
            setData(result);
            localStorage.setItem('serviceData', JSON.stringify(result)); // Store data in local storage
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};
