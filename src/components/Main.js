import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Main() {

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <div className='div--listoOfItems'>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={"Lista"}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Lista"}/>}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer greeting={"Detalle"}/>}/>
              </Routes>
          </div>
      </div>
    </BrowserRouter>
    
  );
}

export default Main;