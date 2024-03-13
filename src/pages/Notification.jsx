import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import FilterComponent from '../component/FilterComponent';
import { useState } from 'react';

const Notification = () => {
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
                        <FaGreaterThan size={15} className='mx-2' />Notifications</Link>
                </div>
                <div className='flex flex-row justify-around'>
                    <FilterComponent />
                    <GoPlusCircle size={30} className='text-[#FE5555]' />
                </div>
            </div>
            {rowData && rowData.map(() => (
                <div className="box bg-[#FFFFFF] h-[110px] mt-12 flex flex-row justify-between items-center rounded-lg mx-10 px-10">
                    <div className="date text-center">
                        <h1 className="text-[#000000] font-medium">Date</h1>
                        <h2>21/06/2030</h2>
                    </div>
                    <div className="paragraph text-[#000000] font-medium">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    </div>
                    <div className="icon">
                        <IoIosArrowDown size={30} className='text-[#546159]' />
                    </div>
                </div>
            ))
            }

        </>
    )
}

export default Notification