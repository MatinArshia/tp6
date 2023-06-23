import Cart from '../../component/Cart/index'
import './HomePage.css'
import { db } from '../../db/db'

const HomePage = () =>{

    return(
        <div className='bigcd'>
            {db.map(item =>{
                return(
                    <div key={`productlist${item.id}`} className='cartmac' >
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
        </div>
    )
  
}

export default HomePage