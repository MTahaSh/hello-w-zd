import Image from 'next/image'
import React from 'react'

const page = (e:any) => {


    

  return (
    <div className='text-white space-y-6 mx-6 my-6' >
        <Image src={"/vercel.svg"} alt='/' width={100} height={100} className='bg-white w-[10%] h-[10%] py-7 object-contain rounded-full'/>
        <h1>Hello</h1>
        <h2>there</h2>
        

    </div>
  )
}

export default page