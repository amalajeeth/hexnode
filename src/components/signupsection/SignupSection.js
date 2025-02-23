import React from 'react';
import { Row, Col, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

const SignupSection = () => {
    return (
        <div style={{ backgroundColor: '#000A18', height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', color: 'white' }}>
            <Title level={2} style={{ color: 'white', marginBottom: 20, textAlign: 'center' }}>
                Sign up and try Hexnode free for 14 days!
            </Title>

            <Row gutter={[8, 8]} justify="center" align="middle" style={{ width: '50%', margin: '0 auto' }}>
                <Col xs={24} md={12}>
                    <Input placeholder="Your Work Email" size="large" style={{ width: '100%' }} />
                </Col>
                <Col xs={24} md={8}>
                    <Button type="primary" size="large" style={{ width: '100%', backgroundColor: '#E50914', border: 'none' }}>
                        GET STARTED
                    </Button>
                </Col>
            </Row>

            <Text style={{ display: 'block', marginTop: 10, color: '#A0A0A0', textAlign: 'center' }}>
                No credit cards required. <a href="https://example.com"  style={{ color: '#E50914' }}>Request a demo &gt;</a>
            </Text>
        </div>
    );
};

export default SignupSection;