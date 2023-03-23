

import { BsGithub, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import image from '../assets/cover.jpeg'
import Services from './Services'
import Testmonials from './Testmonials'
function Showcase() {
  return (
    <>
    <div className='flex flex-col-reverse sm:flex-row mt-24 items-center justify-between'>
        {/* left */}
        <div className='space-y-8 text-center sm:text-left'>
            <h1 className='font-bold text-gray-800 text-3xl'>Abdiaziz Ahmed</h1>
            <p className='text-gray-600 text-xl'>I am frontend developer <br/> with 3 years expreince</p>
            {/* social links */}
            <div className='flex space-x-4 text-center justify-center sm:justify-start'>
                <h1 className='cursor-pointer text-2xl transition-all text-green-600 hover:text-green-500'>
                 <Link to=''><BsWhatsapp/></Link>
                </h1>
                <h1 className='cursor-pointer text-2xl transition-all text-gray-900 hover:text-gray-700'>
                 <Link to='//github.com/abdiaziz2112'><BsGithub/></Link>
                </h1>
                <h1 className='cursor-pointer text-2xl transition-all  text-yellow-600 hover:text-yellow-500'>
                 <Link to=''><BsInstagram /></Link>
                </h1>
            </div>
            <button className='bg-blue-500 text-white p-2 rounded-lg hover:translate-t-3 duration-100'>
                <a href='resume.pdf' download={true}>Dowload resume</a>
            </button>
        </div>

        {/* right */}
        <div className='w-80 mb-10 sm:m-0'>
            <img src={image} alt=''className='rounded-t-full object-cover'/>
        </div>
    </div>
    <br/>
    <Services/>
    </>
  )
}

export default Showcase