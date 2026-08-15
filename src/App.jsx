import React, { useState } from "react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Palette,
  Cloud,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code2 />,
      title: "Web Development",
      text: "High-performance websites and web applications designed for modern businesses.",
    },
    {
      icon: <Smartphone />,
      title: "App Development",
      text: "Scalable mobile experiences that connect your business with your customers.",
    },
    {
      icon: <ShoppingCart />,
      title: "E-Commerce",
      text: "Powerful online stores built to create seamless shopping experiences.",
    },
    {
      icon: <Megaphone />,
      title: "Digital Marketing",
      text: "Data-driven digital strategies that help your brand reach the right audience.",
    },
    {
      icon: <Palette />,
      title: "UI / UX Design",
      text: "Clean, intuitive interfaces that turn ideas into memorable digital experiences.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Solutions",
      text: "Reliable and scalable cloud solutions built around your business needs.",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    closeMenu();
  };

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">T</span>
          <span>TCONGS</span>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="nav-button"
          onClick={() => scrollToSection("contact")}
        >
          Let's Talk
          <ArrowRight size={17} />
        </button>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </header>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      {menuOpen && (
        <div className="mobile-nav">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#process" onClick={closeMenu}>
            Process
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>
      )}

      {/* =========================
          HERO
      ========================= */}

      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <div className="eyebrow">
              <span></span>
              DIGITAL SOLUTIONS FOR MODERN BUSINESSES
            </div>

            <h1>
              Turning ideas into
              <br />
              <span>digital impact.</span>
            </h1>

            <p>
              We design and develop powerful digital experiences
              that help businesses connect with their customers,
              grow faster and stay ahead.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollToSection("contact")}
              >
                Start a Project
                <ArrowRight size={18} />
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </button>

            </div>

            <div className="hero-stats">

              <div>
                <strong>Web</strong>
                <span>Development</span>
              </div>

              <div>
                <strong>App</strong>
                <span>Development</span>
              </div>

              <div>
                <strong>Digital</strong>
                <span>Growth</span>
              </div>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="glow glow-one"></div>

            <div className="glow glow-two"></div>

            <div className="orbit orbit-one"></div>

            <div className="orbit orbit-two"></div>

            <div className="visual-card main-card">

              <div className="card-top">

                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>

              </div>

              <div className="visual-title">

                <span>Digital</span>

                <strong>
                  Innovation
                </strong>

              </div>

              <div className="code-lines">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="dashboard-box">

                <div className="chart"></div>

                <div className="chart chart-small"></div>

              </div>

            </div>

            {/* FLOATING CARD 1 */}

            <div className="floating-card card-one">

              <CheckCircle2 size={18} />

              <div>

                <strong>
                  Digital Solution
                </strong>

                <small>
                  Built for your business
                </small>

              </div>

            </div>

            {/* FLOATING CARD 2 */}

            <div className="floating-card card-two">

              <strong>
                01 → 04
              </strong>

              <small>
                Idea to Launch
              </small>

            </div>

          </div>

        </section>

        {/* =========================
            TRUST / TECHNOLOGIES
        ========================= */}

        <section className="trust">

          <p>
            BUILDING DIGITAL SOLUTIONS WITH
          </p>

          <div className="trust-items">

            <span>WEB</span>

            <span>APP</span>

            <span>CLOUD</span>

            <span>AI</span>

            <span>MARKETING</span>

            <span>DESIGN</span>

          </div>

        </section>

        {/* =========================
            SERVICES
        ========================= */}

        <section
          className="services-section"
          id="services"
        >

          <div className="section-heading">

            <div>

              <div className="eyebrow">

                <span></span>

                WHAT WE DO

              </div>

              <h2>

                Digital solutions
                <br />
                built to <span>scale.</span>

              </h2>

            </div>

            <p>

              We combine technology, creativity and
              business thinking to build digital products
              that create real value.

            </p>

          </div>

          <div className="services-grid">

            {services.map((service, index) => (

              <div
                className="service-card"
                key={index}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection("contact");
                  }}
                >

                  Learn more

                  <ArrowRight size={16} />

                </a>

              </div>

            ))}

          </div>

        </section>

        {/* =========================
            ABOUT / WHY TCONGS
        ========================= */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-content">

            <div className="eyebrow">

              <span></span>

              WHY TCONGS

            </div>

            <h2>

              Technology with
              <br />
              <span>purpose.</span>

            </h2>

            <p>

              We believe technology should solve real
              business problems. Our approach combines
              thoughtful design, reliable development and
              a clear understanding of your goals.

            </p>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >

              Start a Conversation

              <ArrowRight size={17} />

            </button>

          </div>

          <div className="about-points">

            <div className="about-point">

              <div className="point-number">
                01
              </div>

              <div>

                <h3>
                  User Focused
                </h3>

                <p>
                  We create experiences around
                  real users and their needs.
                </p>

              </div>

            </div>

            <div className="about-point">

              <div className="point-number">
                02
              </div>

              <div>

                <h3>
                  Scalable Solutions
                </h3>

                <p>
                  We build digital products that
                  can evolve with your business.
                </p>

              </div>

            </div>

            <div className="about-point">

              <div className="point-number">
                03
              </div>

              <div>

                <h3>
                  Business Driven
                </h3>

                <p>
                  Every solution is designed around
                  measurable business goals.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            PROCESS
        ========================= */}

        <section
          className="process-section"
          id="process"
        >

          <div className="eyebrow">

            <span></span>

            OUR PROCESS

          </div>

          <h2>

            From idea to
            <br />
            <span>impact.</span>

          </h2>

          <div className="process-grid">

            <div>

              <strong>01</strong>

              <h3>
                Discover
              </h3>

              <p>
                Understand your goals, users
                and business requirements.
              </p>

            </div>

            <div>

              <strong>02</strong>

              <h3>
                Design
              </h3>

              <p>
                Create intuitive experiences
                around your users.
              </p>

            </div>

            <div>

              <strong>03</strong>

              <h3>
                Build
              </h3>

              <p>
                Develop scalable and reliable
                digital solutions.
              </p>

            </div>

            <div>

              <strong>04</strong>

              <h3>
                Grow
              </h3>

              <p>
                Launch, improve and continuously
                scale your product.
              </p>

            </div>

          </div>

        </section>

        {/* =========================
            CTA
        ========================= */}

        <section
          className="cta-section"
          id="contact"
        >

          <div>

            <div className="eyebrow">

              <span></span>

              HAVE AN IDEA?

            </div>

            <h2>

              Let's build something
              <br />
              <span>great together.</span>

            </h2>

            <p>

              Tell us about your project and let's
              turn your idea into a digital experience
              that makes an impact.

            </p>

          </div>

          <button
            className="primary-button"
            onClick={() => {
              window.location.href =
                "mailto:info@tcongsinfotech.com";
            }}
          >

            Let's Talk

            <ArrowRight size={18} />

          </button>

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div>

          <a
            href="#home"
            className="logo"
          >

            <span className="logo-mark">
              T
            </span>

            <span>
              TCONGS
            </span>

          </a>

          <p>

            Building digital experiences that
            help businesses grow, connect and scale.

          </p>

        </div>

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#about">
            About
          </a>

          <a href="#process">
            Process
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <div className="copyright">

          © 2026 Tcongs Infotech.
          All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default App;