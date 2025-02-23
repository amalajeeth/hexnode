import React, { useRef } from 'react';
import { Carousel, Button, Row, Col, Typography, Space, Grid } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Justin from '../../assets/images/logos/justin-modrak.webp';
import Dalibor from '../../assets/images/logos/dalibor-kruljac.webp'
import Chris from '../../assets/images/logos/chris.webp'

import LogoSlider from '../logoslider/LogoSlider';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const testimonials = [
  {
    content: '"Hexnode is of great value. Works great with Android and iOS!"',
    author: 'Justin Modrak',
    role: 'Technology Coordinator, East Troy Community School District',
    image: Justin,
  },
  {
    content: '"Most complete MDM solution I found, and I tested many of them, including major names"',
    author: 'Dalibor Kruljac',
    role: 'KAMELEYA LTD',
    image: Dalibor,
  },
  {
    content: '"Another great testimonial about Hexnode."',
    author: 'Jane Doe',
    role: 'IT Manager, Example Organization',
    image: Chris,
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const screens = useBreakpoint();

  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  return (
    <>
        <div style={{ padding: '60px 5%', backgroundColor: '#f8f8f8', textAlign: 'center' }}>
      <Title level={2} style={{ marginBottom: '40px' }}>
        Why should you choose Hexnode?
      </Title>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          {screens.md && (
            // Large screens: Buttons on left and right
            <>
              <Button
                shape="circle"
                icon={<LeftOutlined />}
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-40px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Button
                shape="circle"
                icon={<RightOutlined />}
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-40px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </>
          )}

          <Carousel ref={carouselRef} dots={false}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                {screens.md ? (
                  // Desktop: 30-70 layout
                  <Row gutter={24} align="middle">
                    <Col span={8}>
                      <img
                        src={testimonial.image}
                        alt="Testimonial"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          objectFit: 'cover',
                          height: '300px',
                        }}
                      />
                    </Col>

                    <Col span={16} style={{ textAlign: 'left' }}>
                      <Text style={{ fontSize: '20px', fontStyle: 'italic', color: '#333' }}>
                        {testimonial.content}
                      </Text>
                      <div style={{ marginTop: '20px' }}>
                        <Title level={4} style={{ margin: 0 }}>
                          {testimonial.author}
                        </Title>
                        <Text type="secondary">{testimonial.role}</Text>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  // Mobile: Image on top, content below
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={testimonial.image}
                      alt="Testimonial"
                      style={{
                        width: '100%',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        height: 'auto',
                        marginBottom: '20px',
                      }}
                    />

                    <Text style={{ fontSize: '18px', fontStyle: 'italic', color: '#333' }}>
                      {testimonial.content}
                    </Text>

                    <div style={{ marginTop: '20px' }}>
                      <Title level={4} style={{ margin: 0 }}>
                        {testimonial.author}
                      </Title>
                      <Text type="secondary">{testimonial.role}</Text>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>

        {/* Small screens: Buttons below carousel */}
        {!screens.md && (
          <Row justify="center" style={{ marginTop: '20px' }}>
            <Space>
              <Button
                shape="circle"
                icon={<LeftOutlined />}
                onClick={handlePrev}
                style={{ backgroundColor: 'white', boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}
              />
              <Button
                shape="circle"
                icon={<RightOutlined />}
                onClick={handleNext}
                style={{ backgroundColor: 'white', boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}
              />
            </Space>
          </Row>
        )}
      </div>
    
  
    </div>
    <LogoSlider/>
    </>
    
  );
};

export default TestimonialCarousel;
