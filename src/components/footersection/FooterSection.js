import React from 'react';
import { Row, Col ,Grid} from 'antd';
const { useBreakpoint } = Grid;

const FooterSection = () => {
    const screens = useBreakpoint();
  return (
    <div style={{ backgroundColor: '#F5F5F5', width: '100%', padding: '20px 0' }}>
      <Row justify="space-between" align="middle" style={{ width: '100%', margin: '0 auto' }}>
        {/* Left Column */}
        <Col xs={24} md={12} lg={12} style={{ textAlign:  screens?.xs ? 'center':'left', marginBottom: '10px' }}>
          <span style={{ color: '#5A5A5A' }}>
            Terms of Use &nbsp; - &nbsp; Privacy &nbsp; - &nbsp; Cookies
          </span>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={12} lg={12} style={{ textAlign: screens?.xs ? 'center':'right' }}>
          <span style={{ color: '#5A5A5A' }}>
            Copyright © 2024 Mitsogo Inc. All Rights Reserved.
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSection;