"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [openHeader, setOpenHeader] = useState(false)
  const router = useRouter();

  return (
    <div className='fixed top-0 left-0 w-screen h-[65px] md:h-[85px] bg-primary'>
      <div className='flex items-center h-full w-full px-5'>
        {openHeader === false ? (
          <FaBars className='text-white' size={20} onClick={() => setOpenHeader(true)} />
        ) : (
          <IoMdClose className='text-white' size={25} onClick={() => setOpenHeader(false)} />
        )}
      </div>
      {openHeader && (
        <div className='w-full bg-primary mt-[-1px] text-white flex flex-col items-center'>
          <p className='py-2 w-full text-center hover:bg-blue-950' onClick={() => router.push('/')}>Visão geral</p>
          <p className='py-2 w-full text-center hover:bg-blue-950' onClick={() => router.push('/historico')}>Histórico de transações</p>
        </div>
      )}
    </div>
  )
}
