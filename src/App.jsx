import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill, BsNewspaper } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { RiFilePaperFill } from 'react-icons/ri'
import './App.css'
import About from './Pages/Services';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import { fetchDocument } from './MyCodes/ed5';
import SideBar from './componets/SideBar/SideBar';
import MenuButton from './componets/MenuButton';
import Resume from './Pages/Resume';
import Services from './Pages/Services';

function App() {
  const [showMenu, setShowMenu] = useState()
  const [showSideBar, setShowSideBar] = useState()
  const [selectedMenu, setSeletctedMenu] = useState({ Home: true })
  const toggleSideBar = () => { setShowSideBar(!showSideBar); setShowMenu(false) }
  const toggleMenu = () => { setShowMenu(!showMenu); setShowSideBar(false) }

  const Icon = ({ item }) => {
    if (item.includes('Home')) {
      return (<AiFillHome color='white' className='m-auto' />)
    } else if (item.includes('Services')) {
      return (<MdAttachMoney color='white' className='m-auto' />)
    } else if (item.includes('Portfolio')) {
      return (<BsNewspaper color='white' className='m-auto' />)
    } else if (item.includes('Resume')) {
      return (<RiFilePaperFill color='white' className='m-auto' />)
    }

  }






  const menuItems = ['Home', 'Services', 'Portfolio', 'Resume']
  const menuMap = menuItems.map((item) => {
    return (
      <button key={item} onClick={() => { setSeletctedMenu({ [item]: true }) }}
        className={`${selectedMenu[item] ? 'bg-rose-500' : 'bg-[#131313]'} w-[90%] h-12 my-8 rounded hover:font-bold hover:text-black hover:bg-rose-600 text-2xl`}
      >

        <h1>{showMenu ? item : <Icon item={item} />}</h1>
      </button>
    )
  })



  return (
    <div className="App h-screen bg-black">

      {/* SideMenu */}
      <div className={`${showMenu ? 'w-[200px]' : 'w-0 md:w-[6rem]'} right-0 z-20 h-full flex fixed transition-all duration-500 ease-in-out`} >
        <button onClick={toggleMenu} className={`relative ${showMenu ? ' -right-12 text-black' : 'text-black  p-1 right-20 md:-right-11'}   w-12 h-8 text-3xl  transition-all duration-500 ease-in-out flex justify-center items-center ml-1 mt-14`}>
          <MenuButton menuOpen={showMenu} />
        </button>
        <div className={`w-full items-center flex flex-col justify-center  bg-[#070707] shadow-sm shadow-black h-full transition-all duration-500 ease-in-out`}>
          {menuMap}
        </div>
      </div>
      {/* end SideMenu */}
      <div className=' w-[200px] z-[999] fixed'>
        <SideBar menuOpen={showSideBar} />
        <button onClick={toggleSideBar} className={`${showSideBar ? 'left-[80%] invert hover:mx-3' : 'left-0'} group   m-4 trans  z-[100] absolute h-8 w-3 `}>
          <div className='flex'>
            <div className={`flex flex-col justify-center items-center trans-slow gap-1 ${showSideBar ? 'group-hover:gap-2' : ''}`}>
              <div className=' bg-black h-1 w-1 rounded-full mx-1 invert'></div>
              <div className=' bg-black h-1 w-1 rounded-full mx-1 group-hover:right-2 right-0 relative trans-slow'></div>
              <div className=' bg-black h-1 w-1 rounded-full mx-1 invert'></div>
            </div>
            <div className={`flex flex-col justify-center items-center trans-slow gap-1 group-hover:gap-x-2`}>
              <div className=' bg-black h-1 w-1 rounded-full invert mx-1'></div>
              <div className={` bg-black h-1 w-1 rounded-full mx-1 group-hover:scale-[2] trans-slow`}></div>
              <div className=' bg-black h-1 w-1 rounded-full invert mx-1'></div>
            </div>
          </div>

        </button>
      </div>
      {/* PAGES */}
      {selectedMenu.Services && <Services />}
      {selectedMenu.Home && <Home />}
      {selectedMenu.Portfolio && <Portfolio />}
      {selectedMenu.Resume && <Resume />}
      console.log(selectedMenu)



      {/* Footer */}
    </div >
  )
}

export default App
