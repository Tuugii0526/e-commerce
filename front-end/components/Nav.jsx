"use client";

<<<<<<< HEAD
import { londrinaSketch } from "../app/fonts"; 
import Link from "next/link";
import {  useState } from "react";
import { CartTransition } from "./cart/CartTransition";
import { ProfileTransition } from "./profile/ProfileTransition";
export const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen]=useState(false)
  const openProfile=()=>{
    setIsProfileOpen(true)
  }
  return (
    <div className="w-full h-[100px] flex justify-around items-center">
     <div className="p-3 h-fit w-fit rounded-full bg-yellow-300" onClick={openProfile}>
      <p className={`${londrinaSketch.className} text-[25px]`} >Chapa</p>
      </div>
      <Link href={'/admin'}>
      <div className="p-3 h-fit w-fit rounded-full bg-yellow-300">
      <p  className={`${londrinaSketch.className} text-[25px]`}>Admin</p>
      </div>
      </Link>
      <CartTransition isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      <ProfileTransition isProfileOpen={isProfileOpen } setIsProfileOpen={setIsProfileOpen} />
=======
import {Dialog,DialogPanel,Transition} from '@headlessui/react'
import  {ShoppingCartIcon}  from '@heroicons/react/24/outline';
import {Fragment,useEffect,useRef,useState} from 'react'
export const Nav=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const openCart=()=>{
        setIsOpen(true)
    }
    const closeCart=()=>{
        setIsOpen(false)
    }

    return  <div className="w-full h-[100px] flex justify-around items-center">
    <p>Chapa</p>
    <button aria-label="Open cart" onClick={openCart}>
    <ShoppingCartIcon className="h-5"/>
    </button>
    <Transition show={isOpen}>
        <Dialog onClose={closeCart}>
            <p>HI</p>
            <DialogPanel>
                <button onClick={closeCart}>Close</button>
            </DialogPanel>
        </Dialog>
    </Transition>
>>>>>>> 619de96d4e891b29bc6b5be7c3059ef6dec73dfc
    </div>
  );
};
