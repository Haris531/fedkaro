import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaReceipt } from "react-icons/fa6";
import Location from '../component/Location';
import { Link } from 'react-router-dom';

const RidertransactionDetail = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link to='/wallet' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Riders wallet</Link>
                    <Link to='/wallet-detail' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Rider wallet Details</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Rider Transaction Details</Link>
                </div>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center">
                <img className="h-[90px] w-[90px]" src="./profil.png" alt="" />
                <h1 className="text-[#444444] text-2xl font-medium opacity-[100%] pt-4 text-center">Name of Rider</h1>
            </div>
            <div>
                <Location />
            </div>
            <div className="mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">Rider ID</li>
                            <li className="pb-1">Contact No</li>
                            <li className="pb-1">Password</li>
                            <li className="pb-1">Address</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">Mr. Khan</li>
                            <li className="pb-1">0313 1234567</li>
                            <li className="pb-1">********</li>
                            <li className="pb-1">House 23, street 7 hayatabad</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-1">CNIC No</li>
                            <li className="pb-1">Email</li>
                            <li className="pb-1">Location</li>
                            <li className="pb-1">Date of joining</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-1">17301-1234567-1</li>
                            <li className="pb-1">abc@gmail.com</li>
                            <li className="pb-1">Peshawar</li>
                            <li className="pb-1">05/07/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[130px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-2">Transaction Request</li>
                            <li className="pb-2">Mean chosen</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-2">2000 FC</li>
                            <li className="pb-2">Easypaisa</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-2">Date</li>
                            <li className="pb-2">Account No</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-2">24/07/2023</li>
                            <li className="pb-2">12345678901</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-1">Transaction Done</li>
                            <li className="pb-1">Mean</li>
                            <li className="pb-1">Sender ID</li>
                            <li className="pb-1">Sender Account No</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-1 text-[#2DA157]">2000 FC</li>
                            <li className="pb-1">Easypaisa</li>
                            <li className="pb-1">FM-123</li>
                            <li className="pb-1">123456789</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#444444] font-bold opacity-[100%]">
                            <li className="pb-1">Transaction ID</li>
                            <li className="pb-1">Receiver Account No</li>
                            <li className="pb-1">Sender Name</li>
                            <li className="pb-1">Date</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#444444] font-medium">
                            <li className="pb-1">12345765321</li>
                            <li className="pb-1">12345678901</li>
                            <li className="pb-1">Ahmed</li>
                            <li className="pb-1">25/07/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-12 mb-12 w-[90%] h-[350px] flex flex-row justify-center items-center mx-auto ">
                <div
                    class="border border-1 border-[#546159] mr-6 rounded-lg w-[20%] h-[350px] flex flex-row justify-center items-center">
                    <FaReceipt />
                    <h1 class="text-[#000000] font-medium opacity-[100%] pl-4">Sender Receipt</h1>
                </div>
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[20%] h-[350px] flex flex-row justify-center items-center">
                    <FaReceipt />
                    <h1 class="text-[#000000] font-medium opacity-[100%] pl-4">Reciever Receipt</h1>
                </div>
            </div>

        </>
    )
}

export default RidertransactionDetail