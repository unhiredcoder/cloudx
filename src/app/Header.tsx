import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
    return (
        <div className='border-b py-4 bg-gray-200'>
            <div className="flex justify-between items-center mx-auto container">
                <h1 className='font-extrabold text-2xl drop-shadow-md text-blue-500 font-sans'>Cloud<sup className='text-black'>x</sup></h1>
                <div className='flex gap-2'>
                    <OrganizationSwitcher />
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default Header