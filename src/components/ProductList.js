import { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";

function ProductList() {
    const api_Url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const getAllProducts = () => {
        fetch(api_Url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    const category = () => {
        fetch(`${api_Url}/categories`)
            .then(res => res.json())
            .then(cat => setCategories(cat))
    }

    const getProductByCategory = (cat) => {
        fetch(`${api_Url}/category/${cat}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getAllProducts();
        category();
    }, [])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 py-4">
                        <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                            <button className="btn btn-outline-primary" onClick={() => getAllProducts()}>All Products</button>
                            {
                                categories.map((cat) => {
                                    return (
                                        <button className="btn btn-outline-primary" onClick={() => getProductByCategory(cat)} key={cat}>{cat}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                        {products.length > 0 ? products.map((pro) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-12 my-2" key={pro.id}>
                                    <Product product={pro} /></div>
                                ) }) : <Spinner />}
                </div>
            </div>
        </>
    )
}

export default ProductList;