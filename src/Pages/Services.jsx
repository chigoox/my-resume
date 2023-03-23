
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import laptop from '../assets/laptop.png'


function Services() {

    return (
        <div className='bg-black h-full overflow-x -hidden w-full relative overflow-y-scroll'>

            <div className='z-[1] w-full  h-3/4 flex-shrink-0  justify-center flex  relative'>
                <div className='mt-24 flex-shrink-0  h-[90%] gap-12 md:gap-20 z-10 hover:gap-1  trans-slow w-[90%] md:w-[60%] grid grid-cols-2 grid-rows-2'>
                    <a href='#apps' className='bg-black rounded trans-slow hover:rounded-xl group relative overflow-hidden'>
                        <h1 className='text-white font-bold absolute z-[1] text-5xl  flex justify-center items-center hover:scale-105 bg-black bg-opacity-20  hover:bg-opacity-60 trans-slow  w-full h-full m-auto'>Apps</h1>
                        <img className='w-full h-full trans-slow absolute object-cover group-hover:scale-125 ' src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?w=1800&t=st=1679546110~exp=1679546710~hmac=a051eeb9ccdef368cc393cca47d8e55ce3ef4e82bddc8ff0240ed917cd65ed1d" alt="" />

                    </a>
                    <a href='#website' className=' rounded trans-slow hover:rounded-xl group relative overflow-hidden'>
                        <h1 className='text-white font-bold absolute z-[1] text-3xl md:text-5xl  flex justify-center items-center hover:scale-105 bg-black bg-opacity-20  hover:bg-opacity-60 trans-slow  w-full h-full m-auto'>Websites</h1>
                        <img className='w-full trans-slow h-full absolute group-hover:scale-125 object-cover ' src="https://img.freepik.com/free-psd/hiking-concept-web-template_23-2148467097.jpg?w=1800&t=st=1679546186~exp=1679546786~hmac=8fb994747303f06ee3b100baa1076eccf493de59724aee0aa951ad8d4dee5023" alt="" />

                    </a>
                    <a href='#real' className='bg-black rounded trans-slow hover:rounded-xl group relative overflow-hidden'>
                        <h1 className='text-white font-bold absolute z-[1] text-center text-4xl md:text-5xl  flex justify-center items-center hover:scale-105 bg-black bg-opacity-20  hover:bg-opacity-60 trans-slow  w-full h-full m-auto'>Real Estate</h1>
                        <img className='w-full trans-slow h-full absolute group-hover:scale-125 object-cover ' src="https://droidoo.com/wp-content/uploads/2019/08/Where-Will-AI-Take-the-Real-Estate-Market-in-10-Years-825x500.jpg" alt="" />

                    </a>
                    <a href='#games' className='bg-black rounded trans-slow hover:rounded-xl group relative overflow-hidden'>
                        <h1 className='text-white font-bold absolute z-[1] text-4xl md:text-5xl  flex justify-center items-center  bg-black bg-opacity-20 hover:scale-105  hover:bg-opacity-60 trans-slow  w-full h-full m-auto'>Games</h1>
                        <img className='w-full trans-slow h-full absolute group-hover:scale-125 object-cover ' src="https://images.squarespace-cdn.com/content/v1/50bc7918e4b012760ae18af1/1572281546515-NR6HN530QAYNHUFHM0UP/mobile-game-development-bangladesh.jpeg?format=2500w" alt="" />

                    </a>
                </div>
            </div>






            <div className='h-96'></div>





            <div id={'apps'} className='md:gap-2 gap-4 z-10 relative flex flex-wrap md:grid md:grid-cols-4 text-white grid-rows-4 md:grid-rows-2 m-auto w-[90%] md:h-[30rem]'>

                <div className='row-span-full md:col-span-2 p-4 rounded-3xl relative bg-black-800'>
                    <div className='z-[10] relative'>
                        <h1 className='font-bold text-4xl'>Building Incredible Apps</h1>
                        <h1 className='font-bold mx-4 text-lg'>At a price right for you</h1>
                    </div>
                    <br />
                    <div className='p-4'>
                        <li className='trans hover:scale-125 w-fit'>Starting at $500</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Modern</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Secure</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Reliable</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Professional</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Right for your business</li>

                    </div>


                    <img className='w-1/2 trans-slow h-1/2 bottom-0 -right-10 md:-right-10 absolute object-cover ' src="https://kitrum.com/wp-content/uploads/2020/05/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-1-1.png" alt="" />
                </div>
                <div className='bg-rose-500 center gap-2 md:col-span-2 p-2 rounded-3xl'>
                    <div className='center flex-col w-1/2 text-sm md:text-base'>
                        <h1>Price for a basic App</h1>
                        <h1 className='text-5xl md:text-8xl'>$500</h1>
                    </div>
                    <div className='felx flex-col text-sm md:text-base'>
                        <li className='text-sm'>Data Managment $100-$350</li>
                        <li>Payment Processing $350</li>
                        <li>Location services $150</li>
                        <li>Authentication $100</li>
                        <li>Booking $100</li>

                    </div>
                </div>
                <div className='bg-white rounded-3xl w-full'>
                    <div className='p-4  text-black relative overflow-hidden'>
                        <div className="relative z-10">
                            <h1 className='font-bold  text-xl'>Tech used to build Apps</h1>

                            <li>React</li>
                            <li>Firebase</li>
                            <li>Tailwind CSS</li>
                            <li>Redux</li>
                            <li>Other APIs and libraries</li>
                        </div>

                        <img className='w-full trans-slow rounded-3xl bottom-0 top-0 left-0 h-96 absolute group-hover:scale-125 object-cover ' src="https://img.freepik.com/free-photo/businessman-pointing-his-presentation-futuristic-digital-screen_53876-102617.jpg?w=1800&t=st=1679573154~exp=1679573754~hmac=242d835ded67877e4f8c2e52d6a71c67b7d749fcf943e09241549b6ac4842d28" alt="" />
                    </div>
                </div>
                <div className='bg-white span rounded-3xl w-full p-4 relative overflow-hidden'>
                    <h1 className='text-lg bg-opacity-10  bg-black text-white z-[1] relative h-full w-full flex items-end '>Same technologies that poweres most of your favorite websites and apps such as Instagram, Netflix, Lyft, Shopify, and more</h1>
                    <img className='w-full trans-slow top-0 left-0 h-full absolute group-hover:scale-125 object-cover ' src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1800&t=st=1679572892~exp=1679573492~hmac=8d5cc2f9ba1c21e900ea0a72d2dffe713ffc0ad580a372aacfa4d3465e936891" alt="" />
                </div>
            </div>







            <div className='h-96 text-white m-auto w-full flex justify-center items-center text-6xl'><AiOutlineArrowUp />GET BOTH FOR $750 + ADDONS <AiOutlineArrowDown /></div>









            <div id={'website'} className='md:gap-2 gap-4 z-10 relative flex flex-wrap md:grid md:grid-cols-4 text-white grid-rows-4 md:grid-rows-2 m-auto w-[90%] md:h-[30rem]'>

                <div className='row-span-full md:col-span-2 p-4 rounded-3xl relative bg-black-800'>
                    <div className='z-[10] relative'>
                        <h1 className='font-bold text-4xl'>Websites at an affordable Price</h1>
                        <h1 className='font-bold mx-4 text-lg'>Your wallet will thank you.</h1>
                    </div>
                    <br />
                    <div className='p-4'>
                        <li className='trans hover:scale-125 w-fit'>Starting at $300</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Modern</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Responsive</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Secure</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Reliable</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Professional</li>
                        <li className='trans font-bold hover:scale-125 w-fit'>Right for your business</li>

                        <h1 className='text-lg bg-opacity-10  bg-black text-white z-[1] relative h-full w-full flex items-end '>Powered by the same technologies that poweres most of your favorite websites and apps such as Instagram, Netflix, Lyft, Shopify, and more</h1>

                    </div>


                    <img className='w-1/2 trans-slow h-1/2 bottom-0 -right-8 md:-right-40 absolute object-cover ' src={laptop} alt="" />
                </div>
                <div className='bg-rose-500 center gap-2 md:col-span-2 md:row-span-full p-2 rounded-3xl'>
                    <div className='center flex-col w-1/2 text-sm md:text-base'>
                        <h1>Price for a basic Website</h1>
                        <h1 className='text-5xl md:text-8xl'>$300</h1>
                    </div>
                    <div className='felx flex-col text-sm md:text-base'>
                        <li className='text-sm'>Data Managment $100-$350</li>
                        <li>Payment Processing $350</li>
                        <li>Location services $150</li>
                        <li>Authentication $100</li>
                        <li>Booking $100</li>



                    </div>
                </div>

            </div>



            <img className='w-full h-full absolute object-cover top-0 ' src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80" alt="" />
        </div>
    )
}

export default Services