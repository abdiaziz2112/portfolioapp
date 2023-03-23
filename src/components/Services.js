import { FaUserGraduate} from 'react-icons/fa';
import services from '../assets/services.json';


function Services() {
  
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            services.map(service =>(
              <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
               
                
                <div className=" w-0 flex-1">
                <div className="flex justify-center mb-4 ">
                <img src={service.id} alt="" style={{
                  width:'100%',
                  height:'100%',
                  justifyContent:'center',
                  borderRadius:'7px'
                }}/>
                </div>
                  <h1 className="text-s text-2xl font-medium text-gray-500 ">
                  {service.title}
                  </h1>
                  <p className="mt-1   text-gray-900">
                  {service.desc}
                  </p>
                  <div className="flex sm:flex-row items-center justify-around">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                     <a href='#'><s className='font-semibold text-xl text-red-300'>{service.Orginalprice}</s></a>
                     <a href='#'>  {service.disprice}</a>
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2">
                    <a href='https://abdiaziz.netlify.app/'>{service.order}</a>
                    </button>
                  </div>
                </div> {/* services end here */}
              </div>
            </div>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default Services;
