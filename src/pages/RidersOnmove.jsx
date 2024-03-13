import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FilterComponent from '../component/FilterComponent';
import { useState } from 'react';

const RidersOnmove = () => {
    const [rowData , setrowData ] = useState()
    const fetchData = async() => {
     const data =await  fetch("./data.json")
      const wholeData = await data.json();  //here we converted data into json
      setrowData(wholeData)
    }
  
    fetchData();
    return (
        <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Live Status</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Riders On The Move</Link>
                </div>
                <div>
                    <FilterComponent />
                </div>
            </div>

         {
            rowData && rowData.map(()=>(
                <div class="bg-[#FFFFFF] w-[90%] h-[100px] mt-12 flex flex-row justify-between items-center mx-auto rounded-xl px-10">
                <div className="w-[10%]">
                    <img className="w-[80px] h-[80px]" src="./profil.png" alt="" />
                </div>
                <div class="flex flex-row justify-between w-[90%]">
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider ID</li>
                        <li class="flex justify-center">R-1234</li>
                    </ul>
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Rider Name</li>
                        <li class="flex justify-center">Mr. Khan</li>
                    </ul>
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">No Of orders</li>
                        <li class="flex justify-center">2</li>
                    </ul>
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Order No</li>
                        <li class="flex justify-center">OR-123, OR-128</li>
                    </ul>
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Destination</li>
                        <li class="flex justify-center">FZ-01</li>
                    </ul>
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Dispatch Time</li>
                        <li class=" text-[#2DA157] flex justify-center">10:35 am</li>
                    </ul>
                    <ul>
                        <li class="text-[#000000] font-medium opacity-[100%] flex justify-center mb-2">Detail</li>
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

export default RidersOnmove