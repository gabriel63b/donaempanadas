import React from 'react'
// import image from "./assets/delivery-man.svg";

function CartWidget(props) {
    return (
        <div>
            <a class="nav-link " href="#"><img src={props.img} alt="" width="50" height="50"></img></a>
        </div>
    )
}

export default CartWidget
