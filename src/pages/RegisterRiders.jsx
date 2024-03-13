import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../component/FilterComponent';
import { useState } from 'react';

const RegisterRiders = () => {
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
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Riders</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Registered Riders</Link>
                </div>
                <div>
                    <FilterComponent />
                </div>
            </div>
            {rowData && rowData.map(() => (
                <div className="box bg-[#FFFFFF] w-[90%] h-[105px] mt-12 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                    <div className="img-part w-[10%]">
                        <img className="w-[80px] h-[80px]" src="./profil.png" alt="" />
                    </div>
                    <div className="flex flex-row justify-between w-[90%]">
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider ID</li>
                            <li className="flex justify-center">R-1234</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider Name</li>
                            <li className="flex justify-center">Mr. Khan</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">CNIC No</li>
                            <li className="flex justify-center">17301-1234567-1</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Contact No</li>
                            <li className="flex justify-center">0313 1234567</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Orders Completed</li>
                            <li className="flex justify-center">147</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Coins wallet</li>
                            <li className=" text-[#2DA157] flex justify-center">2000 FC</li>
                        </ul>
                        <ul>
                            <li className="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Detail</li>
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

export default RegisterRiders