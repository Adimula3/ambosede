import React from 'react';
import '../styles/test.css';
import Image1 from '../assets/img/why-us-bg.jpg';
import {Col, Row} from "react-bootstrap";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import iphone from "../assets/img/iphone.png";
function Test(props) {
    return (
        <>

                <Parallax pages={3} className="animation1">
                    <ParallaxLayer offset={0} speed={0.25} className="parallax">
                        <div className="hero-content1">
                            <div className="hero-details1">
                                <h1>Focus On What Matters</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae odio,
                                    vel exercitationem officiis provident minima.</p>
                                <div className="home-buttons1 d-flex">
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
                    <ParallaxLayer offset={1} speed={0.25} className="parallax">
                        <section className="Why-choose-us1">
                            <h1 className="title">Why Choose Us</h1>
                            <div className="Why-choose-us1-content d-flex">
                                <div className="">
                                    <img className="image1" src={Image1} alt=""/>
                                </div>
                                <div className="Why-choose-us1-details">
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
                    <ParallaxLayer offset={2} speed={0.25} className="parallax">
                        <section className="services1">
                            <h1 className="title">Services</h1>
                            <div className="services1-content">
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
                </Parallax>
            <div className="animation_layer" id='CTA'></div>


            <div className="Home">
            </div>
        </>
    );
}

export default Test;
