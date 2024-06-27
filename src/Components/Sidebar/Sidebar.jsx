import { BadgeIndianRupee, LayoutDashboard, ListOrdered, LogOut, LucideLayoutDashboard, PackageSearch, Settings } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  console.log(location)
  const Mennu = [
    {
      lable: "Product",
      icone: <PackageSearch />,
      link: "/admin/product"
    },
    {
      lable: "Setting",
      icone: <Settings />,
      link: "/admin/setting"

    },
    {
      lable: "Order",
      icone: <ListOrdered />,
      link: "/admin/order"
    },
    {
      lable: "Payment",
      icone: <BadgeIndianRupee />,
      link: "/admin/payment"
    },
    {
      lable: "Dashboard",
      icone: <LucideLayoutDashboard />,
      link: "/admin/dashboard"
    },
    {
      lable: "Logout",
      icone: <LogOut />,
      link: "/admin/logout"
    },


  ]
  return (
    <div className=' h-full w-full m-0 p-0'>

      <div className=' flex flex-col space-y-1 w-full '>
        {
          Mennu.map((item, index) => (
            <Link
              style={{ background: (location.pathname === item.link ? "white" : ""), transition: "0.2s" }}
              key={index}
              to={item.link}
              className=' hover:bg-white flex gap-7 hover:border-b-2 border-zinc-400 w-full py-3 px-5 '>
              {item.icone}
              <h2 className=' font-medium '> {item.lable}</h2>

            </Link>
          ))
        }

      </div>

    </div>
  )
}

export default Sidebar