import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from '../context/CartContext';
import { NotificationsServicesProvider } from '../services/notifications/NotificationsServices';

function Main() {
  return (
    <NotificationsServicesProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
              <NavBar/>
              <div className='div--listoOfItems'>
                <Routes>
                    <Route path='/' element={<ItemListContainer title={"Home"}/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer title={"List"}/>}/>
                    <Route path='/item/:productId' element={<ItemDetailContainer title={"Detail"}/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                  </Routes>
              </div>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationsServicesProvider>
  );
}

export default Main;