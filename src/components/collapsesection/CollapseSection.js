import React, { useState } from 'react';
import { Collapse, Image, Typography } from 'antd';
import './CollapseSection.css'; // Import the CSS file

import singleApp from '../../assets/images/logos/single-app-kiosk.jpg';
import multiApp from '../../assets/images/logos/multi-app-kiosk-image.webp';
import webApp from '../../assets/images/logos/web-based-kiosk-image.webp'

import {
    CheckOutlined
} from "@ant-design/icons";

const { Title } = Typography;

const { Panel } = Collapse;

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

const CollapseSection = () => {
    const [activeKey, setActiveKey] = useState(null);

    const handleChange = (key) => {
        setActiveKey(key);
    };

    return (

        <div className="segment-container">
            <Title level={3} className="segment-title">
                Specific kiosk modes for unique use cases
            </Title>
            <Collapse
                accordion
                bordered={false}
                activeKey={activeKey}
                onChange={handleChange}
                className="collapse-panel"
            >
                {features.map((feature) => (
                    <Panel
                        header={
                            <div
                                className={`collapse-panel-header ${activeKey?.toString() === feature.id.toString()
                                    ? 'collapse-panel-header-selected'
                                    : ''
                                    }`}
                            >
                                {feature.heading}
                            </div>
                        }
                        key={feature.id}
                        className="collapse-panel"
                    >
                        <div className="collapse-panel-content">
                            <Image
                                src={feature.imageUrl}
                                alt={feature.title}
                                className="collapse-panel-image"
                            />
                            <h3 className="collapse-panel-description">{feature.description}</h3>
                            <ul className="collapse-panel-points">
                                {feature.points.map((point, index) => (
                                    <li key={index}> <CheckOutlined style={{ color: 'green', padding: 5 }}></CheckOutlined>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </Panel>
                ))}
            </Collapse>
        </div>


    );
};


export default CollapseSection;