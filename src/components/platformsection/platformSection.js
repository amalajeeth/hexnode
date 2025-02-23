import React from 'react';
import { Card, Col, Row } from 'antd';
import { AndroidOutlined, AppleOutlined, WindowsOutlined, AmazonOutlined } from '@ant-design/icons';

const platforms = [
  { name: 'Android', icon: <AndroidOutlined style={{ fontSize: 40, color: '#3DDC84' }} /> },
  { name: 'Windows', icon: <WindowsOutlined style={{ fontSize: 40, color: '#0078D6' }} /> },
  { name: 'iOS', icon: <AppleOutlined style={{ fontSize: 40, color: '#000' }} /> },
  { name: 'Android TV', icon: <AndroidOutlined style={{ fontSize: 40, color: '#3DDC84' }} /> },
  { name: 'Apple TV', icon: <AppleOutlined style={{ fontSize: 40, color: '#000' }} /> },
  { name: 'Fire TV', icon: <AmazonOutlined style={{ fontSize: 40, color: '#FF9900' }} /> },
];

const PlatformCards = () => {
  return (
    <div style={{ padding: '10% 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
      <h2 style={{ paddingTop: 30,paddingBottom:30 }}>Platforms supported</h2>
      <Row gutter={[16, 16]} justify="center" style={{ width: '80%' }}>
        {platforms.map((platform, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                height: 120,
                padding: 10,
                boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.1)';
              }}
            >
              {platform.icon}
              <p style={{ marginTop: 10 }}>{platform.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlatformCards;