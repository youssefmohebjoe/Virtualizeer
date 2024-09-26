import React from 'react'
import Style from './Home.module.css'
import Home1 from "../../assets/images/Villa 1.jpg";
import ProjectSliderMobile from '../ProjectSliderMobile/ProjectSliderMobile';
import ProjectSliderLaptop from '../ProjectSliderLaptop/ProjectSliderLaptop';
import Services from '../Services/Services';
// import Contact from '../Contact/Contact';
import About from '../About/About';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import Podio from '../Podio/Podio';


export default function Home() {

    return <>

        <div className="section1">
            <div className="image">
                <img className='mx-auto relative' src={Home1} alt='Villa photo' />
                <h3 className='absolute top-[10%] left-[8%] text-sm md:top-[25%] md:left-[10%] md:text-4xl text-white font-bold '>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'A contemporary way to showcase your NURSERY',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'A contemporary way to showcase your FURNITURE SHOWROOM',
                            1000,
                            'A contemporary way to showcase your VILLA',
                            1000,
                            'A contemporary way to showcase your APARTMENT',
                            1000,
                            'A contemporary way to showcase your SPACE',
                            1000,
                            'A contemporary way to showcase your RESTAURANT',
                            1000,
                            'A contemporary way to showcase your BOUTIQUE',
                            1000,
                            'A contemporary way to showcase your EVENT',
                            1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h3>
            </div>
            <div className="container">
                <div>
                    <p className='mt-10 text-center text-pretty md:text-4xl md:w-full md:text-balance md:text-center text-slate-800'><span>At Virtualizeer,</span><br />
                        We are passionate about creating immersive and unforgettable experiences for luxury real estate, resorts, and high-end commercial spaces. Our expert team delivers stunning 360° virtual tours to help clients and parents explore every detail of the finest Nurseries in Egypt. </p>
                </div>
            </div>
        </div>

        <div className="Projects-Mobile lg:hidden">
            <div className="container shadow-2xl w-[90%] mx-auto p-8">
                <h2 className='mt-8 font-semibold text-5xl font-sans'>Projects</h2>
                <div className='md:w-[40%] md:mx-auto md:h-[40%]'>
                    <ProjectSliderMobile />

                </div>
            </div>
        </div>

        <div className="Projects-Laptop max-md:hidden">
            <div className="container shadow-2xl w-[90%] mx-auto p-8">
                <h2 className='mt-8 font-semibold text-5xl font-sans'>Projects</h2>
                <div className=''>
                    <ProjectSliderLaptop />

                </div>
            </div>
        </div>
        
        <div className="Services">
            <div className="container shadow-2xl w-[90%] mx-auto p-8">
                <h2 className='mt-8 font-semibold text-5xl font-sans'>Services</h2>
                <Services />
            </div>
        </div>

        <div className="about&contact container w-full md:flex md:justify-between">
            <div className="about md:w-[40%]">
                <About />
            </div>
            <div className="podio md:w-[55%]">
                {/* <Contact /> */}
                <Podio />
            </div>
        </div>

    </>
}