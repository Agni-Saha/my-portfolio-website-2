/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import "./Contact.css"

export default class Contact extends Component {
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
            <body>
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
                                <li><a data-text="Home" href="/#hero">Home</a></li>
                                <li><a data-text="About" href="/about">About</a></li>
                                <li><a data-text="Projects" href="./#projects">Projects</a></li>
                                <li><a data-text="Testimonial" href="./#testimonial">Testimonial</a></li>
                                <li><a data-text="Contact" href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <section id="contact">
                    <div className="container">
                        <h2 className="section-heading" data-outline="contact">Contact</h2>
                        <div className="wrapper">
                            <div className="left">
                                <h2 className="contact-heading">Hire Me/Inquiry</h2>
                                <p className="contact-desc">The more details about your project you include in your message, the faster I will get
                                    back to you. You’ll hear back from me within 2–4 business days.
                                    <br /><br />
                                    I look forward to hearing from you.
                                </p>
                                <div className="contact-info">
                                    <ul>
                                        <li><a>
                                            <span className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </span>
                                            <span className="text">+91 834 698 3581</span>
                                        </a></li>
                                        <li><a>
                                            <span className="icon">
                                                <i className="far fa-envelope"></i>
                                            </span>
                                            <span className="text">agnisaha337599@gmail.com</span>
                                        </a></li>
                                        <li><a>
                                            <span className="icon">
                                                <i className="fas fa-location-arrow"></i>
                                            </span>
                                            <span className="text">Kolkata, West Bengal, India</span>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="social-info">
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
                            </div>
                            <div className="right">
                                <div className="form-wrapper">
                                    <form action="#">
                                        <div className="form-group">
                                            <label for="name">Your Name</label>
                                            <div className="input-wrapper">
                                                <span className="icon">
                                                    <i className="far fa-user"></i>
                                                </span>
                                                <input type="text" id="name" name="name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Your Email</label>
                                            <div className="input-wrapper">
                                                <span className="icon">
                                                    <i className="far fa-envelope"></i>
                                                </span>
                                                <input type="text" id="email" name="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="message">Message</label>

                                            <textarea type="text" id="message" name="message" width="100%">

                                            </textarea>
                                        </div>
                                        <button type="submit">Send</button>
                                    </form>
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
                                    <img src="image/light-logo.svg" alt="" />
                                </a></div> */}
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate iusto id odio quis placeat non
                                    similique dolores cupiditate dolorum obcaecati explicabo nisi laboriosam, iure aliquam. </p>
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
                                    <li><a href="#">agnisaha337599@gmail.com</a></li>
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

                <script src="./app.js"></script>
            </body>
        )
    }
}
