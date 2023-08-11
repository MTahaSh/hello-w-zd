import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React from 'react'
// import Image from 'next/image'
 import { cookies } from 'next/headers'
// import ConnectButton from './comp/index'
// import { cookies } from 'next/headers';
import { decode } from 'jsonwebtoken';
import Link from 'next/link'


// export const getUser = () => {
//   const accessToken = cookies().get("accessToken")?.value;
//   if(accessToken){
//       const decodedToken: any = decode(accessToken);
//       const payload = decodedToken.payload;
//       return payload;
//   }
//   return;
// }


export default function Home() {
  
  // const user = getUser();

  // console.log("user ", user)
  
  return (
   
   
    
        <main >
       {/* <ConnectButton/> */}
       <div className='flex justify-center space-x-6 items-center h-screen'>
       <Link href={"/comp/signup"} className='hover:border-2 hover:border-solid hover:border-white hover:rounded-lg' ><button className='px-6 py-3 rounded-lg bg-purple-900  text-white hover:bg-transparent hover:text-blue-300'>Sign Up</button></Link>

       <Link href={"/comp/signin"} className='hover:border-2 hover:border-solid hover:border-white hover:rounded-lg'><button className='px-6 py-3 rounded-lg bg-purple-900 text-white hover:bg-transparent hover:text-blue-300 '>Sign In</button></Link>
       </div>
        </main>
  
  )
}
