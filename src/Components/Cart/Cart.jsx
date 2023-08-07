/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let quantity = 0;
    let shipping = 0;
    let total = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }
    // // for (let i=0; i < cart.length; i++) {
        // quantiy = quantity + i.quantity;
        //shipping = shipping + i.shipping;
        // total = total + i.price * quantity; eivabe continue ha
    // }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>

            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>


        </div>
    );
};

export default Cart;