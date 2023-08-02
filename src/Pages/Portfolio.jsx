
import React, { useEffect, useState } from 'react'
import { handleInput5, addToDatabase } from '../MyCodes/ed5'
import MenuButton from '../componets/MenuButton'


function Portfolio() {

    const PortItem = ({ title, desc, tech, link, textSize }) => {
        return (
            <div className='bg-white border-white border-2 shadow overflow-hidden shadow-black relative rounded h-[40rem] w-[25rem] group hover:scale-105 trans-slow'>
                <div className='w-full h-14 bg-black absolute  items-center bottom-12 bg-opacity-25 trans-slow  group-hover:bg-opacity-95'>
                    <div className=' w-full h-full p-2 flex justify-center items-center'>
                        <a href={link} className={`text-white border font-bold ${textSize ? textSize : 'text-3xl'} hover:text-rose-500 trans`}>{title}</a>
                        <h1 className='text-white px-2 font-bold text-xs'>{desc}</h1>
                    </div>
                    <div className=' text-rose-500 flex gap-1 text-xs justify-center bg-black-800 items-center'>
                        {
                            tech.map(item => { return <li>{item}</li> })
                        }


                    </div>
                </div>
                <iframe className='h-full w-full' src={link} frameborder="0"></iframe>
            </div>
        )
    }

    return (
        <div className='bg-black h-full w-full relative overflow-y-scroll'>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 md:mt-12 justify-around md:p-12 scale-[.8] m-auto md:scale-100 grid-flow-row w-full h-fit gap-12 md:gap-4">
                <PortItem link={'https://higherbeingset.netlify.app'}
                    title={'Higher Beigns E.T'}
                    desc={'Spiritual Website'}
                    tech={['React', 'Tailwind CSS', 'Stripe', 'FireBase', 'Serverless Functions']}
                />
                <PortItem link={'https://humainegrandeur.netlify.app/'}
                    title={'Humaine Grandeur'}
                    desc={'Urban Clothing'}
                    tech={['Firebase', 'React', 'Tailwind CSS, Stripe', 'NodeJs', 'Express']}
                />
                <PortItem link={'https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13'}
                    title={'Void'}
                    desc={'Digital Business Cards'}
                    tech={['React', 'Tailwind CSS', 'CommerceJS', 'Firebase']}
                />
                <PortItem link={'https://tribalart.netlify.app'}
                    title={'Tribal Art'}
                    desc={'Artist Portfolio and shop'}
                    tech={['React', 'Tailwind CSS', 'commerceJS']}
                />
                <PortItem link={'https://ifcnj.netlify.app/'}
                    title={'IFC Church'}
                    desc={'Church Website'}
                    tech={['Firebase', 'React', 'Tailwind CSS']}
                />
                <PortItem link={'https://ahw.netlify.app/'}
                    title={'Anoited Hands Wigs'}
                    desc={'website to download app'}
                    tech={['React/Native', 'Tailwind CSS', 'Nodoe/Express']}
                    textSize={'text-xl'}
                />










            </div>
        </div>
    )
}

export default Portfolio