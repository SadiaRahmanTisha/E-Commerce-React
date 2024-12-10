import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'


const ProductDetails = () => {

	const {id} = useParams()

	const[product, setProduct] = useState({})
	const [relatedProducts, setRelatedProducts] = useState([])

	useEffect(()=>{
		const filterProduct = items.filter((product)=>product.id == id)
		setProduct(filterProduct[0])
		const relatedProducts = items.filter((suman)=>suman.category === product.category)
		setRelatedProducts(relatedProducts)
	},[id, product.category]);

  return (
	<>
	  <div className="container d-flex justify-content-center align-items-center mt-4 gap-4">
			<div className="img">
				<img src={product.imgSrc} alt="" />
			</div>
			<div className='product-detail text-center'>
				<h1 className="card-title">{product.title}</h1>
				<h5 className="card-text">{product.description}</h5>
				<button className="btn btn-danger mx-4 p-2">{product.price}{""} ₹</button>
				<button className="btn btn-warning">Add to Cart</button>
			</div>
	  </div>

	  <Product items={relatedProducts} />
	</>
  )
}

export default ProductDetails
