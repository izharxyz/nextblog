import React from 'react'
import Link from 'next/link'

const Subscribe = () => {
  return (
    <div className="container text-left">
        <h2 className="text-xl mb-2 font-semibold">Subscribe to ZED.CODES</h2>
        <h3 className="mb-2">Get the latest posts delivered right to your inbox</h3>
        <div className="w-full text-left pt-4">
            <form>
                <div className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="name" className="col-span-1 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"/>
                    <input type="email" placeholder="email" className="col-span-1 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"/>
                    <div className='col-span-1'>
                      <button 
                        type='button' 
                        className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white text-center px-8 py-3 cursor-pointer'>
                            Subscribe
                      </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe