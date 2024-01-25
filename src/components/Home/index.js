import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect, useState } from "react";
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    return (
        <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i,</span>
                    <span className={`${letterClass} _12`}> </span>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m&nbsp;</span>
                    <br />
                    <AnimatedLetters letterClass = {letterClass}
                    strArray = {"Harshvardhan".split("")}
                    idx = {15} />
                    <span className={`${letterClass} _27`}>&#128075;</span>
                </h1>
                <h2>Program Analyst at Cognizant </h2>
                <Link to = "/contact" className='flat-button'> CONTACT ME</Link>           
            </div>
        </div>
        <Loader type ="cube-transition" />
        </>
    )
}

export default Home