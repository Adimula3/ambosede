import React, {useEffect, useRef, useState} from 'react';
import '../styles/test.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image1 from "../assets/img/why-us-bg.jpg";
import {Col, Row} from "react-bootstrap";
function Test2(props) {

    const [stop, setStop] = useState(false);
    const stopRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setStop(true);
            }
        });
    }
    const observer = useRef(new IntersectionObserver(handleIntersection, { threshold: 1 }));

    useEffect(() => {
        if (stopRef.current) {
            observer.current.observe(stopRef.current);
        }
        return () => {
            observer.current.disconnect();
        };
    }, [stopRef]);

    return (
        <div>

            <Parallax pages={3} style={{}} >
                <ParallaxLayer offset={0} speed={0} >
                    <div className="hero-content3">
                        <div className="hero-details3">
                            <h1>Focus On What Matters</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae odio,
                                vel exercitationem officiis provident minima.</p>
                            <div className="home-buttons3 d-flex">
                                <button  className="btn btn-primary">
                                    Get started
                                </button>
                                <button className="btn btn-dark">
                                    watch video
                                </button>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0}>
                    <section className="why-choose-us3">
                        <h1 className="title">Why Choose Us</h1>
                        <div className="why-choose-us-content3 d-flex">
                            <div className="">
                                <img className="image1" src={Image1} alt=""/>
                            </div>
                            <div className="why-choose-us-details3">
                                <h5>Let’s grow your buisness together</h5>
                                <p className="p-1">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</p>
                                <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam,
                                    natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum.
                                    Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas
                                    sapiente optio.</p>
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>

                <div ref={stopRef}>
                    <ParallaxLayer offset={2} speed={-0} >
                        <section className="Services3">
                            <h1 className="title3">Services</h1>
                            <div className="services-content3">
                                <Row>
                                    <Col lg={4}>
                                        <div>
                                            <h5>Lorem Ipsum</h5>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et
                                                quas molestias excepturi sint occaecati cupiditate
                                                non provident</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <h5>Lorem Ipsum</h5>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et
                                                quas molestias excepturi sint occaecati cupiditate
                                                non provident</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <h5>Lorem Ipsum</h5>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et
                                                quas molestias excepturi sint occaecati cupiditate
                                                non provident</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <div>
                                            <h5>Lorem Ipsum</h5>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et
                                                quas molestias excepturi sint occaecati cupiditate
                                                non provident</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <h5>Lorem Ipsum</h5>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et
                                                quas molestias excepturi sint occaecati cupiditate
                                                non provident</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <h5>Lorem Ipsum</h5>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et
                                                quas molestias excepturi sint occaecati cupiditate
                                                non provident</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </ParallaxLayer>
                </div>
            </Parallax>
            <div className="Home3">
            </div>
            <div className="animation_layer3"></div>
        </div>
    );
}

export default Test2;
