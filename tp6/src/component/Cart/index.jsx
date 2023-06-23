import 'bootstrap/dist/css/bootstrap.min.css'
import { FaStar } from "react-icons/fa";
import './Cart.css'

function Cart(props) {
    return (
        <div className="container">
            <div className='stcard'>
                <div className="cart-img">
                    <a className="linkimg" href={props.productlink}>
                        <img className="img" src={props.productimg} alt={props.producttitle} width={"150px"} />
                    </a>
                </div>

                <div className="specs">
                    <a className="linktitle" href={props.productlink}>
                        <h5 className="title">{props.producttitle}</h5>
                    </a>

                    <div className="min-spec">
                        <p className="price">${props.productprice}</p>
                        <span className="puc">{props.productpuc}</span>

                        <p className="rating">
                            <span className='icon'><FaStar/></span>
                            <span className="rate">{props.productrate}</span>
                            <span className="count">({props.productratecount})</span>
                        </p>
                    </div>

                    <a className="push-buy" href={props.productlink}>BUY NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Cart