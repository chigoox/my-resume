import React from 'react'

function LineP({ per, name }) {
    return (
        <div className='w-full text-white m-2 text-sm transition-all duration-500 ease-in-out hover:scale-105'>
            <div className='flex justify-between mt-4'>
                <h1>{name}</h1>
                <h1>{per}</h1>
            </div>
            <div className='h-1 bg-black-800 w-full rounded-full'>
                <div className={`bg-rose-500 w-[${per}] h-full`}></div>
            </div>
        </div>
    )
}

export default LineP