import React from 'react';

const ShopSection = () => (
  <div className="shop-section">
    {[...Array(8)].map((_, index) => (
      <div key={index} className={`box${(index % 4) + 1} box`}>
        <div className="box-content">
          <h2>Service {index + 1}</h2>
          <div className="box-img" style={{ backgroundImage: `url('box${index + 1}_image.jpg')` }}></div>
          <p>See more</p>
        </div>
      </div>
    ))}
  </div>
);

export default ShopSection;
