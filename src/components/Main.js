import { useState } from "react";

import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

function Main() {
  const [
    route, setRoute,
  ] = useState({id: 1, path: 'list'});

  return (
    <div className="App">
        <NavBar/>
        <div>
          <button className="option" onClick={() => setRoute({id: 1, path: 'list'})}>Lista</button>
          <button className="option" onClick={() => setRoute({id: 2, path: 'detail'})}>Detalle</button>
        </div>
        <div className='div--listoOfItems'>
            {route.path === 'list' && <ItemListContainer greeting={route.path} routing={setRoute}/>}
            {route.path === 'detail' && <ItemDetailContainer greeting={route.path}/>}
        </div>
    </div>
  );
}

export default Main;