import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NewFaq = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link to='/faq-list' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />All FAQ's List</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Add New FAQ</Link>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-[60%] mt-12 mx-auto rounded-xl">
                <textarea name="" id="" cols="2" rows="2" className="w-[100%] outline-none px-4 py-6 text-[#000000] opacity-[70%] font-medium">
                    Add your question here</textarea>
            </div>
            <div className="bg-[#FFFFFF] w-[60%] mt-12 mx-auto rounded-xl">
                <textarea name="" id="" cols="30" rows="10" className="w-[100%] outline-none px-4 py-6 text-[#000000] opacity-[70%] font-medium">
                    Answer your question here</textarea>
            </div>
            <div className="mt-16 mb-16 flex justify-center">
                <button className="bg-[#546159] w-[20%] h-[45px] text-[#FFFFFF] text-xl font-medium rounded-full
                         ">Added</button>
            </div>
        </>
    )
}

export default NewFaq