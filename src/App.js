import React from 'react';
import { Layout,Grid} from 'antd';
import './App.css';
import TestimonialCarousel from './components/carousel/Testimonial';
import HeaderComponent from './components/header/HeaderComponent';
import ImageSection from './components/imagesection/ImageSection';
import CardSection from './components/cardsection/CardSection';
import SegmentSelector from './components/segmentselector/SegmentSelector';
import AccordionSection from './components/accordionsection/AccordionSection';
import PlatformCards from './components/platformsection/platformSection';
import SignUpSection from './components/signupsection/SignupSection';
import FooterSection from './components/footersection/FooterSection';
import CollapseSection from './components/collapsesection/CollapseSection';

const { Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const App = () => {
  const screens = useBreakpoint();
  return (

    <Layout>
      <HeaderComponent />
      <Content style={{ marginTop: 64 }}>
        <ImageSection />
        <CardSection/>
        {screens.xs ?<CollapseSection/>:<SegmentSelector/>}
        <AccordionSection/>
        <TestimonialCarousel/>
        <PlatformCards/>
        <SignUpSection/>
      </Content>
      <Footer>
        <FooterSection/>
      </Footer>

    </Layout>
  );
};

export default App;