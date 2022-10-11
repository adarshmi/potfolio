import React from "react"
import { InlineWidget } from "react-calendly"
import { NextPage } from 'next'
import Head from 'next/head'

const Connect: NextPage = () => {
    return (
        <>
          <Head>
              <title>Adarsh Gautam</title>

              <meta name="viewport" content="width=device-width, initial-scale=1" />             
              <meta name="Description" content="Connect with me for discussing great ideas...!" />
          </Head>
          <section className="max-w-3xl w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-48 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-bold mb-5   dark:text-white text-black">Let&apos;s Connect.</h2>
                <p className="mt-3 mb-6 md:mb-8 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full max-w-2xl text-base md:text-lg font-medium ">Schedule a 30 minutes call with me via Google meet.</p>
            </div>
            <div className="">
               <InlineWidget 
                  styles={{ height: '900px', width: '80%', margin: 'auto' }}
                  pageSettings={{ textColor: '#B8C1EC', primaryColor: '#B8C1EC' }}
                  url="https://calendly.com/adarshmi1234/15min"/>
            </div>
          </section>
            

        </>
    )
}
export default Connect