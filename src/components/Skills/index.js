import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Skills and Experience".split("")}
              idx={15}
            />
          </h1>
          <p>
            I'm currently a program analyst at Cognizant. I worked on an application with 
            n-tier architecture using class libraries, data entities, services, data access layer, business logic layer. I was responsible for application maintenance and sesearch, debugging and providing fixes to critical issues.

          </p>
          <p>
          <span align="LEFT">
            My skillset consists of 
            <ul>
                <li>Languages: C++, Python, JavaScript, HTML</li>
                <li>Frameworks: Django, REST Framework</li>
                <li>Libraries: ReactJS, Redux, Tailwind CSS</li>
                <li>Database: MySQL, PostgreSQL</li>
                <li>Tools: Git/GitHub, VS Code, Sublime Text</li>
                <li>Others: Postman, HTTP protocol, Docker, Data Structures and Algorithms</li>
            </ul>
          </span>
          </p>
          <p>
            I am currently learning web development. I use Django for backend and React for frontend.
            I have built a few projects using the skillset I have acquired. Check them out here
          </p>
          <p>
            <a href = "/portfolio">Projects </a>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#080135" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Skills
