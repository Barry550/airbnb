import React from 'react'

export default function Footer() {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb work</p>
            <p>Newsroom</p>
            <p>Invertors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>this is not a real site</p>
            <p>Invertors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Papa head</p>
            <p>present</p>
            <p>Invertors</p>
            <p>Airbnb less</p>
            <p>Luxe Home</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Newsroom</p>
            <p>Invertors</p>
            <p>Airbnb Plus</p>
            <p>For the win</p>
        </div>
    </footer>
  )
}
