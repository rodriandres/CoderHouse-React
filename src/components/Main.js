import PropTypes from 'prop-types';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

function Main() {

  return (
    <div className="App">
        <NavBar/>
        <div className='div--listoOfItems'>
            <ItemListContainer greeting="Cristal Azul" />
            <ItemListContainer greeting="Cristal Rojo" />
            <ItemListContainer greeting="Cristal Amarillo" />
            <ItemListContainer greeting="Cristal Violeta" />
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