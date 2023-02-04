import React from 'react'

function CodeBlock({ children }:any) {
  return (
    <>
        <div className='rounded-lg w-full p-3 bg-gray-200 text-gray-700 overflow-scroll'>
            <pre className='bg-pink'>
                <code className='bg '>
                    {children}
                </code>
            </pre>
        </div>
    </>
  )
}

export default CodeBlock