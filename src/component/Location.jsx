import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Location = () => {
    const [showDropdown, setShowDropdown] = useState('hidden')
    const [showLocation, setShowLocation] = useState('flex')
    const handleChange = () =>{
        setShowDropdown('hidden')
        setShowLocation('')
        
      }
  return (
   <>
   <div className='flex justify-end mx-16'>
                <div>
                    <h4 className={`${showLocation} text-xl text-[#8C8C8C] flex flex-row justify-around items-center cursor-pointer rounded-full gap-8 px-4 shadow-2xl border-[1px] border-[#8C8C8C] bg-[#F8F8F8]`} onClick={(() => setShowDropdown(''))}>Dedicated to Location<IoIosArrowDown size={25} /></h4>
                </div>
                <div className={`${showDropdown} absolute bg-white p-2 w-64 space-y-2 transition ease-in-out duration-1000`}>
                    <h1 className='text-xl font-medium text-[#8C8C8C] cursor-pointer' onClick={handleChange}>Hayatabad</h1>
                    <h1 className='text-xl font-medium text-[#8C8C8C] cursor-pointer' onClick={handleChange}>Tahkal</h1>
                    <h1 className='text-xl font-medium text-[#8C8C8C] cursor-pointer' onClick={handleChange}>Tahkal</h1>
                    <h1 className='text-xl font-medium text-[#8C8C8C] cursor-pointer' onClick={handleChange}>Tahkal</h1>
                </div>
            </div>
   </>
  )
}

export default Location