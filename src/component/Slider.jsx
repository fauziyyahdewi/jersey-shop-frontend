import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Slider = ({ data }) => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <iframe
                        className="d-block w-100 min-vh-100"
                        src="https://www.youtube.com/embed/2qBKQlQutak?loop=1&autoplay=1&mute=1&playlist=2qBKQlQutak&iv_load_policy=3&disablekb=1&controls=0&playsinline=1&enablejsapi=1"
                        alt="first slide" />
                    <Carousel.Caption>
                        <h5>NCT 127</h5>
                        <h1>FACT CHECK</h1>
                        <button>ALBUM</button>
                        <button>NCT 127</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe
                        className="d-block w-100 min-vh-100"
                        src="https://www.youtube.com/embed/w92u4od6wxk?loop=1&autoplay=1&mute=1&playlist=w92u4od6wxk&iv_load_policy=3&disablekb=1&controls=0&playsinline=1&enablejsapi=1"
                        alt="first slide" />
                    <Carousel.Caption>
                        <h5>aespa</h5>
                        <h1>DRAMA</h1>
                        <button>ALBUM</button>
                        <button>AESPA</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe
                        className="d-block w-100 min-vh-100"
                        src="https://www.youtube.com/embed/T50r7slDTGE?loop=1&amp;autoplay=1&amp;mute=1&amp;playlist=T50r7slDTGE&amp;iv_load_policy=3&amp;disablekb=1&amp;controls=0&amp;playsinline=1&amp;enablejsapi=1"
                        alt="first slide" />
                    <Carousel.Caption>
                        <h5>NCT</h5>
                        <h1>GOLDEN AGE</h1>
                        <button>ALBUM</button>
                        <button>NCT</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;
