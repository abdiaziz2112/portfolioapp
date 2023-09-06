import { FaLinkedin, FaGithub, FaFacebook, FaTiktok, FaReact, FaNodeJs} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';
import {SiMongodb} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import img from '../assets/cover.png'
const About = () => {
  return (
    <div className='bg-gray-100 py-10 px-6 md:py-20 md:px-32 lg:px-48'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-center md:text-left'>
          About Me
        </h1>
        <div className='flex flex-col sm:flex-row '>
          <div className='flex-shrink-0 w-64 mb-4 md:mb-0 md:mr-6 border-neutral-800'>
            <img
              src={img}
              alt='profile'
              className='rounded-full w-full'
            />
          </div>
          <div className='flex-1'>
            <h1 className='font-bold'></h1>
            <p className='text-lg mb-6'>
              Hello there! My name is Abdiaziz Ahmed and I'm CEO of MarketMind Technolgy Solutions based in Somalia country specially Mogadishu City. We are highly experienced virtual assistants who can help you with a wide range of tasks, from administrative to creative. We are reliable and efficient, and we will help you regain control of your life and career
            </p>
            <div className='flex justify-evenly bg-slate-100 shadow-md p-3'>
                <h1><GiSkills className='text-blue-600'/> Skills</h1>
              <span className='mr-4'
              >
                <IoLogoJavascript className='w-6 h-6 text-yellow-500 hover:text-yellow-400 transition-colors duration-300' />
              </span>
              <span className='mr-4'>
                <FaReact className='w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300' />
              </span>
              <a className='mr-4'>
                <FaNodeJs className='w-6 h-6 text-green-600 hover:text-green-500 transition-colors duration-300' />
              </a>
              <span>
                <SiMongodb className='w-6 h-6 text-green-500 hover:text-green-400 transition-colors duration-300' />
              </span>
            </div>
            <br/>
            <p className='text-lg mb-6'>
              In my free time, I enjoy hiking, playing guitar, and reading about
              the latest technolgy trends. You can connect with me on one of the  social media platforms 
              using the icons below.
            </p>
            <div className='flex '>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='mr-4'
              >
                <FaLinkedin className='w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-300' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='mr-4'
              >
                <FaGithub className='w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-300' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='mr-4'
              >
                <FaFacebook className='w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-300' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                <FaTiktok className='w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-300' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
