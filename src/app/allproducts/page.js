"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Allproducts = () => {
    const [products, setProducts] = useState([])
    const nazim = async () => {
        const result = await axios.get('https://nextapp-pi-beryl.vercel.app/api/products')
        console.log(result.data)
        setProducts(result.data)
    }

    useEffect(() => {
        nazim()
    }, [])
    return (
        <>
            <h1>ALl Products</h1>
            <table>
                <thead>
                    <tr>
                        <td>P.Name</td>
                        <td>P.quantity</td>
                        <td>P.price</td>
                        <td>P.Description</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Allproducts