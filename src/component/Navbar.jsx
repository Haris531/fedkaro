import React from 'react'

const Navbar = () => {
  return (
    <header class="text-[#FFFFFF]  body-font bg-[#555DC5] h-[100px] flex justify-between">
        <span class="flex items-center text-[#FFFFFF] font-bold text-3xl mb-4 md:mb-0 ml-5">
            Feed<span class="font-medium">Kro</span></span>
        <nav class="md:ml-4 md:py-1 md:pl-4 mr-5 text-sm flex 
                items-center">
            <a class="mr-5 hover:underline cursor-default">Orders</a>
            <a class="mr-5 hover:underline cursor-default">Customer</a>
            <a class="mr-5 hover:underline cursor-default">Riders Dashboard</a>
            <a class="mr-5 hover:underline cursor-default">Partner</a>
            <a class="mr-5 hover:underline cursor-default">Vendor</a>
            <a class="mr-5 hover:underline cursor-default">Management</a>
        </nav>
    </header>
  )
}

export default Navbar