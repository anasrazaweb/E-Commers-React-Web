import { AlignLeft, LogOut, Settings } from 'lucide-react'
import React, { useState } from 'react'




const AdminNavbar = ({ sidebarOpen, setSidebarOpen }) => {
    const [AccountMenu, setAccountMenu] = useState(false)
    const toggleSidebar = () => {
        setSidebarOpen(prevState => (prevState === 280 ? 0 : 280));
    };

    return (
        <nav className=' flex justify-between items-center md:px-5 py-2 px-2 bg-zinc-50 shadow-md   '>
            <div className=' flex  gap-4'>
                <AlignLeft onClick={toggleSidebar} className=' cursor-pointer' />
                <h5 className=' font-semibold'>ShopingCard</h5>
            </div>
            <div className=' relative'>
                <div onClick={() => setAccountMenu(!AccountMenu)} className='  hover:bg-zinc-100 p-2 rounded-full overflow-hidden'>
                    <img src='/Images/avatar.svg' className=' h-8 w-8 rounded-full cursor-pointer' />
                </div>
                {
                    AccountMenu &&
                    <div className=' bg-white border-t-4 rounded-md border-blue-600 p-4 absolute top-10  -left-44 shadow-2xl'>
                        <h1 className=' text-xl  font-semibold text-center'>Anas raza</h1>
                        <h2 className=' text-md'>anasraza.div@gmail.com</h2>

                        <div className="w-full h-[1px] mt-5 bg-zinc-600" />
                        <div className='  mt-4  cursor-pointer '>
                            <div className='flex gap-4 items-center hover:bg-zinc-200 rounded-sm transition-all hover:border-b-[1px] hover:border-black p-2'>
                                <Settings size={20} />
                                <h6 className=' font-[400]'>Setting</h6>
                            </div>

                            <div className='flex gap-4 items-center hover:bg-zinc-200 rounded-sm transition-all hover:border-b-[1px] hover:border-black  p-2'>
                                <LogOut size={20} />
                                <h6 className=' font-[400]'>Log out</h6>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}

export default AdminNavbar