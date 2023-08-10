import React, { useState } from 'react'
import Home from './Home'
import All_Cards from './All_Cards'
import Cart from './Cart'
import './all_Cards.css'



function App() {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setwarning] = useState(false);


    const handleaddcart = (item) => {
        let ispresent = false;
        cart.forEach((product) => {
            if (item.id == product.id) {
                ispresent = true;
            }
        })
        if (ispresent) {
            setwarning(true);
            setTimeout(() => {
                setwarning(false)
            }, 3000);
            return;
        }
        setCart([...cart, item])
    }


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCart([...tempArr])
    }

    return (
        <>
            <Home count={cart.length} setShow={setShow} />
            
            {
                show ? <All_Cards handleaddcart={handleaddcart} handleRemove={handleRemove} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleRemove={handleRemove} />
            }

            {
                warning && <div className='warn'>This item, already added in to your Cart</div>
            }
        </>
    )
}

export default App








