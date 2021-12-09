import React, { useState } from 'react'
import "./AboutMe.css"
import Modal from '../components/Modal'
import Modal1 from '../components/Modal1';
import Modal2 from '../components/Modal2';
import Modal3 from '../components/Modal3';
import Modal4 from '../components/Modal4';
import Modal5 from '../components/Modal5';


function AboutMe() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);
    const [modalOpen5, setModalOpen5] = useState(false);
    return (
        <div className='hero-container'>
            <video src='/videos/back.mp4' autoPlay loop muted />
            <h1>About Me</h1>
            <img src="deskicon.jpg" alt="" className='ekran'/>
            <div className='it'>
                <div className='moreReact'>
                    <img src="React.jpg" alt="" className='react' id="hobby"
                    onClick={() => {
                        setModalOpen(true);
                      }}
                       />
                       {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    <h4>Learn more</h4>
                </div>
                <div className='morePython'>
                    <img src="python.png" alt="" className='python' id="hobby"
                    onClick={() => {
                        setModalOpen1(true);
                      }}
                       />
                       {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1} />}
                    <h4>Learn more</h4>
                </div>

                <div id="moreScrapp">
                    <img src="web.png" alt="" className='web' id="hobby"
                    onClick={() => {
                        setModalOpen2(true);
                      }}
                       />
                       {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} />}
                    <h4>Learn more</h4>
                </div>
            </div>

            <div className="other">
            <div className='moreFootball'>
                    <img src="football.jpg" alt="" className='football' id="hobby"
                    onClick={() => {
                        setModalOpen3(true);
                      }}
                       />
                       {modalOpen3 && <Modal3 setOpenModal3={setModalOpen3} />}
                    <h4>Learn more</h4>
                </div>
                <div className='moreTravel'>
                    <img src="travel.jpg" alt="" className='travel' id="hobby"
                    onClick={() => {
                        setModalOpen4(true);
                      }}
                       />
                       {modalOpen4 && <Modal4 setOpenModal4={setModalOpen4} />}
                    <h4>Learn more</h4>
                </div>

                <div id="moreCooking">
                    <img src="cooking.jpg" alt="" id='cooking' id="hobby"
                     onClick={() => {
                        setModalOpen5(true);
                      }}
                       />
                       {modalOpen5 && <Modal5 setOpenModal5={setModalOpen5} />}
                    <h4>Learn more</h4>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
