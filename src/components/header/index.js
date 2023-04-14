import React from 'react'
import logo from '../../assets/logo.svg'

export default function Header() {
  // const [navbar , setnavbar] = useState(false)

  const navLinks = [
    {
      id:1,
      link:"Home"
    },
    {
      id:2,
      link:"About us"
    },
    {
      id:3,
      link:"Feature"
    },
    {
      id:4,
      link:"Solutions"
    },
    {
      id:5,
      link:"Contact"
    },
    {
      id:6,
      link:"Login",
    }
  ]
  return (
    <>
    <div className='md:w-full bg-[#201c29] py-4 '>
        <div className='container mx-auto px-14 md:flex justify-between'>
            <div className='md:flex gap-2'>
            <img src={logo} alt=""/>
            <p className='text-white text-2xl font-semibold'>Hoo<span className='text-[#00F6FF]'>Bank</span></p>
            </div>
            <div>
                <ul className='flex text-white'>
                  {
                    navLinks.map(({id,link})=>(
                      <li key={id} 
                      className='px-6 text-slate-300'>
                        {link}
                      </li>
                    ))
                  }
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
