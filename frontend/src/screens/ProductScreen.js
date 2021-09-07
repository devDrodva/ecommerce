import './ProductScreen.css'

const ProductScreen = () => {
    return <div className="productscreen">
        <div className="productscreen_left">
            <div className="left_image">
                <img src="https://www.maxpixel.net/static/photo/2x/Winter-Fabric-Textile-Fashion-Knitting-Clothing-3831821.jpg"
                     alt="product name"/>
            </div>
        </div>
        <div className="left_info">
            <p className="left_name">Product 1</p>
            <p>Price: $39</p>
            <p>Description: contenido extra de momento</p>
        </div>
        <div className="productscreen_right">
            <div className="right_info">
                <p>
                    Price: <span>$49</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Qty
                    <select>
                        <option  value="1">1</option>
                        <option  value="2">2</option>
                        <option  value="3">3</option>
                        <option  value="4">4</option>
                    </select>
                </p>
                <p>
                    <button type="button">Add to cart</button>
                </p>
            </div>
        </div>
    </div>
}

export default ProductScreen
