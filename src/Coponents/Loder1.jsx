import React from 'react'
import  mind from "../assets/mindfullness.png"

const Loder1 = () => {
  return (
    <div>
    <div className="bg-white ">
         <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">

         <div>
                 <img
                     src={mind}
                     className="w-74 mx-auto mt-6 sm:w-10/12 lg:w-60"
                 />
             </div>

             <div className="flex-1 space-y-4 sm:text-center lg:text-left" id='mind'>
                 <h1 className="text-4xl font-bold text-black px-16" >
                     Mindfullness
                 </h1>
                 <p className="max-w-6xl leading-relaxed text-black sm:mx-auto lg:ml-0 px-12">
                 When we meditate, we inject far-reaching and long-lasting benefits into our lives: We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves.  quae consequuntur. Distinctio quibusdam, harum minus ducimus beatae ad est porro vero quae...
                 </p>
                 <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start px-16">
                     <a
                         href="javascript:void(0)"
                         className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md "
                     >
                         Try Now
                     </a>
                   
                 </div>
             </div>

            

           

         </section>
     </div>
 </div>
  )
}

export default Loder1