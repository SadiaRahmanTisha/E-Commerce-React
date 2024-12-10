import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { IoCartSharp } from "react-icons/io5";

const Navbar = ({setData, cart}) => {
	


	const navigate = useNavigate();
	const[serchTerm, setSerchTerm] = useState("")

	const filterByCategory = (category)=>{
		const element = items.filter((product)=>product.category=== category)
		setData(element)
	}


	const filterByPrice = (price) =>{
		const element = items.filter((product)=>product.price >= price)
		setData(element)
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		navigate(`/serch/${serchTerm}`)
		setSerchTerm()
	}
  return (
	<>
	 <header className='sticky-top'>
		<div className='navbar-header'>
			<div className='e-commerce'>
				<Link to={'/'} ><h3>E-Commerce</h3></Link>
			</div>
			
				<form onSubmit={handleSubmit}>
					<input value={serchTerm}
					onChange={(e)=>setSerchTerm(e.target.value)}
					type="text" 
					placeholder='Serch Products' 
					/>
				</form>
			<div className='cart-icon'>
				<Link to={'/cart'} >
					<button type="button" className="btn btn-primary position-relative"><IoCartSharp style={{fontSize:'30px'}} />
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{cart.length}
							<span className="visually-hidden">unread messages</span>
						</span>
					</button>
				</Link>
			</div>

		</div>

		<div className="navbar-wrapper d-flex">
			<div className="items">Filter by -{">"} </div>
			<div onClick={()=>setData(items)} className="items">No Filter</div>
			<div onClick={()=>filterByCategory('Mobile')}className="items">Mobiles</div>
			<div onClick={()=>filterByCategory('Laptop')} className="items">Laptops</div>
			<div onClick={()=>filterByCategory('Tablet')} className="items">Tablets</div>
			<div onClick={()=>filterByPrice(1699)} className="items">{">="}1699</div>
			<div onClick={()=>filterByPrice(2499)} className="items">{">="}2499</div>
			<div onClick={()=>filterByPrice(699)} className="items">{">="}699</div>
			<div onClick={()=>filterByPrice(1799)} className="items">{">="}1799</div>
		</div>
	 </header>
	</>
  )
}

export default Navbar

