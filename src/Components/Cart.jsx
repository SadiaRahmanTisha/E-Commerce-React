import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{width: '760px'}}>
        { cart.length==0 ?(
          <>
          <div className="text-center">
            <h1>Cart Is Empty</h1>
            <Link  to={'/'} className='btn btn-warning'>Continue Shopping.......</Link>
          </div>
          </>
        ):
        cart.map((product) => {
          return (
            <>
              <div className="card mb-3 p-3 my-5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={product.imgSrc} className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-danger mx-4">{product.price}{""} ₹</button>
										  <button onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
										  className="btn btn-warning">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
        {
          cart.length!=0 &&(
            <div className="container text-center mb-3">
              <button onClick={()=>setCart("")} className='btn btn-danger p-3'>Clear Cart</button>
          </div>
          )
        }
    </>
  )
}

export default Cart
