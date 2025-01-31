import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import './ProductDetails.css'
function ProductDetails(){
    const api_Url = "https://fakestoreapi.com/products";
    const params = useParams();
    const id = params.productId;
    const [products,setProduct] = useState({})

    useEffect(()=>{getProductById(id)},[])
    const getProductById = (id)=>{
        fetch(`${api_Url}/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }
    
    return (
        <>
            {
                products ?
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12 text-center">
                            <img src={products.image} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8 col-12 py-3 py-lg-0">
                            <h6 className="fw-bold">{products.title}</h6>
                            <p>{products.description}</p>
                            <p className="fw-bold">price : {products.price}$</p>
                            <div className="d-flex justify-content-between">
                                <p className="fw-bold">Category : {products.category}</p>
                                <button className="btn btn-outline-primary w-25" onClick={() => window.history.back()}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Spinner />
            }
        </>
    )
}

export default ProductDetails ;