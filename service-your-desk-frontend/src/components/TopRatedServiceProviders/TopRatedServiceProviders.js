import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./TopRatedServiceProviders.css";

const TopRatedServiceProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/top-rated-providers")
      .then((response) => response.json())
      .then((data) => setProviders(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="top-rated-container">
      <h2>Top Rated Service Providers</h2>
      <Marquee pauseOnHover speed={50}>
        {providers.map((provider) => (
          <div key={provider.id} className="provider-card">
            <img src={provider.imageUrl} alt={provider.name} />
            <p>{provider.name} ⭐ {provider.rating}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopRatedServiceProviders;
