import React from 'react'

function Hero() {
  return (
    
    <div>

      <section className="bg-[url(./assets/head.png)] h-full w-full bg-cover bg-center ">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-xl w-auto font-bold leadi sm:text-5xl">Find Your Ultimate Daily Routine and Make It Stake
		</h1>

		<p className="px-8 mt-8 mb-12 text-lg">This visualization exercise puts you face-to-face with an impassable wall the wall of your doubts, fears, and limitations and shows you that the only way to break through is to dismantle it brick by brick.</p>
		<div className="flex flex-wrap justify-center">
        <button type="button" class="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-8 py-3 m-2 text-center dark:bg-amber-400 dark:hover:bg-amber-400 dark:focus:ring-amber-400"> Start Your Jounery </button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
		</div>
	</div>
</section>
    </div>
  )
}

export default Hero
