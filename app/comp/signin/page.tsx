"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const page = () => {

    const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault(); // Prevent default form submission

    try {
      if(formData.email.length > 0 && formData.password.length > 0)
      {
        setLoading(true);
      const  response = await fetch('/api/auth/web2signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        // The API call was successful
        const responseData = await response.json()
        if(responseData.success)
        {
         toast.success("Login Successfull");
         router.push("/comp/Profile");
        } 
        else {
          toast.error("Incorrect Email or Password!")
        }
        console.log('API Response:', responseData);
        // Perform any necessary actions with the API response data
      } 
      
      
      else {
        // Handle API errors
        console.error('API Error:', response.statusText);
        toast.error("Incorrect");
      }
    }
    else {
      toast.error("You are required to fill the data")
    }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast.error("Some Error")
    }
    finally{
      setLoading(false);
    }

    
  };

 
  
  const handleInputChange = (event:any) => {
  const { name, value } = event.target;
  setFormData((prevData:any) => ({
    ...prevData,
    [name]: value,
  }));
  };


  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {`${loading?"Singing in!!":"Sign in to your account"}`}
              </h1>
              <form onSubmit={handleSubmit}  className="space-y-4 md:space-y-6" method='POST' >
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input  name="email" value={formData.email} onChange={handleInputChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" value={formData.password} onChange={handleInputChange}  id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none hover:outline hover:outline-gray-600 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Do not have an account yet? <a href="/comp/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
 

export default page

