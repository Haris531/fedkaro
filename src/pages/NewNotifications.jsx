import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const NewNotifications = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link to='/notification' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Notifications</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />New Notification</Link>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-[50%] mt-12 mx-auto rounded-xl">
                <textarea name="" id="" cols="30" rows="10" className="w-[100%] px-4 py-4 text-[#000000] opacity-[70%] font-medium">
                    Write the notification text here
                </textarea>
            </div>

            <div className="mt-14 mb-16 flex justify-center">
                <button className="bg-[#2DA157] w-[20%] h-[45px] text-[#FFFFFF] text-xl font-medium rounded-full
                     ">Send</button>
            </div>
    </>
    )
}

export default NewNotifications