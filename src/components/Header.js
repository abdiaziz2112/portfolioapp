import { useState } from 'react';
import {FcMenu} from 'react-icons/fc';
import {GrClose} from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Header() {
  const [open,setOpen] = useState (false);

  return (
    <div className='flex items-center justify-between pt-2'>

        {/* log */}
        <div className='text-2xl font-bold'>
            <Link to="/">Abdiaziz Maashaa</Link>
        </div>
        {/* large screens nav */}
        <div className='hidden md:flex items-center gap-6 font-medium text-gray-600' >
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
            <div className='bg-blue-600 text-white hover:-translate-y-1 duration-100 px-3 py-1 rounded-lg'>
            <Link to="/">Contact</Link>
            </div>
        </div>



        {/* Small screens nav */}
        <div className={`fixed top-0 z-50 bg-white w-60 h-screen shadow-2xl ${open ? "right-0":"right-[100%]"} md:hidden flex flex-col space-y-8 font-medium text-[#000] pt-20 p-7`}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
            <div className='bg-blue-600 text-white hover:-translate-y-1 duration-100 w-24 px-3 py-1 rounded-lg'>
            <Link to="/">Contact</Link>
            </div>

        </div>


        {/* toggle btn */}
        <div className='text-2xl md:hidden z-50' onClick={()=> setOpen(!open)}>
          {
            open?(
              <GrClose className='h-7 cursor-pointer '/>
            ):(
              <FcMenu className='h-7 cursor-pointer'/>
            )
          }
          
        </div>
    </div>
  )
}

export default Header