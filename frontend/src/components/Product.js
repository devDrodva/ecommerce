import './Product.css'
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img src="https://www.maxpixel.net/static/photo/2x/Winter-Fabric-Textile-Fashion-Knitting-Clothing-3831821.jpg" alt="product name"/>

            <div className="product_info">
                <p className="info_name">Product 1</p>
                <p className="info_description">
                    Texto cualquiere para hacer campo mientras realmente se coloca lo que se necesita.
                </p>
                <p className="info_price">$39.99</p>
                <Link to={`/product/${1111}`} className={"info_button"}>View</Link>
            </div>
        </div>
    )
}

export default Product