"use client"
import axios from 'axios';
import React, { useState } from 'react'

const Addproduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const submitproduct = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://nextapp-pi-beryl.vercel.app/api/products', { name, price, quantity, description });
            if (res) {
                console.log(res.result)
                alert("product added successfully");
            } else {
                alert("product not added");
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" />
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="quantity" />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" />
                <button onClick={submitproduct}>Submit</button>
            </form>
        </>
    )
}

export default Addproduct