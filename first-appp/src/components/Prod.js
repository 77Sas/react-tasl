
import React from 'react'

function Prod({element}) {


    return (
        <div >
   
    <div className = "products">   
    <img src={element.image}/>
<h5>{element.name}</h5>
<p>{element.price}KD</p>
</div>
            
        </div>
    )
}

export default Prod
