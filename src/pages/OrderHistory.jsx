import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../component/FilterComponent';
import { useState } from 'react';

const OrderHistory = () => {
    const [rowData, setrowData] = useState()
    const fetchData = async () => {
        const data = await fetch("./data.json")
        const wholeData = await data.json();
        setrowData(wholeData)
    }
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' />Order History</Link>
                </div>
                <div>
                    <FilterComponent />
                </div>
            </div>
            {rowData && rowData.map(() => (
                <div className="bg-[#FDFDFDAD] w-[100%] h-[105px] mt-12 flex flex-row justify-between items-center mx-auto rounded-xl px-16">
                    <div className="flex flex-row justify-between w-[100%]">
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Order No</li>
                            <li className="flex justify-center bg-[#FFFFFF] h-[25px] w-[70px] border-[0.5px] border-[#707070]">1234</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider ID</li>
                            <li className="flex justify-center">R-123</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider Name</li>
                            <li className="flex justify-center">Ibrahim Khan</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Date of Delivery</li>
                            <li className="flex justify-center">25/05/2023</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Delivery Time</li>
                            <li className="flex justify-center">40 min</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Orders Onboard</li>
                            <li className="flex justify-center">2</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Earnings</li>
                            <li className="flex justify-center">120</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Delivery Status</li>
                            <li className=" text-[#2DA157] flex justify-center">Successful</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">More Details</li>
                            <button className="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
                   ">Open</button>
                        </ul>
                    </div>
                </div>
            ))
            }

        </>
    )
}

export default OrderHistory