import React from 'react';
import '../App.css';
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='hero-container'>
        <video src='/videos/back.mp4' autoPlay loop muted />
        <h1>Professor Michal Lachowski</h1>
        <p>Let's study together</p> <div className="zeszyt">
        <img src="papier.jpg" alt="" className="kartka"/>
          <div className="Michal">
            
            <Link to="/aboutMe"><img src="Michal.jpg" alt="" className="przystojniak" id="zoom" /> </Link>
              
              <div className="description">
                <h2>
                  My name is Michal Lachowski, I am the professor teaching in Universitate Babeş Bolyai, Cluj. My specialization is 
                  teaching Frontend technologies mostly React, apart from that I also share my knowledge of Python, and Data Science.
                  My biggest passion is not only computer science, I am biggest fan of football, travelling and cooking. 
                  Current courses I teach are:
                </h2>
                <div className="subjects">
                    <div className="sub1">React Basics</div>
                    <div className="sub2">Python</div>
                    <div className="sub3">Web scrapping</div>
                </div>
                <Link to="/aboutMe" className="link">Read more about me and courses</Link>
              </div>
          </div>
        </div>
  </div>
  );
}

export default Home;