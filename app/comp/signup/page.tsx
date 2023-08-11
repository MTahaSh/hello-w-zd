
import React from 'react'
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';
import SignUp from './SignUp';


const page = () => {
  

  <SignUp/>
// const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const handleSubmit = async (event:any) => {
//     event.preventDefault(); // Prevent default form submission

//     try {
//       if(formData.email.length > 0 && formData.password.length > 0)
//       {
//        setLoading(true); 
//       const  response = await fetch('/api/auth/web2signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
    
//       if (response.ok) {
//         // The API call was successful
//         const responseData = await response.json()
//         console.log('API Response:', responseData);

//         if(responseData.status === "alreadyExist")
//         {
//           toast.error("Email already registered!");
//         }
//         else {
//         toast.success("Sign Up successful");
//         router.push("/comp/signin");
//         }
//         // Perform any necessary actions with the API response data
//       } else {
//         // Handle API errors
//         console.error('API Error:', response.statusText);
//       }
//     }
//     else{
//       toast.error("Please fill the form");
//     }
//     } catch (error) {
//       console.error('Fetch Error:', error);
//       toast.error("Please recheck email & password!")
//     }
//     finally{
//       setLoading(false);
//     }

    
//   };

 
  
//   const handleInputChange = (event:any) => {
//   const { name, value } = event.target;
//   setFormData((prevData:any) => ({
//     ...prevData,
//     [name]: value,
//   }));
//   };
  


//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
//       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                   {`${loading?"Processing":"Create and account"}`}
//               </h1>
//               <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method='post'  >
//                   <div>
//                       <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                       <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
//                   </div>
//                   <div>
//                       <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                       <input type="password" name="password" id="password" value={formData.password}
//         onChange={handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                   </div>
                 
//                   <div className="flex items-start">
//                       <div className="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
//                       </div>
//                       <div className="ml-3 text-sm">
//                         <label  className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
//                       </div>
//                   </div>
//                   <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none hover:outline hover:outline-gray-600 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
//                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                       Already have an account? <a href="/comp/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//                   </p>
//               </form>
//           </div>
//       </div>
//   </div>
// </section>
//   )
}

export default page