import React from 'react'
import stress from "../assets/stress.png"

const Pages1 = () => {
  return (
    <div className="bg-white ">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40" id='stress'>
            <div className="flex-1 space-y-4 sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold text-black">
                    Stress & Anxiety
                </h1>
                <p className="max-w-xl leading-relaxed text-black sm:mx-auto lg:ml-0">
                When we meditate, we inject far-reaching and long-lasting benefits into our lives: We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate..
                </p>
                <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <a
                        href="javascript:void(0)"
                        className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md"
                    >
                        Try Now
                    </a>
                  
                </div>
            </div>
            <div>
                <img
                    src={stress}
                    className="w-56 mx-auto mt-6 sm:w-10/12 lg:w-64"
                />
            </div>

          

        </section>
    </div>

);
}

export default Pages1