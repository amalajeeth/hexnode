import React from 'react';
import { Image } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../logoslider/LogoSlider.css'
import Lowes from '../../assets/images/logos/lowes.svg';
import Costco from '../../assets/images/logos/costco.svg';
import Marriot from '../../assets/images/logos/marriott-intl.svg';
import Merck from '../../assets/images/logos/merck.svg';
import Polaris from '../../assets/images/logos/polaris.svg';
import Wolt from '../../assets/images/logos/wolt.svg';


const LogoSlider = () => {

    const logos = [
        { src: Lowes, link: 'https://www.lowes.com' },
        { src: Costco, link: 'https://www.polaris.com' },
        { src: Marriot, link: 'https://www.gorillas.io' },
        { src: Merck, link: 'https://www.gorillas.io' },
        { src: Polaris, link: 'https://www.gorillas.io' },
        { src: Wolt, link: 'https://www.gorillas.io' },
    ];
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'5%' }}>
        <div
            style={{
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0.1))',
                maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0.1))',
            }}
        >
            <Slider {...sliderSettings}>
                {logos.map((logo, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <a href={logo.link} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={logo.src}
                                alt={`Logo ${index + 1}`}
                                preview={false}
                                style={{ width: '150px', margin: '0 auto' }}
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    );
};

export default LogoSlider;
