import { Link } from 'react-router-dom';
import './Product.css'

function Product (props){
    const {product} = props ;
    return(
        <>
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body text-center">
                    <h5 className="card-title product-title">{product.title}</h5>
                    <p className="card-text product-description">{product.description}</p>
                    <p className="card-text product-description">price : {product.price}$</p>
                    <Link to={`/product/${product.id}`} className="btn btn-outline-primary w-50">Details</Link>
                </div>
            </div>
        </>
    )
}

export default Product ;