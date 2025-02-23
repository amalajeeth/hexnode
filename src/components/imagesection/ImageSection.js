import React from 'react';
import { Row, Col, Typography,Input, Button, Grid } from 'antd';
import MainImage from '../../assets/images/logos/hexnode-kiosk.png'
import '../imagesection/imagesection.css'


const { Title } = Typography;
const { useBreakpoint } = Grid;

const ImageSection = () => {
    const screens = useBreakpoint();
    return (
        <Row gutter={[16, 16]} justify="center" align='middle' className="kiosk-section">
            <Col lg={12} sm={24} xs={24} md={24} xl={12} order={screens.lg ? 2 : 1}>
                <img
                    src={MainImage}
                    alt="Hexnode Kiosk"
                    style={{ width: '100%', borderRadius: '10px', height: '50%' }}
                />
            </Col>

            <Col lg={12} sm={24} xs={24} md={24} xl={12} order={screens.lg ? 1 : 2}>
                <Row gutter={[16, 16]} justify="center" align='middle' style={{ height: '100%', padding: 20, width: screens.lg ? '80%' : '100%' }}>
                    {/* Title */}
                    <Col span={24} style={{ textAlign: 'start' }}>
                        <Title level={1} className="kiosk-title" style={{ marginBottom: 10, paddingBottom: 20 }}>
                            Turn your devices into kiosks in a few minutes with Hexnode UEM
                        </Title>
                        <Row gutter={[8, 8]} justify="center" align="middle" style={{ width: '100%', margin: '0 auto' }}>
                            <Col xs={24} md={12}>
                                <Input placeholder="Your Work Email" size="large" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Button type="primary" size="large" style={{ width: '100%', backgroundColor: '#E50914', border: 'none' }}>
                                    GET STARTED
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Col>
        </Row>
    );
};

export default ImageSection;

