import { useEffect, useState, useRef } from 'react';
import './App.css';
import curriculumVitae from './docs/Eric Ramirez CV.pdf';

//logos
import me from './assets/me.jpg';
import cetiLight from './assets/cetiLight.jpg';
import cetiDark from './assets/cetiDark.png';
import academloLogo from './assets/academlo.jpg';

//icons
import spain from './assets/spain.png';
import uk from './assets/uk.png';

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
  const [isSpanish, setIsSpanish] = useState(true);

  return (
    <>
      <div className={`Navbar ${isThemeDark ? 'dark-navbar' : 'light-navbar'}`}>
        <div
          style={{
            color: `${isThemeDark ? '#70c1b3' : '#fe8049'}`,
          }}
        >
          <i className="fa-solid fa-cat" style={{ fontSize: '34px' }}></i>
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
            {isSpanish ? 'Acerca de mí' : 'About me'}
          </a>
          <a onClick={() => setIsOpen(false)} href="#abilities">
            {isSpanish ? 'Habilidades' : 'Skills'}
          </a>
          <a onClick={() => setIsOpen(false)} href="#projects">
            {isSpanish ? 'Portafolio' : 'Portfolio'}
          </a>
          <a onClick={() => setIsOpen(false)} href="#contact">
            {isSpanish ? 'Contacto' : 'Contact me'}
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
          isThemeDark ? 'home-dark-background' : 'home-light-background'
        }`}
      >
        <div className="name-container">
          <div className="d-flex jc-between concert-font non-select">
            <h1
              className="m-0"
              style={{ color: `${isThemeDark ? '#F9FFFF' : '#7F002E'}` }}
            >
              ERIC
            </h1>

            <div className="text-end job">
              <h2
                className="m-0 green-txt fjalla-font non-select"
                style={{ color: `${isThemeDark ? '#70c1b3' : '#fe8049'}` }}
              >
                {isSpanish
                  ? 'Desarrollador FullStack'
                  : 'FullStack Web Developer'}
              </h2>
            </div>
          </div>

          <h1
            className="m-0 last-name concert-font non-select"
            style={{ color: `${isThemeDark ? '#C5CCD2' : '#52002D'}` }}
          >
            RAMÍREZ
          </h1>
        </div>

        <div className="settings-container">
          <div className="theme-switch">
            <p
              className="theme-switch-icon"
              style={{ color: `${isThemeDark ? '#C5CCD2' : '#52002D'}` }}
            >
              <i className="fa-solid fa-sun"></i>
            </p>

            <label className="switch">
              <input
                type="checkbox"
                checked={isThemeDark}
                onChange={(e) => setIsThemeDark(e.target.checked)}
              />
              <span className="slider"></span>
            </label>

            <p
              className="theme-switch-icon"
              style={{ color: `${isThemeDark ? '#C5CCD2' : '#52002D'}` }}
            >
              <i className="fa-solid fa-moon"></i>
            </p>
          </div>

          <a
            className={`curriculum-button ${
              isThemeDark ? 'dark-curriculum-button' : 'light-curriculum-button'
            }`}
            href={curriculumVitae}
            download="Eric Ramirez CV"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            {isSpanish ? 'Currículum' : 'Resume'}
          </a>

          <div className="lang-btn-container">
            <button
              className={`lang-btn ${!isSpanish && 'grayscale'}`}
              onClick={() => setIsSpanish(true)}
            >
              <img src={spain} />
            </button>
            <button
              className={`lang-btn ${isSpanish && 'grayscale'}`}
              onClick={() => setIsSpanish(false)}
            >
              <img src={uk} />
            </button>
          </div>
        </div>
      </div>

      <div
        id="about-me"
        className={`about-me-background d-flex jc-center section-padding ${
          isThemeDark ? 'about-me-dark-background' : 'about-me-light-background'
        }`}
      >
        <div className="about-me-container">
          <div className="photo-container">
            <img className="personal-photo round" src={me} />
          </div>
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
                  isThemeDark ? 'dark-section-title' : 'light-section-title'
                }`}
              >
                {isSpanish ? 'Acerca de Mí' : 'About Me'}
              </h2>
              <h2
                className={`m-0 patua-font ${
                  isThemeDark ? 'dark-title' : 'light-title'
                }`}
              >
                {isSpanish ? 'Hola, soy Eric...' : `Hello I'm Eric...`}
              </h2>
              {isSpanish ? (
                <p className={isThemeDark ? 'dark-txt' : 'light-txt'}>
                  Soy un desarrollador fullstack y un apasionado de la
                  informática, trabajo con tecnologías basadas en JavaScript
                  como React.js, Redux, Node.js y Express para el desarrollo de
                  aplicaciones frontend y backend.
                  <br />
                  <br />
                  Me encanta crear herramientas que resuelvan las problemáticas
                  con ayuda de la tecnología, siempre implementando soluciones
                  innovadoras y de calidad. Durante el desarrollo de varios
                  proyectos he podido poner en practica habilidades como trabajo
                  en equipo, liderazgo, comunicación, adaptabilidad y mejora
                  continua.
                  <br />
                  <br />
                  Lo que mas disfruto de ser desarrollador es aplicar mis
                  conocimientos de manera creativa y el aprendizaje constante
                  impulsado por la curiosidad.
                </p>
              ) : (
                <p className={isThemeDark ? 'dark-txt' : 'light-txt'}>
                  I am a fullstack developer and passionate about IT, I work
                  with JavaScript based technologies such as React.js, Redux,
                  Node.js and Express for frontend and backend application
                  development.
                  <br />
                  <br />
                  I love to create tools that solve problems with the help of
                  technology, always implementing innovative and quality
                  solutions. During the development of several projects I have
                  been able to put into practice skills such as teamwork,
                  leadership, communication, adaptability and continuous
                  improvement.
                  <br />
                  <br />
                  What I enjoy most about being a developer is applying my
                  knowledge in a creative way and the continuos learning driven
                  by curiosity.
                </p>
              )}
            </div>
            <div
              className={`education-container ${
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
                      isThemeDark ? 'dark-txt' : 'light-txt'
                    }`}
                  >
                    CETI
                  </p>
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    {isSpanish ? (
                      <>
                        Ing. Desarrollo
                        <br />
                        de Software
                      </>
                    ) : (
                      <>
                        Eng. Software
                        <br />
                        Development
                      </>
                    )}
                  </p>
                  <p
                    className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}
                  >
                    2019 - 2022
                  </p>
                </div>
              </div>
              <div className="d-flex ai-center">
                <img className="education-logo round" src={academloLogo} />
                <div>
                  <p
                    className={`m-0 patua-font ${
                      isThemeDark ? 'dark-txt' : 'light-txt'
                    }`}
                  >
                    Academlo
                  </p>
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    {isSpanish ? (
                      <>
                        Desarrollo Web
                        <br />
                        FullStack
                      </>
                    ) : (
                      <>
                        Fullstack Web
                        <br />
                        Development
                      </>
                    )}
                  </p>
                  <p
                    className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}
                  >
                    2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="abilities"
        className={`d-flex jc-center abilities-background section-padding  ${
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
              isThemeDark ? 'dark-section-title' : 'light-section-title'
            }`}
          >
            {isSpanish ? 'Mis Habilidades' : 'Skills'}
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
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  React
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  Redux, axios
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
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Node.js
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
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
                  backgroundColor: isThemeDark ? 'white' : '#D84924',
                }}
              >
                <i
                  className="fa-brands fa-html5 tech-icon"
                  style={{
                    color: isThemeDark ? '#D84924' : 'white',
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
                  backgroundColor: isThemeDark ? 'white' : '#1C5FA6',
                }}
              >
                <i
                  className="fa-brands fa-css3-alt tech-icon"
                  style={{
                    color: isThemeDark ? '#1C5FA6' : 'white',
                  }}
                ></i>
              </div>
              <div>
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  CSS
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  bootstrap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className={`portfolio-background d-flex jc-center section-padding ${
          isThemeDark
            ? 'portfolio-dark-background'
            : 'portfolio-light-background'
        }`}
      >
        <div className={`portfolio-container`}>
          <h2
            className={`m-0 bevan-font portfolio-title ${
              isThemeDark ? 'dark-section-title' : 'light-section-title'
            }`}
          >
            {isSpanish ? ' Mi Portafolio' : 'Portfolio'}
          </h2>
          <div
            className={`project-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-img-container">
              <img
                src={shop1}
                className={`project-img ${
                  isThemeDark
                    ? 'project-img-dark-border'
                    : 'project-img-light-border'
                }`}
              />
            </div>
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  E-Commerce
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      Inicia sesión y compra variedad de artículos electrónicos,
                      visualiza sus imágenes, características y productos
                      recomendados.
                    </>
                  ) : (
                    <>
                      Log in and buy a variety of gadgets, see it's images,
                      features and suggested products.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    React, Redux, axios, hook-forms, React-router, bootstrap,
                    CSS
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`me-05 link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://snazzy-sunflower-04f1e6.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    {isSpanish ? 'Proyecto' : 'Project'}
                  </a>
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/re6-e-commerce"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`project-card sm-reverse-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Pokédex
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      Explora la interminable lista de pokemons de todas las
                      generaciones, consulta su tipo, estadísticas y
                      movimientos.
                    </>
                  ) : (
                    <>
                      Discover the endless list of pokemon of all generations,
                      check their type stats and movements.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    React, Redux, axios, hook-forms, React-router, CSS
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`me-05 link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://superb-pixie-4eae58.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    {isSpanish ? 'Proyecto' : 'Project'}
                  </a>
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/re5-pokedex"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
            <div className="project-img-container">
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
            className={`project-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-img-container">
              <img
                src={weather}
                className={`project-img ${
                  isThemeDark
                    ? 'project-img-dark-border'
                    : 'project-img-light-border'
                }`}
              />
            </div>
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Weather App
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      Obtén la información actual del estado del tiempo con la
                      localización de tu dispositivo.
                    </>
                  ) : (
                    <>
                      Get current weather information with the location of your
                      device.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    React, CSS, axios
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`me-05 link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://lucky-bunny-e55eff.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    {isSpanish ? 'Proyecto' : 'Project'}
                  </a>
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/re2-weather"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`project-card sm-reverse-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Rick and Morty
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      Explora las distintas dimensiones visitadas a lo largo de
                      la serie, consulta sus habitantes y en cuantos capítulos
                      aparecieron.
                    </>
                  ) : (
                    <>
                      Explore the different dimensions visited along the show,
                      consult their residents and how many chapters they
                      appeared in.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    React, CSS, axios
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`me-05 link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://cerulean-syrniki-b5087e.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    {isSpanish ? 'Proyecto' : 'Project'}
                  </a>
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/re3-rickandmortylocations"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
            <div className="project-img-container">
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
            className={`project-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-img-container">
              <img
                src={quotes}
                className={`project-img ${
                  isThemeDark
                    ? 'project-img-dark-border'
                    : 'project-img-light-border'
                }`}
              />
            </div>
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Quotes
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      Consulta frases celebres al azar de distintos personajes
                      históricos importantes.
                    </>
                  ) : (
                    <>
                      Check out random quotes from various important historical
                      figures.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    React, CSS
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`me-05 link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://gregarious-crepe-dd9a0e.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    {isSpanish ? 'Proyecto' : 'Project'}
                  </a>
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/re1-quotes"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`project-card sm-reverse-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Shopping Cart
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>Añade y elimina productos del carrito de compras.</>
                  ) : (
                    <>Add and remove products from the shopping cart.</>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    HTML, CSS, Javascript, bootstrap
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`me-05 link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://gorgeous-parfait-fc32b1.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
                    {isSpanish ? 'Proyecto' : 'Project'}
                  </a>
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/shopping-cart"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
            <div className="project-img-container">
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
            className={`project-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-img-container">
              <img
                src={eCommerceApi}
                className={`project-img ${
                  isThemeDark
                    ? 'project-img-dark-border'
                    : 'project-img-light-border'
                }`}
              />
            </div>
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  E-Commerce API
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      API RESTfull para e-commerce, con CRUD de usuarios,
                      productos, categorías y carrito de compras.
                    </>
                  ) : (
                    <>
                      API RESTfull for a e-commerce, with user CRUD, products,
                      categories and shopping cart.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    Node.js, express, sequelize, PostgreSQL, Docker, JSON web
                    token, bcrypt, Firebase
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/no5-e-commerce"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`project-card sm-reverse-card ${
              isThemeDark
                ? 'dark-container dark-shadow'
                : 'light-container light-shadow'
            }`}
          >
            <div className="project-info-container">
              <div className="text-center width-100">
                <h3
                  className={`m-0 patua-font ${
                    isThemeDark ? 'dark-title' : 'light-title'
                  }`}
                >
                  Meals API
                </h3>
                <p className={`m-0 ${isThemeDark ? 'dark-txt' : 'light-txt'}`}>
                  {isSpanish ? (
                    <>
                      API RESTfull básica para plataforma de entrega de comida,
                      con CRUD de restaurantes, usuarios, platillos y ordenes.
                    </>
                  ) : (
                    <>
                      API RESTfull for a food delivery platform with restaurant
                      CRUD, users, meals and orders.
                    </>
                  )}
                  <br />
                  <p
                    className={`m-0 ${
                      isThemeDark ? 'dark-title' : 'light-title'
                    }`}
                  >
                    Node.js, express, sequelize, PostgreSQL, JSON web token,
                    bcrypt
                  </p>
                </p>
                <div className="project-buttons-container">
                  <a
                    className={`link-btn ${
                      isThemeDark ? 'link-btn-dark' : 'link-btn-light'
                    }`}
                    href="https://github.com/TamalRojo/no3-meals"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>{' '}
                    {isSpanish ? 'Repositorio' : 'Repository'}
                  </a>
                </div>
              </div>
            </div>
            <div className="project-img-container">
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
        className={`contact-background d-flex jc-center section-padding ${
          isThemeDark ? 'contact-dark-background' : 'contact-light-background'
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
              isThemeDark ? 'dark-section-title' : 'light-section-title'
            }`}
          >
            {isSpanish ? 'Contáctame' : 'Contact Me'}
          </h2>

          <div className="d-flex jc-around wrap ">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/eric-ramirez-a44975241/"
              target="_blank"
            >
              <h4
                className={`m-0 ${
                  isThemeDark
                    ? 'dark-txt dark-contact-link'
                    : 'light-txt light-contact-link'
                }`}
              >
                <i className="fa-brands fa-linkedin"></i> linkedIn
              </h4>
            </a>

            <a
              className="contact-link"
              href="https://github.com/TamalRojo"
              target="_blank"
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

            <a className="m-1" href="mailto: ericmacias1011@gmail.com">
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
