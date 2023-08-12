  "use client"
  import Image from 'next/image'
  import React from 'react'
  import axios from 'axios'
  import toast from 'react-hot-toast'
  import { useRouter } from 'next/navigation'
  import { useState } from 'react'


  const ProfileComp = () => {
      const router = useRouter();
      const [data,setData] = useState("nothing")
      
      const logout = async()=> {
      
        try {
          
           await axios.post('/api/auth/web2logout') 
          // console.log("API FETCHED DATA: " + res );
          
          
            
          // console.log('API Response:', res);
            // console.log();
          // const responseData = await res.json();
          // console.log("API FETCHED DATA.DATA: " + responseData); 
          toast.success("Logging Out")
          router.push("/comp/signin")
          // console.log("There is some issue with API FETCH!");
            
          
      
      
        } catch (error) {
          
        }
      
      }
      
      const getUserDetails = async()=>{
        const response = await axios.get('/api/auth/web2token')
        console.log("result: " + response.data);
        setData(response.data.id)
        
      }
      
        return (
          <div className='text-white space-y-6 mx-6 my-6' >
              <Image src={"/vercel.svg"} alt='/' width={100} height={100} className='bg-white w-[10%] h-[10%] py-7 object-contain rounded-full'/>
              <h1>Profile Page</h1>
              <h2>User is logged in</h2>
              
              <button onClick={logout} className='px-6 py-3 hover:outline-2 hover:outline hover:outline-white rounded-lg bg-blue-300 text-white hover:bg-transparent hover:text-blue-300'>Logout</button>
              
              {/* <button onClick={getUserDetails} className='px-6 py-3 hover:outline-2 hover:outline hover:outline-white rounded-lg bg-blue-300 text-white hover:bg-transparent hover:text-blue-300'>Get User Details</button> */}
      
          </div>
        )
  }

  export default ProfileComp