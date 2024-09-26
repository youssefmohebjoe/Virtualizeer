import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Style from './Contact.module.css'
import { useFormik } from 'formik'

export default function Contact() {
    function handleContact(formValues) {
        console.log(formValues);
    }
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
        },
        onSubmit: handleContact,
    });
    const [counter, setCounter] = useState(0)
    useEffect(() => { }, [])
    return <>
        <div className='shadow-2xl w-[100%] py-5 mx-auto'>
            <div className='max-w-xl mx-auto my-8 mb-8 '>
                <h2 className='text-5xl font-semibold mb-6'>Let's build!</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="relative z-0 w-3/4 mx-auto md:w-full mb-5 group">
                        <input id='name' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer" placeholder=" " />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name:*</label>
                    </div>
                    <div className="relative z-0 w-3/4 mx-auto md:w-full mb-5 group">
                        <input id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email:*</label>
                    </div>
                    <div className="relative z-0 w-3/4 mx-auto md:w-full mb-5 group">
                        <input id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.phone} type="phone" name="phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer" placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone:*</label>
                    </div>
                    <div className="relative z-0 w-3/4 mx-auto md:w-full mb-5 group">
                        <input id='company' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.company} type="text" name="company" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer" placeholder=" " />
                        <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your company name:*</label>
                    </div>
                    <div className="relative z-0 w-3/4 mx-auto md:w-full mb-5 group">
                        <textarea id='message' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.message} type="textarea" name="message" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer" placeholder=" " ></textarea>
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter a message:*</label>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="text-white w-3/4 mx-auto md:w-full bg-slate-600 hover:bg-slate-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Send message</button>
                    </div>
                </form>
            </div>
        </div>

    </>
}