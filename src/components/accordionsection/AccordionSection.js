import React, { useState } from 'react';
import { Row, Col, Typography, Collapse, Image, Grid, Button } from 'antd';
import './AccordionSection.css';
import Effortless from '../../assets/images/logos/effortless.webp';
import Customized from '../../assets/images/logos/customized.webp';
import PowerUp from '../../assets/images/logos/powerup.webp';
import SecureApp from '../../assets/images/logos/secureapp.webp';
import Easy from '../../assets/images/logos/easy.webp';

import {
  CheckOutlined
} from "@ant-design/icons";


const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const accordionData = [
  {
    key: '1',
    title: 'Effortless kiosk deployment & management',
    content: 'Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox, or ROM with Hexnode App by collaborating with OEM vendors.',
    image: Effortless,
    buttonText: null,
    component: <Text style={{ display: 'block', marginTop: 10, color: '#A0A0A0', fontSize: 16, fontWeight: 600, textAlign: 'start' }}>
      <a href="https://example.com" 
        target="_blank" 
        rel="noopener noreferrer" 
       style={{ color: '#E50914' }}>TRY FOR FREE &gt;</a>
    </Text>,
  },
  {
    key: '2',
    title: 'Customized interface for brand visibility',
    content: 'Personalize the kiosk experience with your brand’s unique style and identity.',
    image: Customized,
    buttonText: 'Brand visibility',
    component: <Text style={{ display: 'block', marginTop: 10, color: '#A0A0A0', fontSize: 16, fontWeight: 600, textAlign: 'start' }}>
    <a href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
     style={{ color: '#E50914' }}>TRY FOR FREE &gt;</a>
  </Text>,
  },
  {
    key: '3',
    title: 'What more can you do with Hexnode kiosk?',
    content: 'Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.',
    image: PowerUp,
    buttonText: 'Data security',
    component: <Text style={{ display: 'block', marginTop: 10, color: '#A0A0A0', fontSize: 16, fontWeight: 600, textAlign: 'start' }}>
    <a href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
     style={{ color: '#E50914' }}>TRY FOR FREE &gt;</a>
  </Text>,
  },
  {
    key: '4',
    title: 'Secure and update your app ecosystem',
    content: 'Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.',
    image: SecureApp,
    buttonText: 'App management',
    component: <Text style={{ display: 'block', marginTop: 10, color: '#A0A0A0', fontSize: 16, fontWeight: 600, textAlign: 'start' }}>
    <a href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
     style={{ color: '#E50914' }}>TRY FOR FREE &gt;</a>
  </Text>,
  },
  {
    key: '5',
    title: 'Provide an easy-to-use interface for end-users',
    content: 'Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.',
    image: Easy,
    buttonText: 'Easy to use interface',
    component: <Text style={{ display: 'block', marginTop: 10, color: '#A0A0A0', fontSize: 16, fontWeight: 600, textAlign: 'start' }}>
    <a href="https://example.com" 
      target="_blank" 
      rel="noopener noreferrer" 
     style={{ color: '#E50914' }}>TRY FOR FREE &gt;</a>
  </Text>,
  },
];

const AccordionSection = () => {
  const screens = useBreakpoint();
  const [activeImage, setActiveImage] = useState(accordionData[0].image);
  const [buttonText, setButtonText] = useState(accordionData[0].buttonText);

  const handleChange = (key) => {
    const activeKey = Array.isArray(key) ? key[0] : key;
    const selectedPanel = accordionData.find((item) => item.key === activeKey);
    if (selectedPanel) {
      setActiveImage(selectedPanel.image);
      setButtonText(selectedPanel.buttonText);
    }
  };

  return (
    <div className="kiosk-possibilities">
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Title level={1} style={{ color: 'black', marginBottom: 32 }}>
            What additional possibilities does the Kiosk mode offer?
          </Title>
        </Col>
      </Row>
      <Row gutter={[32, 32]} align="middle" wrap>
        {!screens.md && !screens.xs && (
          <Col span={24} style={{ marginBottom: 16 }}>
            <Image
              src={activeImage}
              alt="Kiosk Image"
              className="kiosk-image"
              preview={false}
            />
            {buttonText ? (
              <Button
                type="primary"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 16,
                  transform: 'translateY(-50%)',
                  background: '#fff',
                  color: '#000',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  borderRadius: '24px',
                  padding: '8px 16px',
                }}
              >
                {buttonText}
              </Button>) : null}

          </Col>
        )}
        {screens.md && (
          <Col span={12} style={{ position: 'relative' }}>
            <Image
              src={activeImage}
              alt="Kiosk Image"
              className="kiosk-image"
              preview={false}
            />
            {buttonText ? (
              <Button
                type="primary"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 16,
                  transform: 'translateY(-50%)',
                  background: '#fff',
                  color: '#000',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  borderRadius: '24px',
                  padding: '8px 16px',
                }}
              >
                <CheckOutlined style={{ color: 'green' }}></CheckOutlined>{buttonText}
              </Button>) : null}
          </Col>
        )}
        <Col span={screens.md ? 12 : 24}>
          <Collapse
            accordion
            defaultActiveKey={['1']}
            onChange={handleChange}
            expandIcon={() => null}
            className="kiosk-collapse"
            ghost
          >
            {accordionData.map(({ key, title, content, image, component }) => (
              <Panel
                header={<Title level={3} className="kiosk-panel-header" style={{ textAlign: 'start' }}>{title}</Title>}
                key={key}
              >
                {screens.xs && (
                  <Image
                    src={image}
                    alt={title}
                    className="kiosk-image"
                    preview={false}
                    style={{ marginBottom: 16 }}
                  />
                )}
                <Text style={{ display: 'block', textAlign: 'start' }}>{content}</Text>
                <br />
                {component}
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
export default AccordionSection;
