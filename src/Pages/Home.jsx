
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'
import MenuButton from '../componets/MenuButton'


function Home() {

    return (
        <div className='bg-black  w-full relative flex-col felx'>
            <div className="flex justify-center items-center gap-2">
                <div className='w-60 md:w-96 p-4  text-white'>
                    <h1 className='hover:scale-105 hover:first-letter:bg-rose-500 trans-slow text-sm md:text-normal first-letter:text-4xl'>
                        A highly skilled and motivated
                        full-stack developer who is
                        entirely self-taught and has
                        been coding since the tender
                        age of 13. Hailing from Nigeria,
                        this individual has achieved remarkable
                        success at just 28 years of age.
                        Demonstrating an exceptional aptitude
                        for programming, they have a
                        particular passion for creating
                        games with Ruby and C#, as well
                        as building websites, and apps utilizing
                        Javascript, React, React Native, and Tailwind CSS.
                        Their exceptional skills and expertise
                        are a testament to their unwavering
                        dedication to the field of technology.
                        Get ready to be inspired by this exceptional
                        developer's creativity and ingenuity.
                    </h1>
                </div>

                <div className="bg-white hover:h-[26rem] trans-slow h-96 w-60 relative right-0 rounded-b-3xl"></div>

            </div>

            <div className='my-20'></div>

            <div className="h-[90%] flex flex-col justify-center items-center gap-4">
                <h1 className='text-white text-2xl font-bold w-fit m-auto hover:scale-105 trans-slow'>Featured Portfolio</h1>
                <div className='flex flex-col justify-center items-center md:flex-row gap-4 h-full w-full'>
                    <button className='h-60 w-60   md:h-96 md:w-96 bg-white hover:scale-105 trans'>
                        <iframe className='w-full h-full' src="https://humainegrandeur.netlify.app/" title="description"></iframe>
                    </button>
                    <div className='flex flex-col  h-96 w-fit  justify-center items-center gap-4'>
                        <button className='bg-red-900 w-52 md:w-96  h-48 hover:scale-105 trans'></button>
                        <button className='bg-white   w-60 md:w-96  h-48 hover:scale-105 trans'></button>
                    </div>

                </div>
            </div>

            <div className='my-20'></div>

            <div className="flex justify-between gap-10">
                <div className='w-[50%] group hover:w-[55%] shadow-black shadow relative trans-slow h-32 rounded-r-full bg-black overflow-hidden'>

                    <a href='https:github.com/chigoox' target="_blank" rel="noopener noreferrer" className='h-full w-full bg-gradient-to-r flex justify-end items-center p-2 z-10 from-black to-rose-500 absolute rounded-r-full  hover:opacity-10 trans-slow opacity-75'>
                        <h1 className='text-5xl text-bold text-white group-hover: trans-slow'>GitHub</h1>
                    </a>
                    <img className='w-full group-hover:scale-105 trans-slow h-full object-cover rounded-r-full' src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-ide.png?width=2496&format=webpll" alt="" />


                </div>

                <div className='my-32 md:my-32 lg:w-20'></div>

                <div className='text-sm w-1/2  h-32  p-2 md:text-base'>
                    <h1 className='text-white hover:first-letter:bg-rose-500 first-letter:bg-black first-letter:text-4xl  w-[90%] md:w-1/2 hover:scale-105 trans-slow'>
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
                    <h1 className='text-white hover:first-letter:bg-rose-500 first-letter:bg-black first-letter:text-4xl text-right w-[90%] md:w-1/2 hover:scale-105 trans-slow'>
                        Experience a collection of
                        interactive games created
                        by me using RPG Maker and
                        Unity game engines.
                    </h1>
                </div>
                <div className='w-[50%] hover:w-[55%] overflow-hidden relative group trans-slow h-32 rounded-l-full bg-white'>

                    <a href='https://chigoox.itch.io/' target="_blank" rel="noopener noreferrer" className='h-full w-full bg-gradient-to-l flex  items-center justify-start p-2 z-10 from-black to-rose-500 absolute  hover:opacity-10 trans-slow opacity-75'>
                        <h1 className='text-5xl text-bold text-white  trans-slow'>Itch.io</h1>
                    </a>
                    <img className='w-full h-full group-hover:scale-105 object-cover rounded-l-full' src="https://assets-global.website-files.com/5efc0159f9a97ba05a8b2902/5f1a8cef64b347eced83456f_test-play.jpg" alt="" />
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