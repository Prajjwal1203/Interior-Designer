import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <Image src={'/img.jpg'} width={500} height={500} alt="img"></Image>

      <h2 className="font-medium text-xl text-gray-500 mt-5">Create new Design for your room</h2>
      <Link href={'/dashboard/create-new'}>
      <Button className="mt-5">+Redesign Room</Button></Link>
    
    </div>
  )
}

export default EmptyState
