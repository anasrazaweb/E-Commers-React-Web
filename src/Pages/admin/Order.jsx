import React, { useState } from 'react'
import AdminLayout from './Layout'
import { Theater } from 'lucide-react'

const Order = () => {
    const [Order, setOrder] = useState([
        {
            OrderId: "12484727",
            customerName: "Anas raza",
            email: "anasraza.div@gmail.com",
            mobile: "03122332406",
            product: "Mobile Phone",
            Amount: "500",
            date: "12/02/2024 10:03:43 AM",
            status: "pending....",
        },
        {
            OrderId: "12484727",
            customerName: "Anas raza",
            email: "anasraza.div@gmail.com",
            mobile: "03122332406",
            product: "Mobile Phone",
            Amount: "500",
            date: "12/02/2024 10:03:43 AM",
            status: "pending....",
        },
        {
            OrderId: "12484727",
            customerName: "Anas raza",
            email: "anasraza.div@gmail.com",
            mobile: "03122332406",
            product: "Mobile Phone",
            Amount: "500",
            date: "12/02/2024 10:03:43 AM",
            status: "pending....",
        },
        {
            OrderId: "12484727",
            customerName: "Anas raza",
            email: "anasraza.div@gmail.com",
            mobile: "03122332406",
            product: "Mobile Phone",
            Amount: "500",
            date: "12/02/2024 10:03:43 AM",
            status: "pending....",
        },
        {
            OrderId: "12484727",
            customerName: "Anas raza",
            email: "anasraza.div@gmail.com",
            mobile: "03122332406",
            product: "Mobile Phone",
            Amount: "500",
            date: "12/02/2024 10:03:43 AM",
            status: "pending....",
        },

    ])
    return (
        <AdminLayout>
            <div>
                <h1 className=' text-2xl my-5 ml-3 font-semibold'>Order</h1>
                <table className=' w-full shadow-lg '>
                    <thead>
                        <tr className=' shadow-md bg-zinc-200 border-b-2 border-zinc-400 '>
                            <th>Orderid</th>
                            <th className=' py-4'>Customer Name </th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Order.map((item, index) => ( 
                                <tr key={index} className=' text-center bg-white hover:border-b-2 cursor-pointer  hover:border-zinc-600 hover:bg-zinc-200 mt-2' style={{}}>
                                    <td>{item.OrderId}</td>
                                    <td className=' py-4'>{item.customerName}  </td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.product}</td>
                                    <td>{item.Amount}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <select className=' bg-transparent p-1 border-zinc-400 border outline-none rounded-md'>
                                            <option value="pending">pending</option>
                                            <option value="processing">processing</option>
                                            <option value="dispatched">dispatched</option>
                                            <option value="returned">returned</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default Order