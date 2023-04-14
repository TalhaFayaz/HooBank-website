import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../landing/index.css'
import NumberCounter from 'number-counter'

import cover from '../../assets/cover.png'
import Discount from '../../assets/Discount.svg'
import check from '../../assets/check.svg'
import teleg from '../../assets/teleg.svg'
import star from '../../assets/star.svg'
import stats from '../../assets/stats.svg'
// import exchange from '../../../assets/exchange.svg'
import androidStore from '../../assets/androidStore.png'
import appleStore from '../../assets/applestore.png'
import colons from '../../assets/colons.png'
import client1 from '../../assets/client1.svg'
import airbnb from '../../assets/airbnb.svg'
import binance from '../../assets/binance.svg'
import coinbase from '../../assets/coinbase.svg'
import dropbox from '../../assets/dropbox.svg'


import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';


export default function Home() {

  const [coinData, setCoinData] = useState(null)

 const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
 

 useEffect(()=>{
      axios.get(url)
      .then((response)=>{
        setCoinData(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
 }, [])

 console.log(coinData)

//  if (!coinData) return null

  
  return (
    <>
    <div className='md:w-full bg-[#201c29] '>
   <div className='container mx-auto px-14'>
     <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 py-7 '>
       <div className='col-span-1'>
         <div className='flex items-center gap-1 text-white bg-[#272727] py-1 px-3 rounded-xl drop-shadow-2xl md:w-96 '>
           <span>
             <img src={Discount} alt="" />
           </span>
           <span className='text-slate-400'>20% DISCOUNT FOR</span> 1 MONTH <span className='text-slate-400'>ACCOUNT</span>
         </div>
         <h1 className='text-white text-5xl font-semibold'>The Next <br />
           <span className='text-[#00F6FF] '>Generation </span>
           <br /> Payment Method
         </h1>
         <p className='text-slate-200 pt-5 pr-36 leading-10 mb-7	'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examne annual percentage rates, annual fees.</p> {/* <a className='text-xl text-white py-2 px-6  rounded bg-gradient-to-r from-[#00F6FF] to-[#00F6FF]'>Get Started</a> */}
       </div>
       <div className='col-span-1'>
         <img className='' src={cover} alt="" />
       </div>
     </div>
   </div> {/* Counter start*/} <div className='w-full py-8'>
     <div className='container mx-auto px-16'>
       <div className='grid grid-cols-1 md:grid-cols-3  '>
         <div className='col-span-1'>
           <div className='flex gap-6 items-center '>
           <NumberCounter  start={70} delay={9} end={135} className="increment text-white text-3xl font-bold"  postFix="+"/>
             <p className='text-xl text-[#00F6FF]'>USER ACTIVE</p>
           </div>
         </div>
         <div className='col-span-1'>
           <div className='flex gap-6 items-center'>
           <NumberCounter  start={44} delay={9} end={66} className="increment text-white text-3xl font-bold"  postFix="+"/>
             <p className='text-xl text-[#00F6FF]'>TRUSTED BY COMPANY</p>
           </div>
         </div>
         <div className='col-span-1'>
           <div className='flex gap-6 items-center'>
           <NumberCounter  start={22} delay={6} end={37} className="increment text-white text-3xl font-bold"  postFix="M"/>
             <p className='text-xl text-[#00F6FF]'>TRANSACTION</p>
           </div>
         </div>
       </div>
     </div>
   </div> {/* Counter end*/} <div className='w-full py-6'>
     <div className='container mx-auto px-14'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         <div className='col-span-1'>
           <h1 className='text-white text-3xl font-semibold'> You do the business, we’ll handle the money.</h1>
           <p className='text-slate-200 pt-5 pr-36 leading-10 mb-7	'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
           <a className='text-lg  py-3 px-6  rounded bg-gradient-to-r from-[#00F6FF] to-[#00F6FF] '>Get Started</a>
         </div>
         <div className='col-span-1'>
           <div className='flex gap-4 px-6 py-4 rounded-xl drop-shadow-2xl hover:bg-gradient-to-r hover:from-slate-400 hover:to-black-500 my-4 '>
             <img src={check} alt="" />
             <div>
               <p className='text-2xl text-white '>Reward</p>
               <p className='text-slate-300'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
             </div>
           </div>
           <div className='flex gap-4 px-6 py-4 rounded-xl drop-shadow-2xl bg-gradient-to-r from-slate-600 to-black-500 border-slate-900 border-1 my-4 hover'>
             <img src={star} alt="" />
             <div>
               <p className='text-2xl text-white'>100% Secured</p>
               <p className='text-slate-300'>We take proactive steps make sure your information and transactions are secure.</p>
             </div>
           </div>
           <div className='flex gap-4 px-6 py-4 rounded-xl drop-shadow-2xl my-4 hover:bg-gradient-to-r hover:from-slate-400 hover:to-black-500 transition ease-in-out delay-150'>
             <img src={teleg} alt="" />
             <div>
               <p className='text-2xl text-white'>Balance Transfer</p>
               <p className='text-slate-300 text-xl'>A balance transfer credit card can save you a lot of money in interest charges.</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div> 
   {/* exchange starts */} 
   {/* <div className='w-full py-14'>
     <div className='container mx-auto px-14'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
         <div className='col-span-1'>
           <img src={exchange} alt="" />
         </div>
         <div className='col-span-1'>
           <h1 className='text-white text-3xl font-semibold'>Easily control your <br /> billing & invoicing. </h1>
           <p className='text-slate-200 pt-5 pr-36 leading-10 mb-7 text-xl'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
           <div className='flex gap-3'>
             <img src={androidStore} alt="" />
             <img src={appleStore} alt="" />
           </div>
         </div>
       </div>
     </div>
   </div> */}
   <div className='w-full py-14'>
     <div className='container mx-auto px-14 my-24'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
         <div className='col-span-1'>
               {/* top card starts */}
               <div className='card px-12 py-4  rounded-2xl bg-gradient-to-br from-gray-700 to-black-300 drop-shadow-2xl absolute -mt-32 ml-56 z-10'>
             <p className='text-xl font-semibold text-white text-center'>Convert Your Coins</p>
                <select className='w-full rounded bg-zinc-800 text-white border  my-2 px-2'>
                  
                  <option>{coinData?.[0]?.name}</option>
                  <option>{coinData?.[1]?.name}</option>
                  <option>{coinData?.[2]?.name}</option>
                </select><br/>
                <input type="text" placeholder='1 USD' className='rounded bg-zinc-800 text-white border border-1 border-teal  my-2 px-2'/><br/>
                <input type="text" placeholder='26,816.00 BTC' className='rounded bg-zinc-800 text-white border my-2 px-2 '/><br/>
                <button type="submit" className='w-full bg-[#47cdda] rounded text-gray text-md'>Calculate</button>
                
           </div>
           {/* top card end */}
           <div className='card px-12 py-8 mt-6 rounded-2xl bg-gradient-to-br from-slate-700 to-black-500 shadow-2xl w-96 relative '>
             <p className='text-xl font-semibold text-[#00F6FF] text-left'>Latest Coin Prices</p>
             <div className='flex justify-between items-center py-5'>
               <div className='flex items-center gap-3 '>
                 <img className='w-8 ' src={coinData?.[0]?.image} alt="" />
                 <p className='text-white font-semibold text-xl'>{coinData?.[0]?.name}</p>
               </div>
               <div className=' '>
                 <p className='text-white text-lg'>{coinData?.[0].current_price.toLocaleString()} USD </p> 
                 {coinData?.[0].price_change_percentage_24h < 0 ?  ( 
                 <span className='red '>
                   <BsArrowDownShort className='inline-block text-2xl' /> 
                   {coinData?.[0].price_change_percentage_24h.toFixed(2)} %
                 </span> ) : 
                 ( <span className='green'>
                   <BsArrowUpShort className='inline-block text-2xl' />
                    {coinData?.[0].price_change_percentage_24h.toFixed(2)} %
                 </span> )}
               </div>
             </div>
             <div className='flex justify-between items-center py-5'>
               <div className='flex items-center gap-3'>
                 <img className='w-8 ' src={coinData?.[1]?.image} alt="" />
                 <p className='text-white font-semibold text-xl'>{coinData?.[1]?.name}</p>
               </div>
               <div className=' '>
                 <p className='text-white text-lg'>{coinData?.[1].current_price.toLocaleString()} USD </p>
                  {coinData?.[1].price_change_percentage_24h <   0 ? ( 
                  <span className='red '>
                   <BsArrowDownShort className='inline-block text-2xl' /> 
                   {coinData?.[1].price_change_percentage_24h.toFixed(2)} %
                 </span> ) : 
                 ( <span className='green'>
                   <BsArrowUpShort className='inline-block text-2xl' />
                    {coinData?.[1].price_change_percentage_24h.toFixed(2)} %
                 </span> )}
               </div>
             </div>
             <div className='flex justify-between items-center py-5'>
               <div className='flex items-center gap-3'>
                 <img className='w-8 ' src={coinData?.[2]?.image} alt="" />
                 <p className='text-white font-semibold text-xl'>{coinData?.[2]?.name}</p>
               </div>
               <div className=' '>
                 <p className='text-white text-lg'>{coinData?.[2].current_price.toLocaleString()} USD</p>
                  {coinData?.[2].price_change_percentage_24h < 0 ? (
                     <span className='red '>
                   <BsArrowDownShort className='inline-block text-2xl' />
                    {coinData?.[2].price_change_percentage_24h.toFixed(2)} %
                 </span> ) : 
                 ( <span className='green'>
                   <BsArrowUpShort className='inline-block text-2xl' /> 
                   {coinData?.[2].price_change_percentage_24h.toFixed(2)} %
                 </span> )}
               </div>
             </div>
             {/* top card starts */}
             {/* <div className='card px-12 py-8 mt-6 rounded-2xl bg-gradient-to-br from-slate-700 to-black-500 shadow-2xl w-96 absolute '>
             <p className='text-2xl font-semibold text-white text-center'>Convert Your Coins</p>
             <div className='flex justify-between items-center py-5'>
            
             </div>    
           </div> */}
           {/* top card end */}
           </div>
         </div>
         <div className='col-span-1'>
           <h1 className='text-white text-3xl font-semibold'>Get Latest Exchange Rates</h1>
           <p className='text-slate-200 pt-5 pr-36 leading-10 mb-7 text-xl'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
           <div className='flex gap-3'>
             <img src={androidStore} alt="" />
             <img src={appleStore} alt="" />
           </div>
         </div>
       </div>
     </div>
   </div>
    {/* exchange ends */} {/* Payment Method Starts */} <div className='w-full py-14'>
     <div className='container mx-auto px-14'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
         <div className='col-span-1'>
           <h1 className='text-white text-3xl font-semibold'>Find a better card deal <br /> in few easy steps. </h1>
           <p className='text-slate-200 pt-5 pr-36 leading-10 mb-7	text-xl'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
         </div>
         <div className='col-span-1'>
           <img src={stats} alt="" />
         </div>
       </div>
     </div>
   </div> {/* payment method ends */} {/* Testimonials starts */} <div className='w-full py-14'>
     <div className='container mx-auto px-14'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
         <div className='col-span-1'>
           <h1 className='text-white text-3xl font-semibold'>What people are <br /> saying about us </h1>
         </div>
         <div className='col-span-1'>
           <p className='text-slate-200 pt-5 pr-36 leading-10 mb-7	text-xl '>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
         </div>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-3 my-6'>
         <div className='col-span-1 mx-5'>
           <div className='card px-12 py-8 mt-6 rounded-2xl bg-gradient-to-b from-slate-500 to-black-500 shadow-2xl'>
             <img src={colons} alt="" className='py-7' />
             <p className='text-white text-xl'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
             <div className='flex gap-4 pt-4'>
               <img src={client1} alt="" />
               <div>
                 <p className='text-xl text-white'>Herman Jensen</p>
                 <p className='text-slate-300 text-md'>Founder & Leader</p>
               </div>
             </div>
           </div>
         </div>
         <div className='col-span-1 mx-5'>
           <div className='card px-12 py-8 mt-6 rounded-2xl bg-gradient-to-b from-slate-500 to-black-500 shadow-2xl'>
             <img src={colons} alt="" className='py-7' />
             <p className='text-white text-xl'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
             <div className='flex gap-4 pt-4'>
               <img src={client1} alt="" />
               <div>
                 <p className='text-xl text-white'>Herman Jensen</p>
                 <p className='text-slate-300 text-md'>Founder & Leader</p>
               </div>
             </div>
           </div>
         </div>
         <div className='col-span-1 mx-5'>
           <div className='card px-12 py-8 mt-6 rounded-2xl bg-gradient-to-b from-slate-500 to-black-500 shadow-2xl'>
             <img src={colons} alt="" className='py-7' />
             <p className='text-white text-xl'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
             <div className='flex gap-4 pt-4'>
               <img src={client1} alt="" />
               <div>
                 <p className='text-xl text-white'>Herman Jensen</p>
                 <p className='text-slate-300 text-md'>Founder & Leader</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div> {/* Testimonials ends */} {/* sponsors starts */} <div className='w-full py-8'>
     <div className='container mx-auto px-14'>
       <div className='grid md:flex items-center justify-between gap-4 px-14 '>
         <img src={airbnb} alt="" />
         <img src={binance} alt="" />
         <img src={coinbase} alt="" />
         <img src={dropbox} alt="" />
       </div>
     </div>
   </div> {/* sponsors ends */} {/* CTA starts */} <div className='w-full py-14'>
     <div className='container mx-auto px-14'>
       <div className=' px-12 py-8 mt-6 rounded-2xl bg-gradient-to-b from-slate-500 to-black-500 shadow-2xl'>
         <div className='flex justify-between py-12 items-center px-6'>
           <div>
             <p className='text-5xl text-white font-bold'>Let’s try our service now!</p>
             <p className='text-xl text-white'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
           </div>
           <div>
             <button className='text-lg  py-3 px-6  rounded bg-gradient-to-r from-[#00F6FF] to-[#00F6FF]'>Get Started</button>
           </div>
         </div>
       </div>
     </div>
   </div> {/* CTA ends */}
 </div>
      
      
    </>
 
  )
}
