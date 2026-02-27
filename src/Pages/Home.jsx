import React from 'react'
import Benefits from '../Components/Benefits'
import FeatureCategories from '../Components/FeatureCategories'

const Home = () => {
  return (
    <div>
    <div className='px-20 py-5'>
      <section className='
        relative
        px-20 
        py-16 
        min-h-150 
        rounded-2xl 
        bg-[url("https://cdn.pixabay.com/photo/2019/05/10/04/45/shoes-4192767_640.jpg")] 
        bg-cover 
        bg-center
        flex 
        items-center
      '>

        {/* Dark Overlay */}
        <div className='absolute inset-0 rounded-2xl bg-linear-to-r from-black/50 to-transparent'></div>

        {/* Content */}
        <div className='relative z-10 text-white max-w-2xl'>
          <p className='text-sm text-black font-semibold mb-2 px-2 py-1 bg-green-400 rounded-full inline-block '>New Season Drop</p>

          <h1 className='text-6xl font-extrabold leading-tight'>
            STEP INTO <br /> FUTURE STYLE
          </h1>

          <p className='mt-6 text-lg text-gray-200'>
            Experience the ultimate comfort and revolutionary<br/>
            design with our latest premium collection<br/>
            engineered for urban movement.
          </p>

          <div className='mt-8 flex gap-4'>
            <button className=' text-black px-8 py-3 rounded-3xl font-bold bg-green-400'>
              Shop Now
            </button>

            <button className='border px-6 py-3 rounded-3xl font-bold bg-white/30'>
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </div>
    <Benefits/>
    <FeatureCategories/>
    </div>
  )
}

export default Home