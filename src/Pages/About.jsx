import React from 'react'

const About = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8'>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">

          <img className="max-w-md w-full object-cover rounded-2xl"
            src="https://media.gq.com/photos/6813a873625bf4cbda4cb50c/1:1/w_1125,h_1125,c_limit/sneaker%20lede%20v1.png"
            alt="" />
          
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-[#DDD9FF]"></div>
          <p className="mt-8">SoleStyle serves as a go-to destination for the latest trends, offering a meticulously selected range of footwear from casual sneakers to elegant heels. </p>
          <p className="mt-4">The platform addresses common online shopping anxieties by providing detailed size guides, customer fit feedback, and multiple product viewing angles.</p>
          <p className="mt-4"> Utilizing a clean and intuitive design, SoleStyle simplifies the journey of finding the perfect pair.</p>
          <a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-green-600 to-[#7dff83] py-3 px-8 rounded-full text-white">
            <span>Read more</span>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default About