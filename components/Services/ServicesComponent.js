import React from 'react'
import Services from '../../data/Services'

const ServicesComponent = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-center text-white mb-12'>
        Our Services
      </h2>

      <div className='card-grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 p-3'>
        {Services.map((service) => {
          return (
            <div
              className='card h-full bg-black transition duration-150 ease-in-out shadow-lg shadow-gray-600 rounded-md border border-gray-700'
              key={service.id}
            >
              <div className='card-inner p-6'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-300 leading-relaxed mb-4'>
                  {service.description}
                </p>
                {/* <a href='#' className='btn btn-secondary inline-block'>
                  Learn More
                </a> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesComponent
