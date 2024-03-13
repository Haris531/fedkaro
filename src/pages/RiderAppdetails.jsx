import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const RiderAppdetails = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Riders</Link>
                    <Link to='/applications' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> New Applications</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Rider Application Details</Link>
                </div>
            </div>
            <div className="box mt-12 bg-[#FDFDFD] w-[90%] h-[190px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="box-left flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-2">Rider Name</li>
                            <li className="pb-2">Contact No</li>
                            <li className="pb-2">Password</li>
                            <li className="pb-2">Address</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-2">Mr. Khan</li>
                            <li className="pb-2">0313 1234567</li>
                            <li className="pb-2">********</li>
                            <li className="pb-2">House 23, street 7 hayatabad</li>
                        </ul>
                    </div>
                </div>
                <div className="box-right flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-2">CNIC No</li>
                            <li className="pb-2">Email</li>
                            <li className="pb-2">Location</li>
                            <li className="pb-2">Date of application</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-2">17301-1234567-1</li>
                            <li className="pb-2">abc@gmail.com</li>
                            <li className="pb-2">Peshawar</li>
                            <li className="pb-2">05/07/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cards mt-8 w-[90%] h-[170px] flex flex-row justify-between items-center mx-auto ">
                <div
                    className="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Icon awesome-id-card.svg" alt="" />
                    <h1 className="text-[#546159] font-medium opacity-[100%] pl-2">Front side of ID Card</h1>
                </div>
                <div
                    className="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Icon awesome-id-card.svg" alt="" />
                    <h1 className="text-[#546159] font-medium opacity-[100%] pl-2">Back side of ID Card</h1>
                </div>
                <div
                    className="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Group 137.svg" alt="" />
                    <h1 className="text-[#546159] font-medium opacity-[100%] pl-2">Electricity/Gas Bill</h1>
                </div>
            </div>
            <div className="mt-12 w-[90%] h-[160px] bg-[#FFFFFF] mx-auto">
                <textarea className="w-[100%] h-[160px] px-6 py-6 text-[#000000] text-lg font-medium 
          opacity-[67%]">Write interview invitation text here</textarea>
            </div>
            <div className="mt-12 bg-[#7179E0] w-[25%] h-[55px] flex justify-center items-center mx-auto rounded-full ">
                <button className="text-[#FFFFFF] text-2xl font-medium opacity-[100%]">Invite</button>
            </div>
            <div className="mt-12 mb-8 bg-[#2DA157] w-[25%] h-[55px] flex justify-center items-center mx-auto rounded-full ">
                <button className="text-[#FFFFFF] text-2xl font-medium opacity-[100%]">Confirm Rider</button>
            </div>
        </>
    )
}

export default RiderAppdetails