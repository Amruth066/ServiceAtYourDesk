import React from 'react';

const Services = ({ onServiceSelect }) => {
  // Dummy data for services
  const services = [
    { id: 1, name: 'Plumbing', image: 'plumbing.jpg' },
    { id: 2, name: 'Electrician', image: 'electrician.jpg' },
    { id: 3, name: 'Cleaning', image: 'cleaning.jpg' },
    { id: 4, name: 'Gardening', image: 'gardening.jpg' },
    { id: 5, name: 'Painting', image: 'painting.jpg' },
    { id: 6, name: 'Carpentry', image: 'carpentry.jpg' },
    { id: 7, name: 'Pest Control', image: 'pestcontrol.jpg' },
    { id: 8, name: 'Appliance Repair', image: 'appliancerepair.jpg' },
    { id: 9, name: 'Locksmith', image: 'locksmith.jpg' },
    { id: 10, name: 'HVAC', image: 'hvac.jpg' },
    { id: 11, name: 'Roofing', image: 'roofing.jpg' },
    { id: 12, name: 'Landscaping', image: 'landscaping.jpg' },
  ];

  return (
    <div className="service-section">
      {services.map((service) => (
        <div key={service.id} className={`box${(service.id % 4) + 1} box`}>
          <div className="box-content">
            <h2>{service.name}</h2>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <button onClick={() => onServiceSelect(service.name)}>
              See Providers
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
