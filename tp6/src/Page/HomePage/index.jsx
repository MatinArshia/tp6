import Cart from '../../component/Cart/index'
import './HomePage.css'
import { db } from '../../db/db'

const HomePage = () =>{

    {db.map(item => {
        return (
            <div>
                <Cart 
                />
            </div>
        )
    })}
  
}

export default HomePage