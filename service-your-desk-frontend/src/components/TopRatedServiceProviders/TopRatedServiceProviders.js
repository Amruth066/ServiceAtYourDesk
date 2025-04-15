import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./TopRatedServiceProviders.css";
import imageUrl from "../../assets/images/worker.jpg"

const TopRatedServiceProviders = () => {
    const [providers, setProviders] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetch("http://localhost:8080/api/providers/top-rated", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProviders(data);})
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleProviderClick = (providerId) => {
        navigate(`/provider/${providerId}`); 
    };
    return (
        <div className="top-rated-container">
            <h2>Top Rated Service Providers</h2>
            <Marquee pauseOnHover speed={50}>
                {providers.map((provider) => (
                    <div 
                        key={provider.id} 
                        className="provider-card" 
                        onClick={() => handleProviderClick(provider.providerId)}
                        style={{ position: "relative",cursor: "pointer" }} 
                    >
                        <img src={imageUrl} alt={provider.name} />
                        <p>{provider.name} ⭐ {provider.rating}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TopRatedServiceProviders;
