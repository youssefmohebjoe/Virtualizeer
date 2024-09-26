import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import FloorPlan from '../../assets/images/Floor Plan.png'
// import GoogleStreetView from '../../assets/images/Google Street View.png'
// import ImmersiveWalkthrough from '../../assets/images/Immersive Walkthrough.png'
// import InteractiveTags from '../../assets/images/Interactive Tags.png'
// import VRCompatibility from '../../assets/images/VR Compatibility.png'
import FloorPlan from '../../assets/images/Floor PlanW.png'
import GoogleStreetView from '../../assets/images/Google Street ViewW.png'
import ImmersiveWalkthrough from '../../assets/images/Immersive WalkthroughW.png'
import InteractiveTags from '../../assets/images/Interactive TagsW.png'
import VRCompatibility from '../../assets/images/VR CompatibilityW.png'

export default function App() {
    return (
        <>
            <div className="block gap-4 md:flex">
                <div className="max-w-sm p-6 my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className='w-1/4 mb-3' src={ImmersiveWalkthrough} alt="Immersive Walkthrough" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Immersive walkthrough </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We provide people with freedom to experience any place, at any time. experience a venue form it's heart at the comfort of your couch.</p>
                </div>
                <div className="max-w-sm p-6 my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className='w-1/4 mb-3' src={GoogleStreetView} alt="Google Street View" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Google Street View</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Enhance the visibility on Google maps and make your business stand out</p>
                </div>
                <div className="max-w-sm p-6 my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className='w-1/4 mb-3' src={FloorPlan} alt="Floor Plan" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Floor Plan  </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get a clear and detailed overview of your space with our interactive floor plans. Perfect for helping customers visualize layout, flow, and room dimensions.</p>
                </div>
                <div className="max-w-sm p-6 my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className='w-1/4 mb-3' src={InteractiveTags} alt="Interactive Tags" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Interactive Tags</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Enhance your virtual tour with interactive tags. Highlight key features, add descriptions, and engage visitors with videos or links for a deeper experience.</p>
                </div>
                <div className="max-w-sm p-6 my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className='w-1/4 mb-3' src={VRCompatibility} alt="VR Compatibility" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VR Compatibility</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Immerse your audience in a fully interactive 3D experience with VR compatibility, allowing them to explore your space as if they were truly there.</p>
                </div>
            </div>
        </>
    );
}
