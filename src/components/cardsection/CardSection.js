import React from 'react';
import { Row, Col, Typography } from 'antd';
import '../cardsection/CardSection.css';
import Forrester from '../../assets/images/logos/forrester.webp'
import IDC from '../../assets/images/logos/idc.webp'
import Gartner from '../../assets/images/logos/gartner.webp'

const { Title, Text } = Typography;


const CardSection = () => {

  const cardData = [
    {
      title: <img src={IDC} alt="IDC" style={{ height: 20 }} />,
      content:
        'Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.',
    },
    {
      title: <img src={Gartner} alt="Gartner" style={{ height: 20 }} />,
      content:
        'Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.',
    },
    {
      title: <img src={Forrester} alt="Forrester" style={{ height: 20 }} />,
      content:
        'Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.',
    },
  ];


  return (
    <Row
      justify="center"
      className="card-section"
      style={{
        height: 'fit-content',
        padding: 10,
        backgroundColor: '#020a19',
        width: '100%'
      }}
    >
      {cardData.map((card, index) => (
        <Col key={index} xs={24} sm={8} md={8}>
          <div className="custom-card">
            <Title level={4} className="card-title" style={{ color: 'white' }}>
              {card.title}
            </Title>
            <Text className="card-content">{card.content}</Text>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CardSection;
