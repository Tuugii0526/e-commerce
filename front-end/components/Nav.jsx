"use client";

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
    </div>
}