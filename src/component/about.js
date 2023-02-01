import React from 'react';
import Image1 from "../assets/img/why-us-bg.jpg";

function About(props) {
    return (
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
}

export default About;
