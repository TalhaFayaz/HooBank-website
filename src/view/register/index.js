import React from 'react'

export default function Register() {

  return (
    <>
    <div className='md:w-full bg-[#201c29]'>
        <div className='container mx-auto px-14 py-16'>
            <div className='grid grid-cols-1'>
                <p className='text-white text-2xl font-semibold text-center py-6'>Register Account</p>
                <div className='form mx-auto'>
                    <input
                     type="text" 
                     name="username" 
                     placeholder='Username' 
                     className=' w-96 rounded bg-[#201c29] text-white border border-1 border-teal  my-2 px-5 py-3'
                     /><br/>
                     <input
                     type="email" 
                     name="email" 
                     placeholder='Email' 
                     className=' w-96 rounded bg-[#201c29] text-white border border-1 border-teal  my-2 px-5 py-3'
                     /><br/>
                    <input 
                    type="password" 
                    name="password" 
                    placeholder='Password' 
                    className='w-96 rounded bg-[#201c29] text-white border border-1 border-teal  my-2 px-5 py-3'
                    /><br/>
                    <button className='w-96 py-4 bg-[#47cdda] rounded text-gray text-md'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
