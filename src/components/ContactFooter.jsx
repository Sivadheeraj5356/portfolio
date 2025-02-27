import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const ContactFooter = () => {
  return (
    <div className='relative'>
        <div className="flex flex-col items-center mb-48">
            <h1 className="heading lg:max-w-[45vw] text-5xl font-bold text-center">
                Ready to take your digital presence to the next level?</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center text-xl">
                    Reach out to me today and let&apos; s discuss how I can help you achieve your goals.</p>
        <Link href="/contact">        
        <Button className='cursor-pointer h-14 w-24 text-lg' size="lg">Contact me</Button>
        </Link>
        </div>
        </div>
  )
}

export default ContactFooter