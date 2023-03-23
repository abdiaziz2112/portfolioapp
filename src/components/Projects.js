import projects from '../assets/projects.json'
import Testmonials from './Testmonials'

function Projects() {
  return (
    <>
    <div>

      {/* Title and subTitle */}
      <div className='px-4 mt-2'>
        <h1 className='text-4xl md:text-6xl text-gray-700'>Some of my projects 🎯</h1>
        <p className='text-base pt-7 text-gray-700'>
          Here are some of my projects i have done past years.
        </p>
      </div>
      {/* projects from json */}
      <div>
        {
          projects.map((project) =>(
            <div>
              <h1>{project.id}</h1>

            
            </div>
          ))
        }
      </div>
    
      
    </div>
    <Testmonials/>
    </>
  )
}

export default Projects