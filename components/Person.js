import React from 'react'
import Image from 'next/image'

function Person({image, name, title, desc}) {
  return (
	<div className='bg-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center overflow-hidden w-full  md:w-2/3 border-2 border-gray-600'>
		<div className='m-6 overflow-hidden'>
			<Image className='rounded-xl border-2 border-black' src={image} width={350} height={450}></Image>
		</div>

		<div className='flex flex-col justify-center items-end w-7/12 pb-12 md:pt-12 md:px-12'>
			<h1 className=' text-3xl font-covesb font-bold justify-self-start'>{name}</h1>
			<hr className='w-full border-[.5px] border-black'></hr>

			<h2 className='text-slate-500 text-xl font-covesb'>{title}</h2>
			<p>{desc}</p>
		</div>
	</div>
  )
}

export default Person