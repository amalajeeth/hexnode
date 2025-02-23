import React, { useState } from 'react';
import { Segmented, Typography } from 'antd';
import './SegmentSelector.css';
import FeatureSection from '../featuresection/FeatureSection';
import singleApp from '../../assets/images/logos/single-app-kiosk.jpg';
import multiApp from '../../assets/images/logos/multi-app-kiosk-image.webp';
import webApp from '../../assets/images/logos/web-based-kiosk-image.webp'

const { Title } = Typography;

const SegmentSelector = () => {
  const features = [
    {
      id: 1,
      heading: 'Single-App Kiosk',
      title: 'Powerful Single-App Kiosk solutions for enhanced control',
      points: [
        'Provision the devices to run one specialized application, with limited functionalities.',
        'Customize the device settings to cater to a specific use-case each time.',
        'Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded functionalities.',
        'Empower your administrators with full control over the kiosk devices.',
      ],
      imageUrl: singleApp,
    },
    {
      id: 2,
      heading: 'Multi-App Kiosk',
      title: 'Multi-App Kiosk solutions for flexible management',
      points: [
        'Run multiple applications securely within a controlled environment.',
        'Easily switch between apps while maintaining restrictions.',
        'Customize policies for each app depending on the user role.',
        'Manage and monitor apps remotely with real-time updates.',
      ],
      imageUrl: multiApp,
    },
    {
      id: 3,
      heading: 'Web-based Kiosk',
      title: 'Web-based Kiosk solutions for seamless browsing',
      points: [
        'Lock devices to specific websites for business or educational purposes.',
        'Ensure safe browsing with URL whitelisting and blacklisting.',
        'Restrict access to unauthorized websites and content.',
        'Monitor and control web activity in real-time.',
      ],
      imageUrl: webApp,
    },
  ];

  const [selectedSegment, setSelectedSegment] = useState(features[0].id);
  const handleSegmentChange = (value) => setSelectedSegment(value);
  const selectedFeature = features.find((feature) => feature.id === selectedSegment);

  return (
    <div className="segment-container">
      <Title level={3} className="segment-title">
        Specific kiosk modes for unique use cases
      </Title>

      <div className="segment-wrapper">
        <Segmented
          options={features.map(({ id, heading }) => ({
            label: heading,
            value: id,
          }))}
          value={selectedSegment}
          onChange={handleSegmentChange}
          className="custom-segmented"
        />

        {selectedFeature && (
          <FeatureSection
            title={selectedFeature.title}
            points={selectedFeature.points}
            imageUrl={selectedFeature.imageUrl}
          />
        )}
      </div>
    </div>
  );
};

export default SegmentSelector;
