import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const RidersOrderdetail = () => {
    return (
    <>
            <div className='flex flex-row justify-between mt-8 mx-10'>
                <div className='flex flex-row justify-center items-center'>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%]">Rider Dashboard</Link>
                    <Link className="mr-5 text-[#7179E0] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Live Status</Link>
                    <Link to='/move' className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[50%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Riders On The Move</Link>
                    <Link className="mr-5 text-[#4B53BC] text-xl font-medium opacity-[100%] flex flex-row items-center">
                        <FaGreaterThan size={15} className='mx-2' /> Riders Order details</Link>
                </div>
            </div>
            <h1 class="text-[#4B53BC] text-2xl font-medium mt-12 px-28">Order 1</h1>
            <div class="box w-[85%] h-[630px] mt-4 flex flex-row mx-auto">
                <div class="box-left w-[42%] flex flex-col">
                    <div class="box-top bg-[#FFFFFF] h-[40%] flex flex-row justify-around py-4">
                        <div class="left">
                            <ul class="text-[#000000] font-medium opacity-[100%]">
                                <li class="pb-1">Order No</li>
                                <li class="pb-1">Customer ID</li>
                                <li class="pb-1">Name of Customer</li>
                                <li class="pb-1">Address</li>
                                <li class="pb-1">Delivery Type</li>
                                <li class="pb-1">Payment Method</li>
                                <li class="pb-1">Coins Used</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="text-[#000000]">
                                <li class="pb-1">1234</li>
                                <li class="pb-1">CA-1234</li>
                                <li class="pb-1">Ibrahim Khan</li>
                                <li class="pb-1">Hayatabad</li>
                                <li class="pb-1">Quick</li>
                                <li class="pb-1">Easypaisa</li>
                                <li class="pb-1">100</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box-botm mt-4 bg-[#FFFFFF] h-[60%] flex flex-row justify-around py-6">
                        <div class="left">
                            <ul class="text-[#000000] font-medium opacity-[100%]">
                                <li class="pb-4">Payment Confirmation</li>
                                <li class="pb-4">Rider ID</li>
                                <li class="pb-4">Rider Name</li>
                                <li class="pb-4">Dispatch Time</li>
                                <li class="pb-4">Delivery Date</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="text-[#000000]">
                                <li class="pb-4">Done</li>
                                <li class="pb-4">R-123</li>
                                <li class="pb-4">Daniyal</li>
                                <li class="pb-4">10:45 am</li>
                                <li class="pb-4">26/05/2023</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="box-right ml-12 bg-[#FFFFFF] w-[54%] h-[100%] flex flex-col">
                    <div class="heading flex flex-col justify-center items-center text-center">
                        <h1 class="text-[#444444] text-2xl font-medium">Receipt</h1>
                        <h2 class="text-[#444444] text-xl font-medium">ORDER NO : 1234</h2>
                        <h3 class="text-[#444444] text-lg font-medium">23-03-2023</h3>
                        <h4 class="text-[#444444] text-sm font-medium">Contact no: 03121234567</h4>
                        <h4 class="text-[#444444] text-sm font-medium">Address : House 23, street 5, Sector 7, <br/>
                            phase 7 Hayatabad</h4>
                    </div>
                    <hr class="mt-4 mx-8"/>
                        <div class="items-price flex flex-row justify-between px-10 py-4">
                            <div class="left">
                                <ul>
                                    <li class="text-[#444444] font-medium opacity-[100%] pb-2">ITEM</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                    <li class="text-[#444444]">Product 1</li>
                                </ul>
                            </div>
                            <div class="right">
                                <ul>
                                    <li class="text-[#444444] font-medium opacity-[100%] pb-2">PRICE</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                    <li class="text-[#444444]">Rs. 200</li>
                                </ul>
                            </div>
                        </div>
                        <hr class="mx-8"/>
                            <div class="total-Rs flex flex-row justify-between px-10 py-4">
                                <div class="left">
                                    <ul>
                                        <li class="text-[#444444] font-medium">Total</li>
                                        <li class="text-[#444444] font-medium">Coins used</li>
                                        <li class="text-[#444444] font-medium">Delivery</li>
                                        <li class="text-[#444444] font-bold opacity-[100%] pt-2">Grand Total</li>
                                    </ul>
                                </div>
                                <div class="right">
                                    <ul>
                                        <li class="text-[#444444] font-medium">Rs. 2010</li>
                                        <li class="text-[#FE5555] font-medium text-right">10</li>
                                        <li class="text-[#444444] font-medium">Rs. 50</li>
                                        <li class="text-[#444444] font-bold opacity-[100%] pt-2">Rs. 2050</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mx-auto text-center mt-4">
                                <h1 class="text-sm font-medium text-[#707070]">Payment method : Cash on delivery</h1>
                                <h1 class="text-lg font-medium text-[#707070]">Logo</h1>
                            </div>
                        </div>
                </div>

                <h1 class="text-[#4B53BC] text-2xl font-medium mt-12 px-28">Order 2</h1>
                <div class="box w-[85%] h-[630px] mt-4 flex flex-row mx-auto">
                    <div class="box-left w-[42%] flex flex-col">
                        <div class="box-top bg-[#FFFFFF] h-[40%] flex flex-row justify-around py-4">
                            <div class="left">
                                <ul class="text-[#000000] font-medium opacity-[100%]">
                                    <li class="pb-1">Order No</li>
                                    <li class="pb-1">Customer ID</li>
                                    <li class="pb-1">Name of Customer</li>
                                    <li class="pb-1">Address</li>
                                    <li class="pb-1">Delivery Type</li>
                                    <li class="pb-1">Payment Method</li>
                                    <li class="pb-1">Coins Used</li>
                                </ul>
                            </div>
                            <div class="right">
                                <ul class="text-[#000000]">
                                    <li class="pb-1">1234</li>
                                    <li class="pb-1">CA-1234</li>
                                    <li class="pb-1">Ibrahim Khan</li>
                                    <li class="pb-1">Hayatabad</li>
                                    <li class="pb-1">Quick</li>
                                    <li class="pb-1">Easypaisa</li>
                                    <li class="pb-1">100</li>
                                </ul>
                            </div>
                        </div>
                        <div class="box-botm mt-4 bg-[#FFFFFF] h-[60%] flex flex-row justify-around py-6">
                            <div class="left">
                                <ul class="text-[#000000] font-medium opacity-[100%]">
                                    <li class="pb-4">Payment Confirmation</li>
                                    <li class="pb-4">Rider ID</li>
                                    <li class="pb-4">Rider Name</li>
                                    <li class="pb-4">Dispatch Time</li>
                                    <li class="pb-4">Delivery Date</li>
                                </ul>
                            </div>
                            <div class="right">
                                <ul class="text-[#000000]">
                                    <li class="pb-4">Done</li>
                                    <li class="pb-4">R-123</li>
                                    <li class="pb-4">Daniyal</li>
                                    <li class="pb-4">10:45 am</li>
                                    <li class="pb-4">26/05/2023</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="box-right ml-12 bg-[#FFFFFF] w-[54%] h-[100%] flex flex-col">
                        <div class="heading flex flex-col justify-center items-center text-center">
                            <h1 class="text-[#444444] text-2xl font-medium">Receipt</h1>
                            <h2 class="text-[#444444] text-xl font-medium">ORDER NO : 1234</h2>
                            <h3 class="text-[#444444] text-lg font-medium">23-03-2023</h3>
                            <h4 class="text-[#444444] text-sm font-medium">Contact no: 03121234567</h4>
                            <h4 class="text-[#444444] text-sm font-medium">Address : House 23, street 5, Sector 7, <br/>
                                phase 7 Hayatabad</h4>
                        </div>
                        <hr class="mt-4 mx-8"/>
                            <div class="items-price flex flex-row justify-between px-10 py-4">
                                <div class="left">
                                    <ul>
                                        <li class="text-[#444444] font-medium opacity-[100%] pb-2">ITEM</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                        <li class="text-[#444444]">Product 1</li>
                                    </ul>
                                </div>
                                <div class="right">
                                    <ul>
                                        <li class="text-[#444444] font-medium opacity-[100%] pb-2">PRICE</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                        <li class="text-[#444444]">Rs. 200</li>
                                    </ul>
                                </div>
                            </div>
                            <hr class="mx-8"/>
                                <div class="total-Rs flex flex-row justify-between px-10 py-4">
                                    <div class="left">
                                        <ul>
                                            <li class="text-[#444444] font-medium">Total</li>
                                            <li class="text-[#444444] font-medium">Coins used</li>
                                            <li class="text-[#444444] font-medium">Delivery</li>
                                            <li class="text-[#444444] font-bold opacity-[100%] pt-2">Grand Total</li>
                                        </ul>
                                    </div>
                                    <div class="right">
                                        <ul>
                                            <li class="text-[#444444] font-medium">Rs. 2010</li>
                                            <li class="text-[#FE5555] font-medium text-right">10</li>
                                            <li class="text-[#444444] font-medium">Rs. 50</li>
                                            <li class="text-[#444444] font-bold opacity-[100%] pt-2">Rs. 2050</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mx-auto text-center mt-4">
                                    <h1 class="text-sm font-medium text-[#707070]">Payment method : Cash on delivery</h1>
                                    <h1 class="text-lg font-medium text-[#707070]">Logo</h1>
                                </div>
                            </div>
                    </div>
                </>
                )
}

                export default RidersOrderdetail
