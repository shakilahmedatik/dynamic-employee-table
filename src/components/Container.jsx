import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24'>
      {children}
    </div>
  )
}

export default Container
