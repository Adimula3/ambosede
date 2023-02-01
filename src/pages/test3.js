import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../styles/test3.css'
import Image1 from "../assets/img/why-us-bg.jpg";
import {Col, Row} from "react-bootstrap";
import iphone from "../assets/img/iphone.png";
import blog1 from "../assets/img/blog/blog-1.jpg";

function Test3(props) {

    const Page1 = () => (
        <div  className="hero-content">
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
    );

    const Page2 = () => (
        <section className="why-choose-us">
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
    );

    const Page3 = () => (
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
    )
    const Page4 = () => (
        <div className="cta">
            <h1>Ut fugiat aliquam aut non</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.</p>
            <button className="btn btn-primary">
                Call to action
            </button>
        </div>
    )
    const Page5 = () => (
        <section className="Features">
            <div className="f-content">
                <h1>Powerful Features for
                    Your Business</h1>
                <div className="f-list d-flex">
                    <ul>
                        <li>Easy Cart Features</li>
                        <li>Ipsum Rerum Explicabo</li>
                        <li>Easy Cart Features</li>
                        <li>Ipsum Rerum Explicabo</li>
                    </ul>
                    <ul>
                        <li>Sit amet consectetur adipisicing</li>
                        <li>Easy Cart Features</li>
                        <li>Sit amet consectetur adipisicing</li>
                        <li>Easy Cart Features</li>
                    </ul>
                    <img src={iphone} className="f-image" alt=""/>
                </div>
            </div>
            <div className="f-details">
                <div className="f-d">
                    <h1>Labore Sdio Lidui
                        Bonde Naruto</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Numquam nostrum molestias doloremque quae delectus odit minima
                        corrupti blanditiis quo animi!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </section>
    )
    const Page6 = () => (
        <section className="blog">
            <h1>Blog Post</h1>
            <div className="blog-cards d-flex">
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={blog1} alt="Card image cap" />
                    <div className="card-body">
                        <a className="user-info" href="">Tue, December 12</a><span> / Julia Parker</span>
                        <h5 className="card-title">Eum ad dolor et. Autem aut fugiat debitis</h5>
                        <p className="card-text">Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                        <a href="" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={blog1} alt="Card image cap" />
                    <div className="card-body">
                        <a className="user-info" href="">Tue, December 12</a><span> / Julia Parker</span>
                        <h5 className="card-title">Eum ad dolor et. Autem aut fugiat debitis</h5>
                        <p className="card-text">Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                        <a href="" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={blog1} alt="Card image cap" />
                    <div className="card-body">
                        <a className="user-info" href="">Tue, December 12</a><span> / Julia Parker</span>
                        <h5 className="card-title">Eum ad dolor et. Autem aut fugiat debitis</h5>
                        <p className="card-text">Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                        <a href="" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={blog1} alt="Card image cap" />
                    <div className="card-body">
                        <a className="user-info" href="">Tue, December 12</a><span> / Julia Parker</span>
                        <h5 className="card-title">Eum ad dolor et. Autem aut fugiat debitis</h5>
                        <p className="card-text">Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                        <a href="" className="read-more">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
    const Page7 = () => (
        <footer className="footer text-center text-md-start">
            <div className="container p-4">
                <Row>
                    <Col className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Nova</h5>

                        <p>
                            Cras fermentum odio eu feugiat lide par naso tierra.
                            Justo eget nada terra videa magna derita valies darta donna mare
                            fermentum iaculis eu non diam phasellus.
                        </p>
                    </Col>

                    <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Useful Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="" className="text-white">Home</a>
                            </li>
                            <li>
                                <a href="" className="text-white">About us</a>
                            </li>
                            <li>
                                <a href="" className="text-white">Services</a>
                            </li>
                            <li>
                                <a href="" className="text-white">Terms of service</a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Our Services</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="" className="text-white">Web Design</a>
                            </li>
                            <li>
                                <a href="" className="text-white">Web Development</a>
                            </li>
                            <li>
                                <a href="" className="text-white">Product Management</a>
                            </li>
                            <li>
                                <a href="" className="text-white">Marketing</a>
                            </li>
                        </ul>
                    </Col>

                </Row>

            </div>

            <div className="text-center p-3" style={{background: '#F7F9FC'}}>
                © 2020 Copyright:
                <a className="text-white" href="">MDBootstrap.com</a>
            </div>


        </footer>
    )

    return (
        <div>

            <Parallax pages={3}>
                <ParallaxLayer
                    offset={0}
                    speed={0}

                />
                <ParallaxLayer
                    offset={1}
                    speed={0}

                />
                <ParallaxLayer
                    offset={2}
                    speed={0}

                />
                <ParallaxLayer offset={0} speed={0} factor={3}>
                    <Page1 />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0} factor={3}>
                    <Page2 />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0} factor={3}>
                    <Page3 />
                </ParallaxLayer>
            </Parallax>
            <div className="pl-1"></div>
            <Parallax pages={2}>
                <ParallaxLayer
                    offset={0}
                    speed={0}
                />
                <ParallaxLayer
                    offset={1}
                    speed={0}
                />
                <ParallaxLayer
                    offset={2}
                    speed={0}
                />
                <ParallaxLayer offset={0} speed={0} factor={3}>
                    <Page4 />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0} factor={3}>
                    <Page5 />
                </ParallaxLayer>

            </Parallax>
            <div className="pl-2"></div>
        </div>
    );
}

export default Test3;
