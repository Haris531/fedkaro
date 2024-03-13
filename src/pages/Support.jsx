import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Support = () => {
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
                        <FaGreaterThan size={15} className='mx-2' />Support</Link>
                </div>
            </div>
            {rowData && rowData.map(() => (
                <div class="box bg-[#FFFFFF] w-[90%] h-[105px] mt-12 flex flex-row justify-between items-center mx-auto rounded-xl px-6">
                    <div class="img-part w-[15%]">
                        <img class="w-[70px] h-[70px]" src="./profil.png" alt="" />
                    </div>
                    <div class="flex flex-row justify-between w-[90%]">
                        <ul>
                            <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider ID</li>
                            <li class="flex justify-center">C1234</li>
                        </ul>
                        <ul>
                            <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider Name</li>
                            <li class="flex justify-center">Mr. Khan</li>
                        </ul>
                        <ul>
                            <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Status</li>
                            <li class="flex justify-center text-[#2DA157]">Active</li>
                        </ul>
                
                        <ul>
                            <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Chat</li>
                            <button class="text-sm bg-[#7179E0] w-[123px] h-[30px] text-[#F8F8F8] rounded-lg
                   ">Open</button>
                        </ul>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default Support