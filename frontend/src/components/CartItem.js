import './CartItem.css'
import {Link} from "react-router-dom";

const CartItem = () => {
    return (<div className="cartitem">
            <div className="cartitem_image">
                <img src="https://www.maxpixel.net/static/photo/2x/Winter-Fabric-Textile-Fashion-Knitting-Clothing-3831821.jpg"
                    alt="product name"/>
            </div>

            <Link to={`/product/${111}`} className="cartitem_name">
                <p>Product 1</p>
            </Link>

            <p className="cartitem_price">$49</p>

            <select className="cartitem_select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className="cartitem_deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
