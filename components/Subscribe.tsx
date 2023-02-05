import React from 'react'
import Link from 'next/link'

const Subscribe = () => {
  return (
    <div className="container mb-8 p-4 py-12 md:p-24 text-center shadow-lg rounded-lg bg-green-200 bg-opacity-80">
        <h2 className="font-semibold break-normal text-3xl md:text-3xl">Subscribe to ZED.CODES</h2>
        <h3 className="font-bold break-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
        <div className="w-full text-center pt-4">
            <form>
                <div className="grid grid-cols-12 gap-2">
                    <input type="email" placeholder="youremail@example.com" className="col-span-8 appearance-none rounded-full shadow p-3 text-gray-600 mr-2 focus:outline-none"/>
                    <button 
                      type='button' 
                      className='col-span-4 transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white text-center px-3 py-3 cursor-pointer'>
                          Subscribe
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe