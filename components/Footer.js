
import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>
                    ABOUT
                </h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Airbnb 2021</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
                <p>HotelTonight</p>
                <p>Airbnb for Work</p>
                <p>Made possible by Hosts</p>
                <p>Careers</p>
                <p>Founders' Letter</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Host Afghan refugees</p>
                <p>Guest Referrals</p>
                <p>Airbnb.org</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible hosting</p>
                <p>Resource Centre</p>
                <p>Community Centre</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'> SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Centre</p>
                <p>Cancellation options</p>
                <p>Neighbourhood Support</p>
                <p>Trust & Safety</p>
                
            </div>
            <hr />
            <div className='text-xs text-gray-800 mt-4 cursor-pointer flex space-x-4'>
                <p>© 2021 Airbnb - vsam, Inc.</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Sitemap</p>
            </div>
        </div>
    )
}

export default Footer
