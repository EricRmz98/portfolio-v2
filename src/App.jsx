import { useEffect, useState } from 'react';
import './App.css';
import curriculumVitae from './docs/Eric Ramirez CV.pdf';

//images
import me from './assets/me.jpg';
import cetiLight from './assets/cetiLight.jpg';
import cetiDark from './assets/cetiDark.png';
import academloLogo from './assets/academlo.jpg';

function App() {
    const [isThemeDark, setIsThemeDark] = useState(false);

    return (
        <>
            <div
                className={`home-background ${
                    isThemeDark
                        ? 'home-dark-background'
                        : 'home-light-background'
                }`}
            >
                <div className="home-buttons-container">
                    <div className="theme-switch">
                        <p
                            className="theme-switch-icon"
                            style={{ color: '#FE8049' }}
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
                            className="theme-switch-icon"
                            style={{ color: '#090D19' }}
                        >
                            <i className="fa-solid fa-moon"></i>
                        </p>
                    </div>

                    <a
                        className={`curriculum-button ${
                            isThemeDark
                                ? 'curriculum-dark-button'
                                : 'curriculum-light-button'
                        }`}
                        href={curriculumVitae}
                        download="Eric Ramirez CV"
                    >
                        <i class="fa-solid fa-file green-txt"></i> Currículum
                    </a>
                </div>

                <div className="name-container">
                    <div className="d-flex jc-between">
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
                            <h2 className="m-0 green-txt">
                                Desarrollador FullStack
                            </h2>
                        </div>
                    </div>

                    <h1
                        className="m-0 last-name"
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
                className={`about-me-background ${
                    isThemeDark
                        ? 'about-me-dark-background'
                        : 'about-me-light-background'
                }`}
            >
                <div
                    className="d-flex jc-center ai-center"
                    style={{ height: '100%' }}
                >
                    <div className="d-flex">
                        <img className="personal-photo round" src={me} />
                        <div>
                            <div
                                className={`intro-txt-box ${
                                    isThemeDark
                                        ? 'dark-txt-box dark-shadow'
                                        : 'light-txt-box light-shadow'
                                }`}
                            >
                                <div
                                    className={`about-me-dialog-arrow ${
                                        isThemeDark
                                            ? 'dark-txt-box'
                                            : 'light-txt-box'
                                    }`}
                                ></div>
                                <h2
                                    className={`m-0 ${
                                        isThemeDark
                                            ? 'dark-title'
                                            : 'light-title'
                                    }`}
                                >
                                    Hola, soy Eric...
                                </h2>
                                <h3
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
                                </h3>
                            </div>
                            <div
                                className={`d-flex jc-around education-box ${
                                    isThemeDark
                                        ? 'dark-txt-box dark-shadow'
                                        : 'light-txt-box light-shadow'
                                }`}
                            >
                                <div className="d-flex ai-center">
                                    <img
                                        className="education-logo"
                                        src={isThemeDark ? cetiDark : cetiLight}
                                    />
                                    <div>
                                        <p
                                            className={`m-0 ${
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
                                            Ing. Desarrollo de Software
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
                                            className={`m-0 ${
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
                                            Desarrollo Web FullStack
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
                className={`experience-background ${
                    isThemeDark
                        ? 'experience-dark-background'
                        : 'experience-light-background'
                }`}
            >
                a
            </div>
        </>
    );
}

export default App;
