import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import SideBar from './SideBar'
import { useState } from 'react'
const Nav = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleSideBar=()=>{
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"; 
  }


  return (
    <header className="padding-x py-8 absolute z-10 w-full">
         {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out lg:hidden`}
          onClick={toggleSideBar}
        >
        </div>
      )}
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item)=>(
              <li key={item.label}>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href={item.href}>{item.label}</a>
              </li>
            ))
          }
          </ul>
          <div className='hidden max-lg:block cursor-pointer'>
          <img src={hamburger} alt="hamburger" width={25} height={25} onClick={toggleSideBar} />
          </div>
          
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen}  />
        </nav>
    </header>
  )
}

export default Nav