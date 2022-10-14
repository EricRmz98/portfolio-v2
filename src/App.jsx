import { useEffect, useState } from 'react';
import './App.css';
import curriculumVitae from './docs/Eric Ramirez CV.pdf';

//images
import me from './assets/me.jpg';

function App() {
    const [isThemeDark, setIsThemeDark] = useState(false);

    return (
        <>
            <div
                className={
                    isThemeDark
                        ? 'home-background home-dark-background'
                        : 'home-background home-light-background'
                }
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
                        className={
                            isThemeDark
                                ? 'curriculum-button curriculum-dark-button'
                                : 'curriculum-button curriculum-light-button'
                        }
                        href={curriculumVitae}
                        download="Eric Ramirez CV"
                    >
                        <i class="fa-solid fa-file green-txt"></i> Currículum
                    </a>
                </div>

                <div className="name-container">
                    <div className="d-flex jc-between">
                        <h1
                            className="margin-0"
                            style={
                                isThemeDark
                                    ? { color: '#F9FFFF' }
                                    : { color: '#7F002E' }
                            }
                        >
                            ERIC
                        </h1>

                        <div className="text-end job">
                            <h2 className="margin-0 green-txt">
                                Desarrollador FullStack
                            </h2>
                        </div>
                    </div>

                    <h1
                        className="margin-0 last-name"
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
                className={
                    isThemeDark
                        ? 'about-me-background about-me-dark-background'
                        : 'about-me-background about-me-light-background'
                }
            >
                <div
                    className="d-flex jc-center ai-center"
                    style={{ height: '100%' }}
                >
                    <div className="d-flex">
                        <img className="personal-photo" src={me} />
                        <div
                            className={
                                isThemeDark
                                    ? 'intro-txt-box dark-txt-box'
                                    : 'intro-txt-box light-txt-box'
                            }
                        >
                            <div
                                className={
                                    isThemeDark
                                        ? 'about-me-dialog-arrow dark-txt-box'
                                        : 'about-me-dialog-arrow light-txt-box'
                                }
                            ></div>
                            <h2
                                className={
                                    isThemeDark
                                        ? 'margin-0 dark-title'
                                        : 'margin-0 light-title'
                                }
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
                                universidad descubrí el desarrollo web y quedé
                                maravillado con su basta aplicación y su
                                practicidad para ejecutarse en prácticamente
                                cualquier dispositivo. Disfruto mucho de los
                                retos que se presentan durante el desarrollo y
                                me apasiona la tecnología.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
