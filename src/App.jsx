import { useEffect, useState, useRef } from 'react';
import './App.css';
import curriculumVitae from './docs/Eric Ramirez CV.pdf';

//images
import me from './assets/me.jpg';
import cetiLight from './assets/cetiLight.jpg';
import cetiDark from './assets/cetiDark.png';
import academloLogo from './assets/academlo.jpg';

//project images
import shop1 from './assets/projectImages/shop1.png';
import pokedex from './assets/projectImages/pokedex.png';
import weather from './assets/projectImages/weather.png';
import rickAndMorty from './assets/projectImages/rickAndMorty.png';
import quotes from './assets/projectImages/quotes.png';
import shop2 from './assets/projectImages/shop2.png';
import eCommerceApi from './assets/projectImages/eCommerceApi.png';
import mealsApi from './assets/projectImages/mealsApi.png';

function App() {
    const [isThemeDark, setIsThemeDark] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`Navbar ${
                    isThemeDark ? 'dark-navbar' : 'light-navbar'
                }`}
            >
                <div className="home-buttons-container">
                    <div className="theme-switch">
                        <p
                            className={`theme-switch-icon ${
                                isThemeDark ? 'dark-txt' : 'light-txt-alt'
                            }`}
                        >
                            <i className="fa-solid fa-sun"></i>
                        </p>

                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isThemeDark}
                                onChange={(e) =>
                                    setIsThemeDark(e.target.checked)
                                }
                            />
                            <span className="slider"></span>
                        </label>

                        <p
                            className={`theme-switch-icon ${
                                isThemeDark ? 'dark-txt' : 'light-txt-alt'
                            }`}
                        >
                            <i className="fa-solid fa-moon"></i>
                        </p>
                    </div>

                    <a
                        className={`curriculum-button ${
                            isThemeDark
                                ? 'dark-curriculum-button'
                                : 'light-curriculum-button'
                        }`}
                        href={curriculumVitae}
                        download="Eric Ramirez CV"
                    >
                        <i className="fa-solid fa-file-arrow-down"></i>{' '}
                        Currículum
                    </a>
                </div>
                <div
                    className={`nav-items ${
                        isThemeDark ? 'dark-mobile-menu' : 'light-mobile-menu'
                    } ${isOpen && 'open'}`}
                >
                    <a onClick={() => setIsOpen(false)} href="#home">
                        Home
                    </a>
                    <a onClick={() => setIsOpen(false)} href="#about-me">
                        Acerca de mí
                    </a>
                    <a onClick={() => setIsOpen(false)} href="#abilities">
                        Habilidades
                    </a>
                    <a onClick={() => setIsOpen(false)} href="#projects">
                        Portafolio
                    </a>
                    <a onClick={() => setIsOpen(false)} href="#contact">
                        Contacto
                    </a>
                </div>
                <div
                    className={`nav-toggle ${isOpen && 'open'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <i className="fa-solid fa-x"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </div>
            </div>

            <div
                id="home"
                className={`home-background ${
                    isThemeDark
                        ? 'home-dark-background'
                        : 'home-light-background'
                }`}
            >
                <div className="name-container">
                    <div className="d-flex jc-between concert-font">
                        <h1
                            className="m-0"
                            style={
                                isThemeDark
                                    ? { color: '#F9FFFF' }
                                    : { color: '#7F002E' }
                            }
                        >
                            ERIC
                        </h1>

                        <div className="text-end job">
                            <h2
                                className="m-0 green-txt fjalla-font"
                                style={
                                    isThemeDark
                                        ? { color: '#70c1b3' }
                                        : { color: '#fe8049' }
                                }
                            >
                                Desarrollador FullStack
                            </h2>
                        </div>
                    </div>

                    <h1
                        className="m-0 last-name concert-font"
                        style={
                            isThemeDark
                                ? { color: '#C5CCD2' }
                                : { color: '#52002D' }
                        }
                    >
                        RAMÍREZ
                    </h1>
                </div>
            </div>

            <div
                id="about-me"
                className={`about-me-background d-flex ai-center jc-center pt-120px ${
                    isThemeDark
                        ? 'about-me-dark-background'
                        : 'about-me-light-background'
                }`}
            >
                <div className="about-me-container d-flex">
                    <div className="d-flex" style={{ position: 'relative' }}>
                        <div
                            className={`about-me-dialog-arrow ${
                                isThemeDark
                                    ? 'dark-container'
                                    : 'light-container'
                            }`}
                        ></div>
                        <img className="personal-photo round" src={me} />
                        <div>
                            <div
                                className={`intro-txt-container ${
                                    isThemeDark
                                        ? 'dark-container dark-shadow'
                                        : 'light-container light-shadow'
                                }`}
                            >
                                <h2
                                    className={`m-0 bevan-font about-me-title ${
                                        isThemeDark
                                            ? 'dark-section-title'
                                            : 'light-section-title'
                                    }`}
                                >
                                    Acerca de Mí
                                </h2>
                                <h2
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Hola, soy Eric...
                                </h2>
                                <h4
                                    className={
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }
                                >
                                    Llevo mas de 3 años formándome como
                                    desarrollador de software, durante la
                                    universidad descubrí el desarrollo web y
                                    quedé maravillado con su vasta aplicación y
                                    su flexibilidad para ejecutarse en
                                    prácticamente cualquier dispositivo.
                                    Disfruto mucho de los retos que se presentan
                                    durante el desarrollo y me apasiona la
                                    tecnología.
                                </h4>
                            </div>
                            <div
                                className={`d-flex jc-around education-container ${
                                    isThemeDark
                                        ? 'dark-container dark-shadow'
                                        : 'light-container light-shadow'
                                }`}
                            >
                                <div className="d-flex ai-center">
                                    <img
                                        className="education-logo"
                                        src={isThemeDark ? cetiDark : cetiLight}
                                    />
                                    <div>
                                        <p
                                            className={`m-0 patua-font ${
                                                isThemeDark
                                                    ? 'dark-txt'
                                                    : 'light-txt'
                                            }`}
                                        >
                                            CETI
                                        </p>
                                        <p
                                            className={`m-0 ${
                                                isThemeDark
                                                    ? 'dark-title'
                                                    : 'light-title'
                                            }`}
                                        >
                                            Ing. Desarrollo
                                            <br />
                                            de Software
                                        </p>
                                        <p
                                            className={`m-0 ${
                                                isThemeDark
                                                    ? 'dark-txt'
                                                    : 'light-txt'
                                            }`}
                                        >
                                            2019 - 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex ai-center">
                                    <img
                                        className="education-logo round"
                                        src={academloLogo}
                                    />
                                    <div>
                                        <p
                                            className={`m-0 patua-font ${
                                                isThemeDark
                                                    ? 'dark-txt'
                                                    : 'light-txt'
                                            }`}
                                        >
                                            Academlo
                                        </p>
                                        <p
                                            className={`m-0 ${
                                                isThemeDark
                                                    ? 'dark-title'
                                                    : 'light-title'
                                            }`}
                                        >
                                            Desarrollo Web
                                            <br />
                                            FullStack
                                        </p>
                                        <p
                                            className={`m-0 ${
                                                isThemeDark
                                                    ? 'dark-txt'
                                                    : 'light-txt'
                                            }`}
                                        >
                                            2022
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="abilities"
                className={`d-flex jc-center ai-center abilities-background pt-120px ${
                    isThemeDark
                        ? 'abilities-dark-background'
                        : 'abilities-light-background'
                }`}
            >
                <div
                    className={`abilities-container ${
                        isThemeDark
                            ? 'dark-container dark-shadow'
                            : 'light-container light-shadow'
                    }`}
                >
                    <h2
                        className={`m-0 bevan-font abilities-title ${
                            isThemeDark
                                ? 'dark-section-title'
                                : 'light-section-title'
                        }`}
                    >
                        Mis Habilidades
                    </h2>

                    <div className="techs-grid ">
                        <div className="tech-container transparent-black-bg">
                            <div
                                className="tech-background round d-flex jc-center ai-center"
                                style={{ backgroundColor: '#161424' }}
                            >
                                <i
                                    className="fa-brands fa-react tech-icon"
                                    style={{ color: '#00D0F2' }}
                                ></i>
                            </div>
                            <div>
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    React
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    axios, redux
                                </p>
                            </div>
                        </div>

                        <div className="tech-container transparent-black-bg">
                            <div
                                className="tech-background round d-flex jc-center ai-center"
                                style={{ backgroundColor: 'white' }}
                            >
                                <i
                                    className="fa-brands fa-node-js tech-icon"
                                    style={{ color: '#84BB00' }}
                                ></i>
                            </div>
                            <div>
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Node.js
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    express, sequelize,
                                    <br />
                                    bcrypt, JSON web token
                                </p>
                            </div>
                        </div>

                        <div className="tech-container transparent-black-bg">
                            <div
                                className="tech-background d-flex jc-center ai-center"
                                style={{ backgroundColor: '#000000' }}
                            >
                                <i
                                    className="fa-brands fa-js tech-icon-big"
                                    style={{ color: '#F7DF1D' }}
                                ></i>
                            </div>
                            <h3
                                className={`m-0 patua-font ${
                                    isThemeDark ? 'dark-title' : 'light-title'
                                }`}
                            >
                                Javascript
                            </h3>
                        </div>

                        <div className="tech-container transparent-black-bg">
                            <div
                                className="tech-background tech-background-pt round d-flex jc-center ai-center"
                                style={{
                                    backgroundColor: isThemeDark
                                        ? 'white'
                                        : '#D84924',
                                }}
                            >
                                <i
                                    className="fa-brands fa-html5 tech-icon"
                                    style={{
                                        color: isThemeDark
                                            ? '#D84924'
                                            : 'white',
                                    }}
                                ></i>
                            </div>
                            <h3
                                className={`m-0 patua-font ${
                                    isThemeDark ? 'dark-title' : 'light-title'
                                }`}
                            >
                                HTML
                            </h3>
                        </div>

                        <div className="tech-container transparent-black-bg">
                            <div
                                className="tech-background tech-background-pt round d-flex jc-center ai-center"
                                style={{
                                    backgroundColor: isThemeDark
                                        ? 'white'
                                        : '#1C5FA6',
                                }}
                            >
                                <i
                                    className="fa-brands fa-css3-alt tech-icon"
                                    style={{
                                        color: isThemeDark
                                            ? '#1C5FA6'
                                            : 'white',
                                    }}
                                ></i>
                            </div>
                            <div className="tech-text-container">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    CSS
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    bootstrap
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="projects"
                className={`portfolio-background d-flex jc-center ai-center pt-120px ${
                    isThemeDark
                        ? 'portfolio-dark-background'
                        : 'portfolio-light-background'
                }`}
            >
                <div className={`portfolio-container`}>
                    <h2
                        className={`m-0 bevan-font portfolio-title ${
                            isThemeDark
                                ? 'dark-section-title'
                                : 'light-section-title'
                        }`}
                    >
                        Mi Portafolio
                    </h2>
                    <div
                        className={`project-card ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center">
                            <img
                                src={shop1}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                        <div className="d-flex ai-center">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    E-Commerce
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    react, redux, axios, hook form, react
                                    router, css, bootstrap, react bootstrap,
                                    bootswatch
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`me-05 link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://snazzy-sunflower-04f1e6.netlify.app/"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                                        Proyecto
                                    </a>
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/re6-e-commerce"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center jc-end">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Pokédex
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    poke API, react, redux, axios, react router,
                                    css
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`me-05 link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://superb-pixie-4eae58.netlify.app/"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                                        Proyecto
                                    </a>
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/re5-pokedex"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex ai-center">
                            <img
                                src={pokedex}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                    </div>

                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center">
                            <img
                                src={weather}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                        <div className="d-flex ai-center">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Weather App
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    open weather API, react, axios, css
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`me-05 link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://lucky-bunny-e55eff.netlify.app/"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                                        Proyecto
                                    </a>
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/re2-weather"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center jc-end">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Rick and Morty
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    Rick and Morty API, react, axios, css
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`me-05 link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://cerulean-syrniki-b5087e.netlify.app/"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                                        Proyecto
                                    </a>
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/re3-rickandmortylocations"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex ai-center">
                            <img
                                src={rickAndMorty}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                    </div>

                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center">
                            <img
                                src={quotes}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                        <div className="d-flex ai-center">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Quotes
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    react, css
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`me-05 link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://gregarious-crepe-dd9a0e.netlify.app/"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                                        Proyecto
                                    </a>
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/re1-quotes"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center jc-end">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Shopping Cart
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    html, javascript, bootstrap, css
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`me-05 link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://gorgeous-parfait-fc32b1.netlify.app/"
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                                        Proyecto
                                    </a>
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/shopping-cart"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex ai-center">
                            <img
                                src={shop2}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center">
                            <img
                                src={eCommerceApi}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                        <div className="d-flex ai-center">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    E-Commerce API
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    node.js, bcrypt, dotenv, express, express
                                    validator, firebase, JSON web token, multer,
                                    sequelize
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/no5-e-commerce"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`project-card mt-2 ${
                            isThemeDark
                                ? 'dark-container dark-shadow'
                                : 'light-container light-shadow'
                        }`}
                    >
                        <div className="d-flex ai-center jc-end">
                            <div className="text-center width-100">
                                <h3
                                    className={`m-0 patua-font ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Meals API
                                </h3>
                                <p
                                    className={`m-0 ${
                                        isThemeDark ? 'dark-txt' : 'light-txt'
                                    }`}
                                >
                                    node.js, bcrypt, JSON web token, express,
                                    express validator, sequelize, dotenv
                                </p>
                                <div className="project-buttons-container">
                                    <a
                                        className={`link-btn ${
                                            isThemeDark
                                                ? 'link-btn-dark'
                                                : 'link-btn-light'
                                        }`}
                                        href="https://github.com/TamalRojo/no3-meals"
                                    >
                                        <i className="fa-brands fa-github"></i>{' '}
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex ai-center">
                            <img
                                src={mealsApi}
                                className={`project-img ${
                                    isThemeDark
                                        ? 'project-img-dark-border'
                                        : 'project-img-light-border'
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="contact"
                className={`contact-background pt-120px d-flex jc-center ai-center ${
                    isThemeDark
                        ? 'contact-dark-background'
                        : 'contact-light-background'
                }`}
            >
                <div
                    className={`contact-container ${
                        isThemeDark
                            ? 'dark-container dark-shadow'
                            : 'light-container light-shadow'
                    }`}
                >
                    <h2
                        className={`m-0 bevan-font contact-title ${
                            isThemeDark
                                ? 'dark-section-title'
                                : 'light-section-title'
                        }`}
                    >
                        Contáctame
                    </h2>

                    <div className="d-flex jc-around wrap ">
                        <a
                            className="contact-link"
                            href="https://www.linkedin.com/in/eric-ramirez-a44975241/"
                        >
                            <h4
                                className={`m-0 ${
                                    isThemeDark
                                        ? 'dark-txt dark-contact-link'
                                        : 'light-txt light-contact-link'
                                }`}
                            >
                                <i className="fa-brands fa-linkedin"></i>{' '}
                                linkedIn
                            </h4>
                        </a>

                        <a
                            className="contact-link"
                            href="https://github.com/TamalRojo"
                        >
                            <h4
                                className={`m-0 ${
                                    isThemeDark
                                        ? 'dark-txt dark-contact-link'
                                        : 'light-txt light-contact-link'
                                }`}
                            >
                                <i className="fa-brands fa-github"></i> Github
                            </h4>
                        </a>

                        <a
                            className="m-1"
                            href="mailto: ericmacias1011@gmail.com"
                        >
                            <h4
                                className={`m-0 ${
                                    isThemeDark
                                        ? 'dark-txt dark-contact-link'
                                        : 'light-txt light-contact-link'
                                }`}
                            >
                                <i className="fa-solid fa-envelope"></i>{' '}
                                ericmacias1011@gmail.com
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
