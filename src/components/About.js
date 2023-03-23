import React from 'react'
import img from '../assets/cover.jpeg'
import {FaReact, FaNode} from "react-icons/fa";
import {SiTailwindcss, DiGitmerge, DiJavascript } from "react-icons/di";
import {FiCode} from "react-icons/fi";
import {MdLocalAirport, MdNature} from "react-icons/md";
import {BsFillBookFill} from "react-icons/bs";
import {GiSelfLove} from "react-icons/gi";
import {} from "react-icons/";
function About() {
  return (
    <div>
        {/* left */}
        <div>
            <img src={img}/>
        </div>

        {/* right */}
        <div>
            <h1>About me</h1>
            <p>
            web design and dev Graphic sevices social maneger
            re back hacked or lose acounts vedios & photo editing 
             xalinta every asignment  Writting thesis book and pptx others btn

            </p>
        </div>

        {/* Tools */}
        <div>
            <h2>Tools</h2>
            <div>
                <div>
                    <DiJavascript/> Javascript

                </div>
            </div>
        </div>

        {/* Intrest */}
    </div>
  )
}

export default About