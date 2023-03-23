import Testmnials from '../assets/testemonials.json'

function Testmonials() {
  return (
    <div>
        <div className='text-center text-3xl mt-16 text-gray-600'>
            <h1>What we said our clients</h1>
        </div>
        {/* testmonials */}
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 w-full bg-white'>
          {
            Testmnials.map((client =>(
                <div key={client.id} className='rounded-3xl shadow-md p-10'>
                    {/* top */}
                    <div className='flex items-center'>
                        <img src='client.img' alt='img' className='w-12 h-12 rounded-full object-cover'/>
                        <p className='ml-5 space-y-0 text-base'>
                            <a href={client.link} className='text-md font-bold'>{client.name}</a>
                            <p className='text-gray-500 text-sm -mt-4 font-normal'>{client.nickname}</p>
                        </p>
                       
                    </div>
                    {/* bottom */}
                    <div>
                        <h1>{client.desc}</h1>
                    </div>
                </div>

            )))
          }
        </div>
    </div>
  )
}

export default Testmonials