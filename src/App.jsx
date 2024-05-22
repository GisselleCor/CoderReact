import Button  from 'react-bootstrap/Button';
import NavigationBar from './components/navbar/navbar.jsx';
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx';

const App = () => {
  return (
    <div>
      <NavigationBar />
      {/*Agregar más componentes para tu ecommerce */}
      <div className="content">
        {/* Contenido de la página */}
        <ItemListContainer greeting={'Bienvenido'}/>
      </div>
    </div>
  );
};

export default App;
