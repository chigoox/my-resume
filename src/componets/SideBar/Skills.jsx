import React from 'react'
import { AiFillCheckSquare } from "react-icons/ai";

function Skills({ skill }) {
    return (
        <div className='transition-all duration-500 ease-in-out flex gap-4  my-1 hover:scale-105'>
            <h1 className='text-2xl text-rose-700'><AiFillCheckSquare /></h1>
            <h1 className='text-[#8C8C8E]'>{skill}</h1>
        </div>
    )
}

export default Skills