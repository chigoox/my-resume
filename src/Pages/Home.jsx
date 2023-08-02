
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'
import MenuButton from '../componets/MenuButton'
import MYPIC from '../assets/MYPIC.jpg'


function Home() {

    return (
        <div className='bg-black  w-full relative flex-col felx'>
            <div className="flex justify-center items-center gap-2">
                <div className='w-60 md:w-96 p-8 gap-4 no-scrollbar center flex-col  h-96 overflow-y-scroll md:overflow-hidden md:p-4  text-white'>
                    <h1 className='hover:scale-10 text-center hover:first-letter:bg-rose-500 trans-slow text-2xl md:text-normal first-letter:text-4xl'>
                        A highly skilled and motivated
                        full-stack developer.
                    </h1>
                    <h1 className='text-sm text-center'>
                        If you can Imagine it I can build it!
                    </h1>
                </div>

                <div className=" hover:h-[26rem] group  trans-slow h-96 w-60 relative  rounded-b-3xl overflow-hidden overflow-y-hidden">
                    <img src={MYPIC} alt="" className='w-full h-full object-cover group-hover:scale-110 rounded-b-3xl trans-slow' />
                </div>

            </div>

            <div className='my-20'></div>

            <div className="h-[90%] flex flex-col justify-center items-center p-4 gap-4">
                <h1 className='text-white text-7xl font-bold  w-fit m-auto hover:scale-105 trans-slow'>Featured Portfolio</h1>
                <div className='flex flex-col p-2   justify-center items-center md:flex-row gap-4 h-full w-full'>
                    <div className='h-60 w-full group overflow-hidden relative no-scrollbar md:h-96 md:w-96  hover:scale-105 trans rounded-3xl'>
                        <a href='https://higherbeingset.netlify.app/' target="_blank" rel="noopener noreferrer" className='h-full w-full rounded-3xl bg-gradient-to-r flex-col flex justify-center items-center p-2 z- from-black to-gray-800 -500 absolute   hover:opacity-50 trans-slow opacity-95'>
                            <h1 className='text-5xl md:text-left text-center font-bold text-white group-hover:text-opacity-0 trans-slow'>Higer Beings E.T</h1>
                            <h1 className=' text-sm text-white group-hover:text-opacity-0 trans-slow'>Spiritual Website</h1>
                        </a>
                        <iframe className='w-full h-full no-scrollbar' src="https://higherbeingset.netlify.app/" title="description"></iframe>
                    </div>
                    <div className='flex flex-col  h-96 w-full md:w-fit  justify-center items-center gap-4'>
                        <button className='   w-full md:w-96 rounded-3xl group h-48 hover:scale-105 overflow-hidden relative trans'>
                            <a href='https://humainegrandeur.netlify.app/Shop' target="_blank" rel="noopener noreferrer" className='h-full w-full rounded-3xl bg-gradient-to-r flex-col flex justify-center items-center p-2 z- from-black to-gray-800 -500 absolute   hover:opacity-50 trans-slow opacity-95'>
                                <h1 className='text-5xl md:text-left text-center font-bold text-white group-hover:text-opacity-0 trans-slow'>Humaine Grandeur</h1>
                                <h1 className=' text-sm text-white group-hover:text-opacity-0 trans-slow'>Urban clothing line</h1>
                            </a>
                            <iframe className='w-full h-full no-scrollbar' src="https://humainegrandeur.netlify.app/Shop" title="description"></iframe>
                        </button>
                        <button className='bg-red-900 group w-full md:w-96 relative rounded-3xl h-48 hover:scale-105 trans overflow-hidden'>
                            <a href='https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13' target="_blank" rel="noopener noreferrer" className='rounded-3xl h-full w-full bg-gradient-to-r flex-col flex justify-center items-center p-2  from-black to-rose-500 absolute   hover:opacity-50 trans-slow opacity-80'>
                                <h1 className='text-5xl font-bold text-white group-hover:text-opacity-0 trans-slow'>Void Card</h1>
                                <h1 className=' text-sm text-white group-hover:text-opacity-0 trans-slow'>Digital Bussiness Cards</h1>
                            </a>
                            <iframe className='w-full h-full no-scrollbar' src="https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13" title="description"></iframe>

                        </button>
                    </div>

                </div>
            </div>

            <div className='my-20'></div>

            <div className="flex justify-between gap-10">
                <div className='w-[50%] group hover:w-[55%] shadow-black shadow relative trans-slow h-32 rounded-r-full bg-black overflow-hidden'>

                    <a href='https://github.com/chigoox' target="_blank" rel="noopener noreferrer" className='h-full w-full bg-gradient-to-r flex justify-end items-center p-2 z-10 from-black to-rose-500 absolute rounded-r-full  hover:opacity-50 trans-slow opacity-80'>
                        <h1 className='text-4xl md:text-5xl font-bold text-white group-hover: trans-slow'>GitHub</h1>
                    </a>
                    <img className='w-full group-hover:scale-105 trans-slow h-full object-cover rounded-r-full' src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-ide.png?width=2496&format=webpll" alt="" />


                </div>

                <div className='my-32 md:my-32 lg:w-20'></div>

                <div className='text-sm w-1/2  h-32  p-2 md:text-base'>
                    <h1 className='text-white hover:first-letter:bg-rose-500 first-line:text-xl first-letter:bg-black first-letter:text-4xl  w-[90%] md:w-1/2 hover:scale-105 trans-slow'>
                        Explore all of my public
                        code repositories on GitHub
                        and gain insight into my
                        programming expertise
                        and experience.
                    </h1>
                </div>
            </div>
            <div className="flex justify-between gap-10">
                <div className='text-sm w-1/2  h-32  p-2 md:text-lg flex justify-end'>
                    <h1 className='text-white first-line:text-xl hover:first-letter:bg-rose-500 first-letter:bg-black first-letter:text-4xl text-right w-[90%] md:w-1/2 hover:scale-105 trans-slow'>
                        Experience a collection of
                        interactive games created
                        by me using RPG Maker and
                        Unity game engines.
                    </h1>
                </div>
                <div className='w-[50%] hover:w-[55%] overflow-hidden relative group trans-slow h-32 rounded-l-full '>

                    <a href='https://chigoox.itch.io/' target="_blank" rel="noopener noreferrer" className='h-full rounded-l-full w-full bg-gradient-to-l flex  items-center justify-start p-2 z-10 from-black to-rose-500 absolute  hover:opacity-50 trans-slow opacity-90'>
                        <h1 className='text-4xl md:text-5xl font-bold text-white  trans-slow'>Itch.io</h1>
                    </a>
                    <img className='w-full h-full group-hover:scale-105 object-cover trans-slow rounded-l-full' src="https://assets-global.website-files.com/5efc0159f9a97ba05a8b2902/5f1a8cef64b347eced83456f_test-play.jpg" alt="" />
                </div>
            </div>

            <div className='my-20'></div>

            <div className='bg-black-900 h-96 flex'>
                <button className='trans-slow hover:scale-125 w-40 h-20 bg-rose-500 hover:rounded-[10px] rounded-[0px] m-auto'>
                    <h1 className='font-bold text-3xl text-white'>Hire Me</h1>
                </button>
            </div>

        </div>
    )
}

export default Home