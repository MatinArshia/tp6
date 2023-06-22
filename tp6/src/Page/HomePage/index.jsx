import Cart from '../../component/Cart/index'
import './HomePage.css'
import { db } from '../../db/db'

const HomePage = () =>{

    {db.map(item => {
        return (
            <div>
                <Cart 
                    productlink={item.purchase}
                    productimg={item.img}
                    producttitle={item.title}
                    productprice={item.price}
                    productpuc={item.purchasecode}
                    productrate={item.rate}
                    productratecount={item.count}
                />
            </div>
        )
    })}
  
}

export default HomePage