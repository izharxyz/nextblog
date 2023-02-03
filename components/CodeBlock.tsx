import React from 'react'

function CodeBlock({ children }:any) {
  return (
    <>
        <div className='rounded-lg w-full px-2 bg-[#D3D3D3] text-gray-700'>
            <code className='break-words whitespace-pre-wrap'>
                {children}
            </code>
        </div>
    </>
  )
}

export default CodeBlock