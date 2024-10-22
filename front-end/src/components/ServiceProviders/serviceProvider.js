import React from 'react';

const ServiceProvider = ({ service }) => {
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

  return (
    <div className="serviceProvider">
      <h2>Service Providers for {service}</h2>
      <div className="serviceProvider-section">
        {providers[service]?.map((provider, index) => (
          <div key={index} className={`box${(index % 4) + 1} box`}>
            <div className="box-content">
              <h2>{provider}</h2>
              <div
                className="box-img"
                style={{ backgroundImage: `url('provider${index + 1}_image.jpg')` }} // Replace with actual images if needed
              ></div>
              <p>More details about {provider}</p>
            </div>
          </div>
        )) || <p>No providers available for {service}.</p>}
      </div>
      <button onClick={() => window.location.reload()}>Go Back to Services</button>
    </div>
  );
};

export default ServiceProvider;
