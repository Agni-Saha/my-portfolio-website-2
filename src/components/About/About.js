/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import AboutInfoItem from './AboutInfoItem'
import "./About.css"

export default class About extends Component {
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
            <div className="aboutStyles">
                <section id="navigation">
                    <div className="nav-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </section>

                <div id="nav-content">
                    <div className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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

                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about__subheading">
                                Hi, I am <span>Agni Saha</span>
                            </p>
                            <h2 className="about__heading">A freelance Web developer</h2>
                            <div className="about__info">
                                <p>
                                    I am from Kolkata, West Bengal, India. A place of beauty and
                                    nature. Since my childhood, I loved art and design. I always
                                    tried to design stuff with my unique point of view. I also
                                    love to create things that can be usefull to others.
                                    <br /> <br />
                                    I started coding since I was in high school. Coding is also an
                                    art for me. I love it and now I also have the opportunity to
                                    design along with the coding. I find it really interesting and
                                    I enjoy the process a lot.
                                    <br />
                                    <br />
                                    My vision is to make the world a better place. Now almost
                                    everything is becoming better than ever. It is time for us to
                                    create more good stuff that helps the world to become a better
                                    place.
                                </p>
                            </div>
                            <button className="primary-btn" >Download CV</button>
                        </div>
                        <div className="right">
                            <img src="image/profile.jpg" alt="me" />
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>

                            <AboutInfoItem
                                title="School"
                                items={['Kendriya Vidyalaya No. 2, Salt Lake, Kolkata - 106']}
                            />
                            <AboutInfoItem title="Collage" items={['Jadavpur University']} />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>

                            <AboutInfoItem
                                title="FrontEnd"
                                items={['HTML', 'CSS', 'JavaScript', 'React.js']}
                            />
                            <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
                            <AboutInfoItem
                                title="Database"
                                items={['PostgreSQL', 'MongoDB', 'Firebase']}
                            />
                            <AboutInfoItem title="Design" items={['Photoshop', 'Adobe XD']} />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiences</h1>

                            <AboutInfoItem title="2020-2021" items={['null']} />
                        </div>
                    </div>
                </div>
                
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
                                    <li><a href="#">agnisaha7799@gmail.com</a></li>
                                    <li><a href="#">+91 834 698 3581</a></li>
                                    <li><a href="#">Kolkata, West Bengal, India</a></li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h2 className="column-heading">Social<br />Links</h2>
                                <ul>
                                    <li><a href="https://www.facebook.com/">
                                        <i class="fab fa-facebook-f"></i>
                                    </a></li>
                                    <li><a href="https://www.twitter.com/">
                                        <i class="fab fa-twitter"></i>
                                    </a></li>
                                    <li><a href="https://www.instagram.com/">
                                        <i class="fab fa-instagram"></i>
                                    </a></li>
                                    <li><a href="https://co.linkedin.com/">
                                        <i class="fab fa-linkedin-in"></i>
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
