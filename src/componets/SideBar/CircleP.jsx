import React from 'react'

function CircleP({ per, lang }) {
    return (
        <div className='mx-4'>
            <div className="circle-wrap z-0">
                <div className="circleP">

                    <div className="mask full">
                        <div className="fill bg-rose-700"></div>
                    </div>

                    <div className="mask half">
                        <div className="fill bg-rose-700"></div>
                    </div>

                    <div className="text-white inside-circle bg-[#1E1E28]">
                        {per}
                    </div>

                </div>
            </div>
            <h1 className='text-white font-bold text-3xl my-4 text-center'>{lang}</h1>
        </div>
    )
}

export default CircleP