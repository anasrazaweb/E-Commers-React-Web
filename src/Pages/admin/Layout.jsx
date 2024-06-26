import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SideNavbar from '../../Components/Sidebar/SideNavbar'

const AdminLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(280)
    return (
        <div className='  flex h-full w-full  relative '>
            <aside className={` bg-gray-200 h-screen fixed shadow-md inset-0`} style={{ width: sidebarOpen, transition: "0.3s", }}>
                <Sidebar />
            </aside>
            <section className=' w-full bg-zinc-100  min-h-screen ' style={{ marginLeft: sidebarOpen, transition: "0.3s" }}  >
                <header>
                    <SideNavbar setSidebarOpen={setSidebarOpen} />
                </header>
                <main>
                    <div className='p-4 '>
                        {children}
                    </div>
                </main>

            </section>
        </div>
    )
}

export default AdminLayout