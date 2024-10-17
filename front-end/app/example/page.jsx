"use client";
import {Dialog,DialogPanel } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <button onClick={()=>{setIsOpen(true)}} className="btn">Open dialog</button>
     <Dialog open={isOpen} onClose={()=>{setIsOpen(false)}} className="relative z-50">
        <div className="fixed inset-0 w-screen flex items-center justify-center p-4 bg-white">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <p>Hi</p>
            <button className="btn" onClick={()=>{
              setIsOpen(!isOpen)
            }}>
              close cart
            </button>
          </DialogPanel>
        </div>
     </Dialog>
    </>
  )
}
