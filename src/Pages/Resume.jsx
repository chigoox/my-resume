
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'
import MenuButton from '../componets/MenuButton'


function Resume() {

    return (
        <div className='bg-black h-full w-full relative overflow-y-scroll flex  justify-center items-center'>
            <iframe className=' w-[50rem] no-scrollbar  h-[90rem] m-auto invert' src="https://docs.google.com/document/d/e/2PACX-1vQo-chURV-Y_izv_bhTQbWFQOKp3JvYWPGtRKKmv2-OtY4O3S5axVQfAR00NnRI6nkDv_kPloVOpPjN/pub?embedded=true"></iframe>
        </div>
    )
}

export default Resume