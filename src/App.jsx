import Button  from 'react-bootstrap/Button';
import {useState} from 'react'
import NavigationBar from './components/navbar/navbar.jsx';
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx';
import ItemDetailContainer from './containers/itemListContainer/itemDetailContainer/itemDetailContainer.jsx';

const App = () => {
    const [categoria, setCategoria] = useState ('todos')

    const handleCategoria = (nuevaCategoria) => {
      setCategoria(nuevaCategoria);
  };

  return (
    <div>
      <NavigationBar handleCategoria={handleCategoria}/>
        <ItemListContainer categoria={categoria}/>
        <ItemDetailContainer idProduct={4}/>
    </div>
  );
};

export default App;
