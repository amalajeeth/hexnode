import React from 'react';
import './FeatureSection.css';
import {
    CheckOutlined
  } from "@ant-design/icons";

const FeatureSection = ({ title, points, imageUrl }) => {

  return (
    <div className="feature-section">
      <div className="feature-content">
        <h2 className="feature-title">{title}</h2>
        <ul className="feature-points">
          {points.map((point, index) => (
            <li key={index} className="feature-point">
               <CheckOutlined style={{color:'green',textAlign:'center',padding:10}}></CheckOutlined>{point}
            </li>
          ))}
        </ul>
      </div>

      <div className="feature-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default FeatureSection;
