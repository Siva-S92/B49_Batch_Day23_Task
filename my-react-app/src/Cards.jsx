import React, { useState } from 'react'



function Cards({item, handleaddcart, handleRemove}) {
    
    const [isClicked, setIsClicked] = useState(true);

    let handleAddtoCart = () => {
        setIsClicked(false)
        handleaddcart(item)
        
    }

    let handleRemoveCart = () => {
        setIsClicked(true);
        handleRemove(item.id)
        
        
    }

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-2">
            <div className="card text-center" style={{ width: "auto", height: "25rem" }}>
                <img src={item.url} className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title">{item.price}</h5>
                    <p className="card-text">{item.description}</p>
                    {isClicked ? <button onClick={handleAddtoCart} className="btn btn-primary text-center">Add to Cart</button> : <button onClick={handleRemoveCart} className="btn btn-primary text-center">Remove from Cart</button>}
                    
                        
                    
                </div>
            </div>
        </div>
    )
}

export default Cards