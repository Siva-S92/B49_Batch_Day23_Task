import React, { useState } from 'react'
import './home.css'


function Home({count, setShow}) {
    let catbtn = document.querySelector('#cart-button')

    const [isClick, setIsClick] = useState(true);



    let showcartpage = ()=>{
        setIsClick(false)
        setShow(false)
    }
    let hidecartpage = ()=>{
        setIsClick(true)
        setShow(true)
    }
    return (
        <div className='make-group'>
            <div className="my-container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid px-5">
                        <a className="navbar-brand" href="#">FoodyApp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shopping
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">All Products</a></li>
                                        <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Customers</a>
                                </li>
                            </ul>
                            <div className="d-flex" >
                                {
                                    isClick ? <button id='cart-button' className='btn border-dark' onClick={showcartpage}><span><i class="fa-solid fa-cart-shopping"></i></span> cart <span className='badge bg-dark text-white ms-1 rounded-pill'>{count}</span></button> : <button id='cart-button' className='btn border-dark' onClick={hidecartpage}><span><i class="fa-solid fa-cart-shopping"></i></span> close the cart <span className='badge bg-dark text-white ms-1 rounded-pill'>{count}</span></button>
                                }
                                

                            </div>
                        </div>
                    </div>
                </nav>
            </div>



            <header className="bg-dark py-5 mt-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Food Shopping...</h1>
                        <p className="lead fw-normal text-white-50 mb-0">Homely food delivery services....Tasty South Indian Foods</p>
                    </div>
                </div>
            </header>


            

        </div>
    )
}

export default Home
