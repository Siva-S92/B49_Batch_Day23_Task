import React from 'react'
import dataSet from './Data';
import Cards from './Cards'

function All_Cards({handleaddcart,handleRemove}) {

    const data = dataSet;

    return (
        <div className='container container-fluid my-3'>
            <div className="row">
                {data.map((item) => (
                    <Cards item={item} handleaddcart={handleaddcart} handleRemove={handleRemove} />
                ))}
            </div>
        </div>
    )
}

export default All_Cards