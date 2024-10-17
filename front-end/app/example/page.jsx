"use client";

import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="btn"
        onClick={() => {
          setIsOpen((preState) => !preState);
        }}
      >
        {isOpen ? "Disappear" : "Appear"}
      </button>
      <Transition show={isOpen}>
        <div className={
            clsx([
                'appear:true',
                //Base styles
                'absolute w-48 border transition ease-in-out',
                //Shared closed styles
                'data-[closed]:opacity-0',
                //Entering styles
                'data-[enter]:duration-1000 data-[enter]:data-[closed]:-translate-x-full',
                //Leaving styles
                'data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full',
            ])
        }>
          I will fade in and out
        </div>
      </Transition>
    </div>
  );
}
