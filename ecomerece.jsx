import React, { useEffect, useState } from 'react'
import '../css/ecomerece.css'

function Ecomerece() {
    const [products, setProducts] = useState([]);
    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data=>setProducts(data));
    },[]);
  return (
    <div className='container'>
        <h1>E-Comerece</h1>
        <div className='product-list'>
            {products.map(product=>(
<div className='product-card' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Ecomerece