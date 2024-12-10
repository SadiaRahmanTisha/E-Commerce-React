import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Product = ({items, cart, setCart}) => {

	const addToCart = (id, price, title, description, imgSrc) =>{
		const obj = {
			id, price, title, description, imgSrc
		}
		setCart([...cart, obj]);
		console.log('Cart element =', cart)
		toast.success('🦄 Your item is added on cart!', {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",

			});
	}


  return (
	<>

		<ToastContainer
		position="top-right"
		autoClose={1500}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme="dark"

		/>

		<div className="container my-5">
			<div className="row">
				{items.map((Product)=>{
					return(
						<>
							<div key={Product.id} className="col-lg-4 col-sm-6 col-12 my-4">
								<div className="card">
									<Link to={`/Product/${Product.id}`} style={{
										display:'flex',
										justifyContent:'center',
										alignItems:'center'
									}}>
										<img src={Product.imgSrc} className="card-img-top" />
									</Link>
									<div className="card-body">
										<h5 className="card-title">{Product.title}</h5>
										<p className="card-text">{Product.description}</p>
										<button className="btn btn-danger mx-4">{Product.price}{""} ₹</button>
										<button onClick={()=>addToCart(Product.id, Product.price, Product.title, Product.description, Product.imgSrc)}
										 className="btn btn-warning">Add to Cart</button>
									</div>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</div>
	</>
  )
}

export default Product
