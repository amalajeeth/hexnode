import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import '../kioskform/kioskform.css'

const KioskForm = () => {
  return (
    <Form className="kiosk-form">
      <Row gutter={[16, 16]} justify="center">
        {/* Input Field */}
        <Col xs={24} md={24} lg={12} xl={12}>
          <Form.Item>
            <Input
              placeholder="Your Work Email"
              size="large"
              style={{ width: '100%' }} // Ensure full width
            />
          </Form.Item>
        </Col>

        {/* Button */}
        <Col xs={24} md={24} lg={12} xl={12}>
          <Form.Item>
            <Button
            className='kiosk-button'
              type="primary"
              size="large"
              style={{ width: '100%' }} // Ensure full width
            >
              GET STARTED NOW!
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default KioskForm;