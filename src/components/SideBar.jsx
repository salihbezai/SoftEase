import { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { headerLogo } from '../assets/images';
import { closeIcon } from '../assets/icons';

const SideBar = ({ isOpen, setIsOpen }) => {
    useEffect(() => {
        if (isOpen) {
            document.getElementById("new-Arrival").style.zIndex = 5;
            document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
        } else {
            document.body.style.overflow = "auto";
            document.getElementById("new-Arrival").style.zIndex = 10;
        }
    }, [isOpen]);

    const closeSideBar = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto"; 
    };

    // Function to close sidebar on larger screens
    const handleResize = () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            closeSideBar();
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`px-8 py-6 bg-white z-30 shadow-lg fixed top-0 right-0 min-h-screen transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
            <div className='flex justify-between items-center w-80'>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} className='cursor-pointer' />
                </a>
                <img src={closeIcon} onClick={closeSideBar} alt="Close" width={'50px'} height={"50px"} className='cursor-pointer' />
            </div>
            <hr />
            <ul className='flex flex-col'>
                {
                    navLinks.map((navlink, key) => (
                        <li key={key} className='flex-1 p-4 text-slate-gray '>
                            <a href={navlink.href}>{navlink.label}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SideBar;
