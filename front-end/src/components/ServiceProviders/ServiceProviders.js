import React, { useState } from 'react';
import ServiceProviderDetails from '../ServiceProviderDetails/ServiceProviderDetails';
const ServiceProviders = ({ service }) => {
    const [selectedProvider,setSelectedProvider] = useState(null);

    const providers = {
        Plumbing: ['Plumber A', 'Plumber B', 'Plumber C'],
        Electrician: ['Electrician A', 'Electrician B', 'Electrician C'],
        Cleaning: ['Cleaner A', 'Cleaner B', 'Cleaner C'],
        Gardening: ['Gardener A', 'Gardener B', 'Gardener C'],
        Painting: ['Painter A', 'Painter B', 'Painter C'],
        Carpentry: ['Carpenter A', 'Carpenter B', 'Carpenter C'],
        'Pest Control': ['Pest Controller A', 'Pest Controller B', 'Pest Controller C'],
        'Appliance Repair': ['Repairman A', 'Repairman B', 'Repairman C'],
        Locksmith: ['Locksmith A', 'Locksmith B', 'Locksmith C'],
        HVAC: ['HVAC Specialist A', 'HVAC Specialist B', 'HVAC Specialist C'],
        Roofing: ['Roofer A', 'Roofer B', 'Roofer C'],
        Landscaping: ['Landscaper A', 'Landscaper B', 'Landscaper C'],
    };

    const handleMoreDetails=(provider)=>{
        setSelectedProvider(provider);
    }

    if(selectedProvider){
        const providerDetails = {
            name: selectedProvider,
            experience: 10,
            specialization: service,
            rating: 4.5,
            previousWork: [
              `Completed work for ${service} at John's residence`,
              `Performed ${service} at an office building`,
              `Provided ${service} services at a commercial complex`,
            ],
          };
      
          return <ServiceProviderDetails provider={providerDetails} />;
        }

    return (
        <div className="serviceProvider">
            <h2>Service Providers for {service}'s at your location</h2>
            <div className="serviceProvider-section">
                {providers[service]?.map((provider, index) => (
                <div key={index} className={`box${(index % 4) + 1} box`}>
                    <div className="box-content">
                    <h2>{provider}</h2>
                    <div
                        className="box-img"
                        style={{ backgroundImage: `url('provider${index + 1}_image.jpg')` }} 
                    ></div>
                    <p onClick={()=>handleMoreDetails(provider)}>More details about {provider}</p>
                    </div>
                </div>
                )) || <p>No providers available for {service}.</p>}
            </div>
        <button onClick={() => window.location.reload()}>Go Back to Services</button>
    </div>
    );
};

export default ServiceProviders;
