import React from 'react'
import ftrlogo from '../../assets/ftrlogo.svg'
import lnkd from '../../assets/lnkd.png'
import fb from '../../assets/fb.png'
import twtr from '../../assets/twtr.png'


export default function Footer() {
  return (
    <>
     <div className='md:w-full bg-[#201c29] '>
        <div className='container mx-auto px-14 '>
        <div className='grid grid-cols-4 gap-6 py-8'>
        <div className='col-span-1'>
            <img src={ftrlogo} alt=""/>
            <p className='text-white text-lg py-4 pr-4'>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='col-span-1'>
            <p className='text-lg text-white font-semibold py-2'>Usefull Links</p>
            <ul>
                <li className='text-slate-400 text-md py-1'>Content</li>
                <li className='text-slate-400 text-md py-1'>How it Works</li>
                <li className='text-slate-400 text-md py-1'>Create</li>
                <li className='text-slate-400 text-md py-1'>Explore</li>
                <li className='text-slate-400 text-md py-1'>Terms and Services</li>
            </ul>
        </div>
        <div className='col-span-1'>
        <p className='text-lg text-white font-semibold py-2'>Communiyt</p>
            <ul>
                <li className='text-slate-400 text-md py-1'>Help Center</li>
                <li className='text-slate-400 text-md py-1'>Partners</li>
                <li className='text-slate-400 text-md py-1'>Suggestions</li>
                <li className='text-slate-400 text-md py-1'>Blog</li>
                <li className='text-slate-400 text-md py-1'>Newsletters</li>
            </ul>
        </div>
        <div className='col-span-1'>
        <p className='text-lg text-white font-semibold py-2'>Partenr</p>
            <ul>
                <li className='text-slate-400 text-md py-1'>Our Partner</li>
                <li className='text-slate-400 text-md py-1'>How it Works</li>
                <li className='text-slate-400 text-md py-1'>Become a Partner</li>
         
            </ul>
        </div>
    </div>
    <div className='py-4'>
        <hr className='w-full h-1 mx-auto '></hr>
        <div className='flex justify-between items-center'>
            <p className='text-slate-400 py-3 '>Copyright © 2021 HooBank. All Rights Reserved.</p>
            <div className='flex items-center gap-4'>
                <img src={fb} alt=""/>
                <img src={twtr} alt=""/>
                <img src={lnkd} alt=""/>
            </div>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}
