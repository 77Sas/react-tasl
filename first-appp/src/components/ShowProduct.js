import React from 'react'
import Prod from './Prod'
import productsData from '../products'
function ShowProduct() {
    let show = productsData.map(e =>
        <Prod element = {e} />
      )
    return (
        <div>
            {show}
        </div>
    )
}

export default ShowProduct
