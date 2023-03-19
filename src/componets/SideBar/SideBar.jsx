import React from 'react'
import CircleP from './CircleP'
import LineP from './LineP'
import Skills from './Skills';
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai';


function SideBar({ menuOpen }) {
    const otherSkills = ['git, Bash, unity', '0auth2, REST, API', 'serverless functions']
    return (
        <div className={`${menuOpen ? 'w-[200px]' : 'w-0'} z-[99] trans fixed h-full  bg-black-900 shadow shadow-black overflow-y-scroll overflow-hidden no-scrollbar`}>
            <div className={`fixed z-50 bg-black-800 p-6 h-[235px] trans ${menuOpen ? 'w-[200px]' : 'w-0 opacity-0'}`}>
                {menuOpen &&
                    <div className={`${menuOpen ? 'w-full' : 'w-0'} trans-slow`}>
                        <div className='w-[90px] h-[90px] bg-white rounded-full m-auto'></div>
                        <h1 className='text-white text-center m-2 font-bold trans'>Emmanuel Dike</h1>
                        <h1 className='text-center text-slate-400 trans'>Full-stack Developer</h1>
                    </div>
                }
            </div>

            <div className='bg-black-800 p-6 h-[235px] w-[200px]'>
            </div>
            <div className='p-4 text-sm'>
                <div className='flex text-xs justify-between p-1'>
                    <h1 className='font-bold text-white'>Residence:</h1>
                    <h1 className='text-slate-400'>United States</h1>
                </div>
                <div className='flex justify-between p-1'>
                    <h1 className='font-bold text-white'>City:</h1>
                    <h1 className='text-slate-400'>Union, NJ</h1>
                </div>
                <div className='flex justify-between p-1'>
                    <h1 className='font-bold text-white'>Age:</h1>
                    <h1 className='text-slate-400'>28</h1>
                </div>
            </div>
            <div>

            </div>

            <div className='w-[90%] border-b m-auto border-gray-900'></div>
            <div className='w-full'>
                <div className='flex justify-around  gap-10 scale-[.4]'>
                    <CircleP per={'100%'} lang={'English'} />
                    <CircleP per={'100%'} lang={'Igbo'} />
                </div>
            </div>
            <div className='w-[90%] border-b m-auto border-gray-900'></div>
            <div className='flex flex-col items-center p-4'>
                <LineP per={'90%'} name={'HTML'} />
                <LineP per={'90%'} name={'CSS'} />
                <LineP per={'90%'} name={'JavaScript'} />
                <LineP per={'70%'} name={'React'} />
                <LineP per={'100%'} name={'Tailwind CSS'} />
                <LineP per={'60%'} name={'Ruby'} />
                <LineP per={'20%'} name={'C#'} />

            </div>
            <div className='w-[90%] border-b m-auto border-slate-600'></div>
            <div className='p-4 flex flex-col'>
                {otherSkills.map(item => { return (<Skills skill={item} key={item} />) })}
            </div>
            <div className='flex p-4'>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vQo-chURV-Y_izv_bhTQbWFQOKp3JvYWPGtRKKmv2-OtY4O3S5axVQfAR00NnRI6nkDv_kPloVOpPjN/pub" className=' '>
                    <div className='transition-all duration-700 ease-in-out hover:text-white hover:scale-110 text-[#8C8C8E] font-bold flex gap-4'>
                        <h1>Download CV</h1>
                        <h1 className='text-2xl '><AiOutlineDownload /></h1>
                    </div>
                </a>
            </div>

            <div className='bg-[#23232E] h-12 text-3xl flex justify-center'>
                <a href="https://github.com/chigoox" className='text-[#8C8C8E] m-2 hover:scale-110 transition-all duration-700 ease-in-out'><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/emmanuel-dike-9861a7186/" className='text-[#8C8C8E] m-2 hover:scale-110 transition-all duration-700 ease-in-out'><AiFillLinkedin /></a>

            </div>

        </div>
    )
}

export default SideBar