import { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const FilterComponent = () => {
    const [showDropdown, setShowDropdown] = useState('hidden')
    const [showSearch, setShowSearch] = useState('hidden')
    const [showFilter, setShowFilter] = useState('flex')
    const handleChange = () =>{
        setShowDropdown('hidden')
        setShowFilter('hidden')
        setShowSearch('flex')
        
      }
    return (
        <>
            <div className='flex gap-14 me-20'>
                <div className='flex items-center pl-2 pe-6'>
                    <h4 className={`${showFilter} text-xl text-[#8C8C8C]  items-center gap-4  shadow-2xl border-[1px] border-[#8C8C8C] bg-white pe-6 `} onClick={(() => setShowDropdown(''))}><CiFilter size={30} /> Filter</h4>
                    <div className={`${showSearch} items-center bg-white  relative left-32 z-0 text-xl text-[#8C8C8C] h-12  shadow-2xl space-x-6 pl-2 transition ease-in-out duration-1000`}>
                        <i><IoSearchOutline size={30} /></i><input className="outline-none" placeholder='Search' />
                    </div>
                </div>
                {/* dropdown onlick */}
                <div className={`${showDropdown} absolute bg-white p-2 w-64 space-y-2 transition ease-in-out duration-1000`}>
                    <h1 className='text-2xl font-medium text-[#8C8C8C] hover:text-green-400 cursor-pointer' onClick={handleChange}>Customer ID</h1>
                    <h1 className='text-2xl font-medium text-[#8C8C8C] hover:text-green-400 cursor-pointer' onClick={handleChange}>Name</h1>
                    <h1 className='text-2xl font-medium text-[#8C8C8C] hover:text-green-400 cursor-pointer' onClick={handleChange}>Contact No</h1>
                    <h1 className='text-2xl font-medium text-[#8C8C8C] hover:text-green-400 cursor-pointer' onClick={handleChange}>Email</h1>
                    <h1 className='text-2xl font-medium text-[#8C8C8C] hover:text-green-400 cursor-pointer' onClick={handleChange}>Location</h1>
                </div>
                <div>
                    {/* <FiPlusCircle size={38} className='text-red-600 relative z-10 ' /> */}
                </div>
            </div>
        </>
    )
}

export default FilterComponent