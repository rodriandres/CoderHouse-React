import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from '../context/CartContext';

function Main() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
            <NavBar/>
            <div className='div--listoOfItems'>
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting={"Home"}/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Lista"}/>}/>
                  <Route path='/item/:productId' element={<ItemDetailContainer greeting={"Detalle"}/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default Main;