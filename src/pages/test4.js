import React from 'react';
import Image1 from "../assets/img/why-us-bg.jpg";
import {Col, Row} from "react-bootstrap";

function Test4(props) {
    return (
        <div>
            <div className="pl-1">
                <div className="hero-content">
                    <div className="hero-details">
                        <h1>Focus On What Matters</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae odio,
                            vel exercitationem officiis provident minima.</p>
                        <div className="home-buttons d-flex">
                            <button  className="btn btn-primary">
                                Get started
                            </button>
                            <button className="btn btn-dark">
                                watch video
                            </button>
                        </div>
                    </div>
                </div>
                <section className="why-choose-us" style={{background: '#FFFFF'}}>
                    <h1 className="title">Why Choose Us</h1>
                    <div className="why-choose-us-content d-flex">
                        <div className="">
                            <img className="image1" src={Image1} alt=""/>
                        </div>
                        <div className="why-choose-us-details">
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
                <section className="Services">
                    <h1 className="title">Services</h1>
                    <div className="services-content">
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
                <div className="cta">
                    <h1>Ut fugiat aliquam aut non</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident.</p>
                    <button className="btn btn-primary">
                        Call to action
                    </button>
                </div>

            </div>
            <div className="pl-2">

            </div>
        </div>
    );
}

export default Test4;
