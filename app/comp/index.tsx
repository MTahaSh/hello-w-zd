// "use client";
// import { useEffect } from 'react';
// import React, { useMemo, useState } from 'react'
// import { getZeroDevSigner, ZeroDevSigner } from '@zerodevapp/sdk'

// import { createSessionKey } from '@zerodevapp/sdk'


// import {  getRPCProviderOwner } from '@zerodevapp/sdk'
// import { ZeroDevWeb3Auth, ZeroDevWeb3AuthWithModal } from '@zerodevapp/web3auth';





// const fetchUser = async (address:string)=>{
//   const res = await fetch(`http://localhost:3000/api/auth/get-user-nonce/${address}`,{
//     cache:'no-cache'
//   })
//   return res.json();
// }


// export interface SessionPolicy {
//   to: string
//   selectors?: string[]
// }


// export interface SessionKeyData {
//   ownerAddress: string
//   ownerIndex: number
//   signature: string
//   whitelist: SessionPolicy[]
//   validUntil: number
//   sessionPrivateKey?: string
// }


// function ConnectButton() {
 


//   const [address, setAddress] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [balance, setBalance] = useState('');
//   const [contract1,setContract1] = useState('0x850490A85e60e2DAD1E8F3B5EC22f6F0998383cE')
  
//   const signUp = async (address: string) => {
//     const newUser = await fetch("http://localhost:3000/api/auth/signup", {
//             method: "post",
//             body: JSON.stringify({publicAddress: address})
//       })
//     return newUser.json()
//   }


//   const signUpFlow = async (address: string) => {
//     let nonce;
//     try {
//       const user = await fetchUser(address)
//       nonce = user.nonce;
//     }
//     catch(err){
//       const newUser = await signUp(address)
//       nonce = newUser.user.nonce
//     }
//     return nonce;
//   };

//   const setWallet = async (provider:any) => {
//     try {
//     const signer = await getZeroDevSigner({
//       projectId: "521290d5-158d-4c7c-ad44-0f08ec916144",
//       owner: await getRPCProviderOwner(provider)
//     })
//     setAddress(await signer.getAddress())
//     setBalance((await signer.getBalance()).toString())

//     try{
//       const nonce : string = await signUpFlow(address)
//       if(!nonce){
//         throw new Error('No Nonce Found');
//       }
//       const message = `My App Auth Service Signing nonce: ${nonce}`;
//       let signature = await signer.signMessage(message)
      
//       console.log("signature ", signature)
//       alert(`Your signed message: ${signature}`)

//       await login(address, signature)

//       setAddress(address)
//     }
//     catch(err){
//       console.log("err", err)
//       setAddress('')

//     }

//   }
  
//   catch (e) {

//     console.log(e)
//     setAddress('')

//   }
//   finally {
//     setLoading(false)
//   }
    
//     if (provider.isMetaMask && typeof provider.approvePlugin === 'function') {
//       // Call the approvePlugin method
//       try {
//         await provider.approvePlugin('521290d5-158d-4c7c-ad44-0f08ec916144');
//       } catch (error) {
//         // Handle the error if needed
//         console.error('Error approving plugin:', error);
//       }
//     }
    
//   }


  


//   const zeroDevWeb3Auth = useMemo(() => {
//     const instance = new ZeroDevWeb3AuthWithModal(["521290d5-158d-4c7c-ad44-0f08ec916144"])
//     instance.init({onConnect: async () => {
//       setLoading(true)
//       setWallet(zeroDevWeb3Auth.provider)
      
//       setLoading(false)
      
//     }})
//     return instance
//   }, [])

  

//   // const sessionKey = await createSessionKey(zeroDevWeb3Auth.provider, [{
//       //   to: contract1,
//       //   selectors: []
//       // }], 3000)
  
//       // console.log("Your session Key: ",sessionKey);

//   const disconnect = async () => {
//     await zeroDevWeb3Auth.logout()
//     setAddress('')
//   }

//   const login = async (address: string, signature: string) => {
//     const newUser = await fetch("http://localhost:3000/api/auth/login", {
//           method: "post",
//           body: JSON.stringify({publicAddress: address, signature})
//     })
//     return newUser.json()
//   };

  
//   // useEffect(() => {
//   //   // Move the init function inside useEffect
//   //   if (zeroDevWeb3Auth) {
//   //     zeroDevWeb3Auth.init({
//   //       onConnect: async () => {
//   //         setLoading(true);
//   //         setWallet(zeroDevWeb3Auth.provider);
//   //         setLoading(false);
//   //       },
//   //     });
//   //   }
//   // }, [zeroDevWeb3Auth]);

//   const handleClick = async () => {
//     setLoading(true)
//     zeroDevWeb3Auth.connect('social').then((provider:any) => {
//       setWallet(provider)
//     }).finally(() => {
//       setLoading(false)
//     })

    
//   }

//   const connected = !!address
//   return (
//     <div>
//       {connected && 
//         <div  >
//           <label>Wallet: {address}</label>
//           <br />
//           <label>Balance: {balance}</label>
//         </div>
//       }
//       <div className='flex '>
//         {!connected && <button className='bg-blue-500 p-4 rounded-lg m-5 hover:bg-transparent hover:text-blue-300 hover:border-2 hover:border-white hover:border-solid ' onClick={handleClick} disabled={loading}>{ loading ? 'loading...' : 'Create Wallet'}</button>}
//         {connected && 
//           <button className='bg-red-500 p-4 rounded-lg m-5 hover:bg-transparent hover:text-red-500 hover:border-2 hover:border-white hover:border-solid ' onClick={disconnect} disabled={loading}>Disconnect</button>
//         }
//       </div>
//     </div>
//   )
// }

// export default ConnectButton