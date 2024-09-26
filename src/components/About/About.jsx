import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Style from './About.module.css'
export default function About() {

    const [counter, setCounter] = useState(0)
    useEffect(() => { }, [])
    return <>
        <div className="about my-14 w-full mx-auto text-slate-800">
            <h2 className='mb-14 text-5xl font-semibold'>About</h2>
            <div className="row flex justify-between mb-10">
                <div className="services w-[40%]">
                    <h3 className='mb-5 text-3xl font-semibold'>Services</h3>
                    <span>Sustainable Design</span><br />
                    <span>Hybrid Spaces</span><br />
                    <span>Renovation + Restoration</span><br />
                </div>
                <div className="clients w-[40%]">
                    <h3 className='mb-5 text-3xl font-semibold'>Clients</h3>
                    <span>Squarespace</span><br />
                    <span>Tock</span><br />
                    <span>Acuity Scheduling</span><br />
                </div>
            </div>
            <div className="row flex justify-between">
                <div className="locations w-[40%]">
                    <h3 className='mb-5 text-3xl font-semibold'>Locations</h3>
                    <span>Cairo</span><br />
                    <span>Gouna</span><br />
                    <span>Sahel</span><br />
                </div>
                <div className="recognition w-[40%]">
                    <h3 className='mb-5 text-3xl font-semibold'>Recognition</h3>
                    <span>Innovative Solutions</span><br />
                    <span>Architectural Advancements</span><br />
                    <span>Multidisciplinary Collaboration</span><br />
                </div>
            </div>
        </div>
    </>
}