/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import "./Home.css"

export default class Home extends Component {
    componentDidMount() {
        const hamburgerMenu = document.querySelector('#navigation .nav-icon');
        const navContent = document.querySelector('#nav-content');
        const closeNavButton = document.querySelector('#nav-content .close-btn');
        const navLinks = document.querySelectorAll('#nav-content nav ul li a');
        const scrollButton = document.querySelector(".scroll-top");

        // scroll TOP Button Events

        if (scrollButton) {
            window.addEventListener('scroll', () => {
                if (pageYOffset > (window.innerHeight * 1.2)) {
                    scrollButton.style.display = "flex";
                } else {
                    scrollButton.style.display = "none";
                }
            });
            scrollButton.addEventListener("click", () => {
                window.scrollTo(0, 0);
            });
        }

        // Hamburger Menu events
        hamburgerMenu.addEventListener('click', () => {
            navContent.classList.add('show');
            document.body.style.overflow = "hidden";
        });
        closeNavButton.addEventListener('click', () => {
            navContent.classList.remove('show');
            document.body.style.overflow = "initial";
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navContent.classList.remove('show');
                document.body.style.overflow = "initial";
            })
        })

    }
    render() {
        return (
            <div className="body">
                <div className="scroll-top">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                    </svg>
                </div>

                <section id="navigation">
                    <div className="nav-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </section>

                <div id="nav-content">
                    <div className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="wrapper">
                        <h2 className="section-heading">Menu</h2>
                        <nav>
                            <ul>
                                <li><a data-text="Home" href="./#hero">Home</a></li>
                                <li><a data-text="About" href="/about">About</a></li>
                                <li><a data-text="Projects" href="./#projects">Projects</a></li>
                                <li><a data-text="Testimonial" href="./#testimonial">Testimonial</a></li>
                                <li><a data-text="Contact" href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>

                <section id="hero">
                    <div className="container">
                        <div className="left">
                            <p className="subheading">Hello, I'm</p>
                            <h2 className="heading">
                                <div className="wrapper"><span>Agni</span></div>
                            </h2>
                            <p className="desc">I work with companies and agencies
                                around the world, building Web sites and application
                                UIs with strong focus on
                                responsive design, accessibility, performance,</p>
                            <div className="buttons">
                                <a href="#projects" className="primary-btn">See My Works</a>
                            </div>
                        </div>
                        <div className="right">
                            <img src="image/profile1.jpg" alt="" />
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <h2 className="section-heading" data-outline="Services">Services</h2>
                        <div className="all-items">
                            <div className="item">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="item-heading">Web Design</h3>
                                <p className="item-desc">I build up the high performance website
                                    with blazing fast speed. Website with high
                                    performance can lead the visitor more. </p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="item-heading">UI/UX</h3>
                                <p className="item-desc">I do UI/UX design for the website
                                    that assist websites to get an outstanding look. Unique
                                    design creates an unique personality for websites.</p>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <span className="service_icon_size">
                                        <i className="fas fa-code"></i>
                                    </span>
                                </div>
                                <h3 className="item-heading">Programming</h3>
                                <p className="item-desc">I know C++, Java, Python, Javascript
                                    and am sufficiently proficient in all of these to create 
                                    industry-level projects.
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="stats">
                    <div className="container">
                        <h2 className="section-heading" data-outline="Stats">Stats</h2>
                        <div className="all-items">
                            <div className="item">
                                <h2 className="number">50+</h2>
                                <h3 className="stats-sub-heading">Projects done</h3>
                                <p>I worked on more than 50+ projects. I know how to make
                                    things fascinating and eye-catching. Making high
                                    performance website is always a sign of mine.</p>
                            </div>
                            <div className="item">
                                <h2 className="number">30+</h2>
                                <h3 className="stats-sub-heading">Happy clients</h3>
                                <p>I worked with more than 30+ clients. Client satisfaction
                                    is my main priority. I generally attempt to
                                    complete the work before the deadline.</p>
                            </div>
                            <div className="item">
                                <h2 className="number">4+</h2>
                                <h3 className="stats-sub-heading">Years experience</h3>
                                <p>I worked with more than 30+ clients. Client satisfaction
                                    is my main priority. I generally attempt to
                                    complete the work before the deadline.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div className="container">
                        <h2 className="section-heading" data-outline="about">About</h2>
                        <div className="wrapper">
                            <div className="left">
                                <div className="card">
                                    <div className="img">
                                        <img src="image/profile.jpg" alt="" />
                                    </div>
                                    <p className="card-desc">I’m a freelance web designer and developer
                                        based in India. I love the Web platform
                                        and I need to improve it for
                                        everybody. What's more, I believe myself to be totally honored that
                                        I will assemble it professionally.</p>
                                    <h3 className="card-name">Agni Saha</h3>
                                    <p className="card-sub-title">Sample Designation</p>
                                </div>
                            </div>
                            <div className="right">
                                <p className="subheading">Hello! This is AGNI</p>
                                <h2 className="slogan">Freelance Web Designer</h2>
                                <p className="right-text">I work with companies and agencies around
                                    the world, building Web sites and application
                                    UIs with strong focus on
                                    responsive design, accessibility, performance, and the
                                    latest in the area of front-end
                                    (Javascript, React.js, node, Python )
                                    I also speak and run workshops across the globe, also
                                    focusing on CSS, SVG, Responsive Design and
                                    accessibility, covering practical tips on how to build
                                    full stack using modern tools and techniques that scale
                                    and are future-proof.
                                </p>
                                <div className="buttons">
                                    <a href="./resume.txt" className="primary-btn" download="">Download Resume</a>
                                    <a href="/about" className="primary-btn outline">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects">
                    <div className="container">
                        <h2 className="section-heading" data-outline="Projects">Projects</h2>
                        <div className="all-items">
                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src="image/project-1.png" alt="" />
                                    </div>
                                </div>
                                <div className="right">
                                    <h2 className="project-title">DoctorsVerse</h2>
                                    <h3 className="project-sub-title">Online Doctors Booking Website.</h3>
                                    <p className="project-desc">
                                        {`(Group Project) A website that allows user to book any 
                                        doctor from any hospital in their area, using React.js in 
                                        frontend, node.js and express in backend, and MySQL as database`}
                                    </p>
                                    <div className="buttons">
                                        <a href="#" className="primary-btn">Know More</a>
                                        <a href="#" className="primary-btn outline external-link">
                                            <span>Preview</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0
                                                    002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src="image/project-2.png" alt="" />
                                    </div>
                                </div>
                                <div className="right">
                                    <h2 className="project-title">Face-Recognizing-Brain
                                    </h2>
                                    <h3 className="project-sub-title">A website for detecting faces in images
                                    </h3>
                                    <p className="project-desc">
                                        {
                                            `A website that finds human faces in any image 
                                            provided. Using machine learning from Clarifai API, it is 
                                            created using react.js in frontend, node.js in 
                                            backend and PostgreSQL as database`
                                        }
                                    </p>
                                    <div className="buttons">
                                        <a href="#" className="primary-btn">Know More</a>
                                        <a href="#" className="primary-btn outline external-link">
                                            <span>Preview</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 
                                                    002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src="image/project-3.png" alt="" />
                                    </div>
                                </div>
                                <div className="right">
                                    <h2 className="project-title">Netflix-Clone</h2>
                                    <h3 className="project-sub-title">A cloned website of Netflix</h3>
                                    <p className="project-desc">
                                        {
                                            `A netflix clone website, created totally by me, 
                                            using react.js and Firebase Database and 
                                            authenication along with Stripe payment checkout`
                                        }
                                    </p>
                                    <div className="buttons">
                                        <a href="#" className="primary-btn">Know More</a>
                                        <a href="#" className="primary-btn outline external-link">
                                            <span>Preview</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 
                                                    4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="footer">
                    <div className="container">
                        <footer>
                            <div className="col-1">
                                {/* <div className="logo"><a href="#">
                                    AGNI
                                </a></div> */}
                                <p>A freelance web designer and developer from Kolkata, West Bengal, India.
                                    I generally make websites that have extraordinary
                                    designs and also have a good performance rate. </p>
                            </div>
                            <div className="col-2">
                                <h2 className="column-heading">Important<br />Links</h2>
                                <ul>
                                    <li><a href="/#home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/#Project">Project</a></li>
                                    <li><a href="/#testimonial">Testimonial</a></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h2 className="column-heading">Contact<br />Info</h2>
                                <ul>
                                    <li><a href="#filluplater">agnisaha7799@gmail.com</a></li>
                                    <li><a href="#filluplater">+91 834 698 3581</a></li>
                                    <li><a href="#filluplater">Kolkata, West Bengal, India</a></li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h2 className="column-heading">Social<br />Links</h2>
                                <ul>
                                    <li><a href="https://www.facebook.com/">
                                        <i className="fab fa-facebook-f"></i>
                                    </a></li>
                                    <li><a href="https://www.twitter.com/">
                                        <i className="fab fa-twitter"></i>
                                    </a></li>
                                    <li><a href="https://www.instagram.com/">
                                        <i className="fab fa-instagram"></i>
                                    </a></li>
                                    <li><a href="https://co.linkedin.com/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                </section>

            </div>
        )
    }
}
