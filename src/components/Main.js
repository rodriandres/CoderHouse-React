import PropTypes from 'prop-types';
import NavBar from './NavBar';
// import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

function Main() {

  return (
    <div className="App">
        <NavBar/>
        <div className='div--listoOfItems'>
            {/* <ItemListContainer greeting="Cristal Azul" /> */}
            <ItemDetailContainer greeting="Cristales"/>
        </div>
    </div>
  );
}

Main.prototypes = {
    greeting: PropTypes.shape({
      title: PropTypes.string,
    })
}

export default Main;