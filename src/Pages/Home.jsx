
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'
import MenuButton from '../componets/MenuButton'


function Home() {

    return (
        <div className='bg-black  w-full relative flex-col felx'>
            <div className="flex justify-center items-center gap-2">
                <div className='w-60 md:w-96 p-4  text-white'>
                    <h1 className='hover:scale-105 hover:first-letter:bg-rose-500 trans-slow text-sm md:text-normal first-letter:text-4xl'>
                        Yet remarkably appearance
                        get him his projection.
                        Diverted endeavor bed peculiar
                        men the not desirous. Acuteness
                        abilities ask can offending
                        furnished fulfilled sex. Warrant
                        fifteen exposed ye at mistake.
                        Blush since so in noisy still
                        built up an again. As young
                        ye hopes no
                    </h1>
                </div>

                <div className="bg-white hover:h-[26rem] trans-slow h-96 w-60 relative right-0 rounded-b-3xl"></div>

            </div>

            <div className='my-20'></div>

            <div className="h-[90%] flex flex-col justify-center items-center gap-4">
                <h1 className='text-white text-2xl font-bold w-fit m-auto hover:scale-105 trans-slow'>Featured Portfolio</h1>
                <div className='flex flex-col justify-center items-center md:flex-row gap-4 h-full w-full'>
                    <button className='h-60 w-60   md:h-96 md:w-96 bg-white hover:scale-105 trans'>

                    </button>
                    <div className='flex flex-col  h-96 w-fit  justify-center items-center gap-4'>
                        <button className='bg-red-900 w-52 md:w-96  h-48 hover:scale-105 trans'></button>
                        <button className='bg-white   w-60 md:w-96  h-48 hover:scale-105 trans'></button>
                    </div>

                </div>
            </div>

            <div className='my-20'></div>

            <div className="flex justify-between gap-10">
                <div className='w-[50%] hover:w-[55%] trans-slow h-32 rounded-r-full bg-white'>


                </div>
                <div className='text-sm w-1/2  h-32  p-2 md:text-lg'>
                    <h1 className='text-white hover:first-letter:bg-rose-500 first-letter:bg-black first-letter:text-4xl  w-[90%] md:w-1/2 hover:scale-105 trans-slow'>
                        Material breeding insisted
                        building to in. Continual
                        so distrusts pronounce by
                        unwilling listening.
                    </h1>
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