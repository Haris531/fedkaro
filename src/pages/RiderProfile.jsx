import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import Location from '../component/Location';

const RiderProfile = () => {
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Riders</Link>
                    <Link to='/register' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Registered Riders</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Rider Profile</Link>
                </div>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center">
                <img className="h-[90px] w-[90px]" src="./profil.png" alt="" />
                <h1 className="text-[#444444] text-2xl font-medium opacity-[100%] pt-4 text-center">Name of Rider</h1>
            </div>
            <div>
                <Location />
            </div>
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="box-left flex flex-row justify-between items-center w-[40%]">
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
                            <li className="pb-1">R-123</li>
                            <li className="pb-1">0313 1234567</li>
                            <li className="pb-1">********</li>
                            <li className="pb-1">House 23, street 7 hayatabad</li>
                        </ul>
                    </div>
                </div>
                <div className="box-right flex flex-row justify-between items-center w-[40%]">
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
            <div className="box mt-8 bg-[#FDFDFD] w-[90%] h-[180px] flex flex-row justify-between items-center mx-auto px-20 ">
                <div className="box-left flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-2">Orders completed</li>
                            <li className="pb-2">Canceled orders</li>
                            <li className="pb-2">Average daily deliveries</li>
                            <li className="pb-2">Average delivery time</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-2">35</li>
                            <li className="pb-2">05</li>
                            <li className="pb-2">28</li>
                            <li className="pb-2">30min</li>
                        </ul>
                    </div>
                </div>
                <div className="box-right flex flex-row justify-between items-center w-[40%]">
                    <div>
                        <ul className="text-[#000000] font-bold opacity-[100%]">
                            <li className="pb-2">Lifetime earnings</li>
                            <li className="pb-2">Lifetime Transactions</li>
                            <li className="pb-2">Pending earnings</li>
                            <li className="pb-2">Cleared earnings</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#000000] font-medium">
                            <li className="pb-2">150k</li>
                            <li className="pb-2">150k</li>
                            <li className="pb-2 text-[#FE5555] text-right">20k</li>
                            <li className="pb-2 text-[#2DA157] text-right">35k</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="cards mt-8 w-[90%] h-[170px] flex flex-row justify-between items-center mx-auto ">
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Icon awesome-id-card.svg" alt="" />
                    <h1 class="text-[#546159] font-medium opacity-[100%] pl-2">Front side of ID Card</h1>
                </div>
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Icon awesome-id-card.svg" alt="" />
                    <h1 class="text-[#546159] font-medium opacity-[100%] pl-2">Back side of ID Card</h1>
                </div>
                <div
                    class="border border-1 border-[#546159] rounded-lg w-[30%] h-[170px] flex flex-row justify-center items-center">
                    <img src="./Group 137.svg" alt="" />
                    <h1 class="text-[#546159] font-medium opacity-[100%] pl-2">Electricity/Gas Bill</h1>
                </div>
            </div>
            <h1 class="mt-16 text-[#444444] text-2xl font-medium opacity-[100%] text-center">Performance</h1>
            <div class=" mt-16 flex justify-center items-center">
                <img class="h-[100px]" src="./Group 117.svg" alt="" />
            </div>
            <div class="mt-16 flex justify-center items-center text-center mb-8">
                <h1 class="w-[35%] text-[#444444] text-sm font-medium">Your performance status depends on the numbers
                    of <br /> active affiliates. The criteria of active affiliate may vary in time</h1>
            </div>
        </>
    )
}

export default RiderProfile