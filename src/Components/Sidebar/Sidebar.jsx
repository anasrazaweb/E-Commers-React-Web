import { ListOrdered, PackageSearch, Settings } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const Mennu = [
    {
      lable: "Product",
      icone: <PackageSearch />
    },
    {
      lable: "Setting",
      icone: <Settings />
    },
    {
      lable: "Order",
      icone: <ListOrdered />
    },
  ]
  return (
    <div className=' h-full w-full'>
      <div className=' flex flex-col space-x-1 w-full '>
        {
          Mennu.map((item, index) => (
            <Link className=' hover:bg-zinc-50 flex gap-5 w-full py-3 px-5'>
              {index.icone}
              <h2 className=' font-medium '> {item.lable}</h2>
            </Link>
          ))
        }

      </div>

    </div>
  )
}

export default Sidebar