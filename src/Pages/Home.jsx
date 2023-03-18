
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'
import MenuButton from '../componets/MenuButton'


function Home() {

    return (
        <div className='bg-black m-auto  w-full relative flex-col felx'>
            <div className="bg-white h-96 w-[50%] absolute right-0 rounded-b-3xl"></div>
            <div className="w-[70%] m-auto h-[90%] flex justify-center p-4">

                <div className='flex flex-col justify-center md:flex-row gap-4 h-full w-full'>
                    <button className='h-60 w-60   md:h-96 md:w-96 bg-white hover:scale-105 trans'>

                    </button>
                    <div className='flex flex-col  h-96 w-fit  justify-center items-center gap-4'>
                        <button className='bg-red-900 w-60 md:w-96  h-48 hover:scale-105 trans'></button>
                        <button className='bg-white   w-60 md:w-96  h-48 hover:scale-105 trans'></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home