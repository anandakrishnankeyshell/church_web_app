
import "./Home.css";

import React, { useState } from 'react';
import Homeabout from "./Homeabout";
import bgimgpng from "./image/bgimgpng.png"
import Homepgservice from "./Homepgservice";


const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX / 30,
            y: event.clientY / 30
        });
    };

    return (
        <>
            <div className="bgclor">
                <div className="grid-background">
                    <div
                        className="container "
                        onMouseMove={handleMouseMove} >
                        <div
                            className="text"
                            style={{
                                transform: `translate(-${position.x}px, -${position.y}px)`
                            }}
                        >
                            <div className="container-fluid pt-10">
                                <div className="grid  md:grid-cols-2">
                                    <div className="p-5 lg:text-center">
                                        <p data-aos="fade-right" style={{ color: "white", fontSize: "4rem", fontWeight:"bold", fontFamily:"Playfair Display" }}
                                        >Holy Family Church,<br /> <span
                                            style={{ fontFamily:'Quicksand, sans-serif',fontSize: "3rem" }}
                                        >Kiliyarkandam</span></p>
                                    </div>
                                    <div data-aos="fade-left"  >
                                        <img 
                                        className="max-h-full object-contain"
                                        src={bgimgpng} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <Homeabout/>
            </section>
            <section>
                <Homepgservice/>
            </section>

        </>
    );
};

export default Home;
