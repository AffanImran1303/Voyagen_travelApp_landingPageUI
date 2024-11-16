"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const toggleMenu=():void=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <p className="text-[#f25b08] font-bold text-2xl">Voyagen</p>
      </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            variant="btn_primary"
          />
        </div>
        <button className="inline-block lg:hidden" onClick={toggleMenu}>
          {isOpen?(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>

          ):(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          )}
        </button>
        {/* {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-black sm:px-3">
              <div className="bg-black"></div>
            </div>

          </div>
        )} */}
    </nav>
  )
}

export default Navbar

