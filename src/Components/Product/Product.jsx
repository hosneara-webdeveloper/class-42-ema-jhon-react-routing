/* eslint-disable react/prop-types */
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings, shipping} = product;
    return (
        <>
            <div className='product'>
                <div className='product-prev'>
                    <img src={img} alt={name} />

                </div>
                <div className='product-details'>
                    <h4 className="product-title">{name}</h4>
                    <p>Manufacture: {seller}</p>
                    <p className="price">Price: <b>$ {price}</b></p>
                    <p>Rating: {ratings} Star</p>
                    <p>Shipping:{shipping}</p>
                </div>
                <button onClick={() => handleAddToCart(product)} className="btn-cart">
                        Add to Cart <FontAwesomeIcon className='icon' icon={faCartPlus} />   
                </button>
            </div>

        </>

    );
};

export default Product;