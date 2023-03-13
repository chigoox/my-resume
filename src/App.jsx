import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from "react-icons/ai";
import './App.css'
import Admin from './Pages/Admin';
import { fetchDocument } from './MyCodes/ed5';
import SideBar from './componets/SideBar/SideBar';
import Cursor from './componets/Cursor/Cursor';

function App() {
  const [showMenu, setShowMenu] = useState()
  const [selectedMenu, setSeletctedMenu] = useState({ Home: true })
  const toggleMenu = () => { setShowMenu(!showMenu) }


  const menuItems = ['Home', 'Media', 'Services', 'Motivation', 'Admin']
  const menuMap = menuItems.map((item) => {
    return (item != "Admin") ? (
      <button key={item} onClick={() => { setSeletctedMenu({ [item]: true }) }}
        className={`${selectedMenu[item] ? 'bg-slate-200' : 'bg-white'} w-[90%] h-12 my-8 rounded hover:font-bold hover:text-black hover:bg-slate-100 text-2xl`}
      >
        <h1>{showMenu ? item : ''}</h1>
      </button>
    ) : (
      <button key={item} onClick={() => { setSeletctedMenu({ [item]: true }); toggleMenu() }}
        className={`${selectedMenu[item] ? 'bg-slate-200' : 'bg-white'} w-[20%] transition-all ease-in duration-[9000ms] h-12 my-8 text-white rounded hover:font-bold hover:text-black hover:bg-slate-100 text-2xl`}
      >
        <h1>{showMenu ? item : ''}</h1>
      </button>
    )
  })





  return (
    <div className="App h-screen bg-[#1E1E28]">
      <Cursor />
      {/* SideMenu */}
      <div className={`${showMenu ? 'w-[60%] lg:w-[20%]' : 'w-0 lg:w-0'} right-0 z-20 h-full flex fixed transition-all duration-500 ease-in-out`} >
        <button onClick={toggleMenu} className={`relative ${showMenu ? ' left-14 text-black' : 'text-black hover:text-white bg-white  hover:bg-black p-1 right-12'}   w-10 h-10 text-3xl rounded-xl transition-all duration-500 ease-in-out hover:scale-110 ml-1 mt-14`}>
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div className={`w-full items-center flex flex-col justify-center  bg-white shadow-sm shadow-black h-full transition-all duration-500 ease-in-out`}>
          {menuMap}
        </div>
      </div>
      {/* end SideMenu */}
      <SideBar />
      {/* PAGES */}
      {selectedMenu.Admin && <Admin />}



      {/* Footer */}
    </div >
  )
}

export default App
