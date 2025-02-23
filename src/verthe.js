<Content style={{ padding: '0', background: '#020A19', marginTop: '64px' }}>
<Row gutter={[32, 32]} justify="center">
  {/* Image Column */}
  <Col xs={24} lg={12} order={screens.lg ? 2 : 1}>
    <img
      src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/hexnode-kiosk.png"
      alt="Hexnode Kiosk"
      style={{ width: '100%', borderRadius: '10px' }}
    />
  </Col>
  <style>
        {`
          .custom-segmented .ant-segmented-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.custom-segmented .ant-segmented-item-selected {
  background-color: black !important;
  color: white !important;
}
        `}
      </style>
  {/* Paragraph and Form Column */}
  <Col xs={24} lg={12} order={screens.lg ? 1 : 2}>
    <Row>
      <Title style={{ color: 'white' }}>Turn your devices into kiosks in minutes</Title>
    </Row>

    <Form layout="inline">
      <Row gutter={[0, 8]}>
        <Col xs={24} md={12} sm={12} lg={12} xl={12}>
          <Form.Item>
            <Input placeholder="Your Work Email" size="large" style={{ width: '100%', borderRadius: '0' }} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} sm={12} lg={12} xl={12}>
          <Form.Item>
            <Button type="primary" size="large" style={buttonStyle}>Get Started Now!</Button>
          </Form.Item>
        </Col>
      </Row>




    </Form>
  </Col>
</Row>
<Row gutter={[32, 32]} align="middle" justify="center" style={{ backgroundColor: 'rgb(26 28 43)', height: screens.lg ? '30vh' : 'fit-content', color: 'white', marginTop: 20 }}>
  {cardData.map((card, index) => (
    <Col key={index} xs={24} sm={8} md={8} style={{ display: 'inline-block' }}>
      <Card
        hoverable
        style={{
          padding: 10,
          width: '100%',
          transform: 'scale(1)',
          transition: 'transform 0.3s',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'transparent',
          border: 0,
          color: 'white'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Row justify={'center'}>
          <Col span={24}>
            <Title level={4} style={{ color: 'white' }}>{card.title}</Title>
          </Col>
          <Col span={24}>
            <Text style={{ color: 'white' }}>{card.content}</Text>
          </Col>
        </Row>

      </Card>
    </Col>
  ))}
</Row>

<div style={{ padding: 10, textAlign: 'center', backgroundColor: 'white' }}>
  <Title level={3} style={{ color: 'black' }}>Specific kiosk modes for unique use cases</Title>
  <div style={{ overflowX: 'auto', padding: '10px' }}>
    <Segmented
      options={segmentOptions}
      value={selectedSegment}
      onChange={setSelectedSegment}
      style={{
        width: '100%',
        margin: '0 auto',
        height: '50px',
        background: '#f0f0f0',
      }}
      block
      className="custom-segmented"
    />
  </div>
</div>

<div style={{ padding: 10, textAlign: 'center', backgroundColor: 'white', marginTop: '40px' }}>
  <Row gutter={[32, 32]}>
    <Col span={24}>
      <Title level={1}>
        What additional possibilities does the Kiosk mode offer?
      </Title>
    </Col>
  </Row>
  <Row gutter={[32, 32]}>
    <Col span={12}>
      <Image src="https://via.placeholder.com/400" alt="Kiosk Image" style={{ width: '100%' }} />
    </Col>
    <Col span={12}>
      <Collapse
        accordion
        defaultActiveKey={['1']}
        expandIcon={() => null} // Remove the arrow icon
        style={{ backgroundColor: 'white', border: 'none', justifyContent: 'start' }} // Remove border
        ghost // Remove background and border from panels
      >
        <Panel
          header={
            <Title level={2} style={{ margin: 0 }}>
              Effortless kiosk deployment & management
            </Title>
          }
          key="1"
          style={{ border: 'none' }} // Remove panel border
        >
          <Text>
            Deploy kiosk-enabled devices straight out of the box. Flash a custom Android
            Enterprise, Samsung Knox, or ROM with Hexnode App by collaborating with OEM vendors.
          </Text>
        </Panel>
        <Panel
          header={
            <Title level={2} style={{ margin: 0 }}>
              Personalize the kiosk experience
            </Title>
          }
          key="2"
          style={{ border: 'none' }} // Remove panel border
        >
          <Text>
            Personalize the kiosk experience with your brand’s unique style and identity.
          </Text>
        </Panel>
        <Panel
          header={
            <Title level={2} style={{ margin: 0 }}>
              Discover additional features
            </Title>
          }
          key="3"
          style={{ border: 'none' }} // Remove panel border
        >
          <Text>
            Discover additional features like web kiosks, digital signage, and more.
          </Text>
        </Panel>
      </Collapse>
    </Col>
  </Row>
  <TestimonialCarousel/>
</div>

</Content>

const SegmentSelector = () => {
    const features = [
      {
        id: 1,
        title: 'Powerful Single-App Kiosk solutions for enhanced control',
        points: [
          'Provision the devices to run one specialized application, with limited functionalities.',
          'Customize the device settings to cater to a specific use-case each time.',
          'Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded functionalities.',
          'Empower your administrators with full control over the kiosk devices.',
        ],
        imageUrl: Feature1, // Fixed this line
      },
      {
        id: 2,
        title: 'Multi-App Kiosk solutions for flexible management',
        points: [
          'Run multiple applications securely within a controlled environment.',
          'Easily switch between apps while maintaining restrictions.',
          'Customize policies for each app depending on the user role.',
          'Manage and monitor apps remotely with real-time updates.',
        ],
        imageUrl: Feature1,
      },
      {
        id: 3,
        title: 'Web-based Kiosk solutions for seamless browsing',
        points: [
          'Lock devices to specific websites for business or educational purposes.',
          'Ensure safe browsing with URL whitelisting and blacklisting.',
          'Restrict access to unauthorized websites and content.',
          'Monitor and control web activity in real-time.',
        ],
        imageUrl: Feature1,
      },
    ];
  
    const [selectedSegment, setSelectedSegment] = useState(features[0].id);
    const handleSegmentChange = (value) => setSelectedSegment(value);
    const selectedFeature = features.find((feature) => feature.id === selectedSegment);
  
    return (
      <div className="segment-selector">
        <Title level={3} className="segment-title">
          Specific kiosk modes for unique use cases
        </Title>
  
        <div className="segment-scroll-container">
          <Segmented
            options={features.map(({ id, title }) => ({
              label: title,
              value: id,
            }))}
            value={selectedSegment}
            onChange={handleSegmentChange}
            className="custom-segmented"
          />
           {selectedFeature ? (
          <FeatureSection
            title={selectedFeature.title}
            points={selectedFeature.points}
            imageUrl={selectedFeature.imageUrl}
          />
        ) : (
          <div>No content available for this option.</div>
        )}
        </div>
  
       
      </div>
    );
  };
  