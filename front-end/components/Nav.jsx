"use client";

import {Dialog,Transition} from '@headlessui/react'
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
    <button aria-label="Open cart">
    <ShoppingCartIcon className="h-5"/>
    </button>
    <Transition show={isOpen}>
        
    </Transition>
    </div>
}