import Navbar from './NAV-BAR/Navbar'
import ListItems from './ListItems'
import Announce from './Announce'
import "./Cart.css"
function Cart() {
  return (
    <div>
    <Navbar/>
    <header>
     <Announce/>
     <ListItems/>
     <Announce/>
    </header>

    </div>
  )
}

export default Cart
