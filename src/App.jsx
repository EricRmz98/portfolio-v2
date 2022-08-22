import { useEffect, useState } from 'react'
import './App.css'
import curriculumVitae from './docs/Eric Ramirez CV.pdf'
import Typewriter from 'typewriter-effect';

function App() {

  const [isThemeDark, setIsThemeDark] = useState(false);

  return (
    <>
      <div className={isThemeDark ? 'home-background home-dark-background' : 'home-background home-light-background'}>
        <div className='home-buttons-container'>

          <div className='theme-switch'>
            <p className='theme-switch-icon' style={{ color: '#FE8049' }}><i className="fa-solid fa-sun"></i></p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isThemeDark}
                onChange={e => setIsThemeDark(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
            <p className='theme-switch-icon' style={{ color: '#090D19' }}><i className="fa-solid fa-moon"></i></p>
          </div>

          <a
            className={isThemeDark ? 'curriculum-button curriculum-dark-button' : 'curriculum-button curriculum-light-button'}
            href={curriculumVitae}
            download="Eric Ramirez CV"
          >
            <i class="fa-solid fa-file green-txt"></i> Currículum
          </a>
        </div>

        <div className='name-container'>
          <div className='display-flex justify-content-between'>
            <h1
              className='margin-0'
              style={isThemeDark ? { color: '#F9FFFF' } : { color: '#7F002E' }}
            >
              ERIC
            </h1>

            <div className='text-end job'>
              <h2 className='margin-0 green-txt'>Desarrollador Frontend</h2>
            </div>
          </div>

          <h1
            className='margin-0 last-name'
            style={isThemeDark ? { color: '#C5CCD2' } : { color: '#52002D' }}
          >
            RAMÍREZ
          </h1>
        </div>
      </div>



    </>
  )
}

export default App
