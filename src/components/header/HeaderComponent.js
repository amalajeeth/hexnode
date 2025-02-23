import React, { useState, useEffect } from 'react';
import { Layout, Button, Typography, Row, Col, Affix, Drawer, Grid } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Header.css'; // Import the CSS file
import { ReactComponent as DarkLogo } from '../../assets/images/logos/hexnode-dark.svg';
import { ReactComponent as LightLogo } from '../../assets/images/logos/hexnode-light.svg'

const { Header } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

const HeaderComponent = () => {
  const screens = useBreakpoint();
  const [headerBg, setHeaderBg] = useState('#020A19');
  const [headerColor, setheaderColor] = useState('white');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);


  const handleScroll = () => {
    const isScrolled = window.scrollY > 100;
    setHeaderBg(isScrolled ? '#ffffff' : '#020A19');
    setheaderColor(isScrolled ? 'black' : 'white');
    setShowScrollButton(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleDrawer = () => setDrawerVisible((prev) => !prev);

  const renderHeaderContent = () => (
    <Row justify="space-between" align="middle" style={{ width: '100%' }}>
      <Col>
        <div className="logo">
          {headerBg === '#ffffff' ? (
            <DarkLogo width={100} height={50} />
          ) : (
            <LightLogo width={100} height={50} />
          )}
        </div>
      </Col>
      <Col>
        {screens.lg ? (
          <Button type="primary" className="custom-button">
            14 DAY FREE TRIAL
          </Button>
        ) : (
          <MenuOutlined
            className={headerColor === 'white' ? 'text-white' : 'text-black'}
            style={{ fontSize: '24px', cursor: 'pointer' }}
            onClick={toggleDrawer}
          />
        )}
      </Col>
    </Row>
  );


  const renderScrollButton = () => (
    <div className="scroll-button-container">
      <Button type="primary" className="custom-button">
        14 DAY FREE TRIAL
      </Button>
    </div>
  );
  const renderDrawer = () => (
    <Drawer
      title={
        <div className="drawer-title">
          <span>Menu</span>
          <CloseOutlined onClick={toggleDrawer} className="drawer-close-icon" />
        </div>
      }
      placement="right"
      onClose={toggleDrawer}
      closeIcon={null}
      visible={drawerVisible}
      width={screens.xs ? '100%' : '50%'}
    >
      <Row justify="center" gutter={[0, 16]} className="drawer-content">
        <Col span={24}>
          <Button type="primary" className="custom-button">
            14 Day Free Trial
          </Button>
        </Col>
        <Col span={24}>
          <Text className="drawer-login-text">Login</Text>
        </Col>
      </Row>
    </Drawer>
  );

  return (
    <Affix offsetTop={0}>
      <Header className={`header ${headerBg === '#ffffff' ? 'header-scrolled' : ''}`}>
        {!screens.lg && showScrollButton ? renderScrollButton() : renderHeaderContent()}
      </Header>
      {renderDrawer()}
    </Affix>
  );
};

export default HeaderComponent;