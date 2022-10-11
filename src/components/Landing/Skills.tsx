import React from 'react'
import Skillscard from './Skillscard'
import { skillsData } from '@src/data/data'

const Skills = () => {
  return(
      <section className="">
          <div className="text-left mt-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-5   dark:text-white text-black">Tech Stack</h2>
             <p className="mt-3 mb-6 md:mb-8 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full max-w-2xl text-base md:text-lg font-medium ">
                 A list of my favorite tools and technologies that I use on a regular basis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
              {skillsData?.map(({name, image, link })=>(
                  <Skillscard key={name} name={name} image={image} link={link} />
              ))}
          </div>
      </section>
  )
}

export default Skills