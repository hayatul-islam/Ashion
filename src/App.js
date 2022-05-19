import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Conponents/Header/Header';
import Products from './Conponents/Products/Products';
import TopBanner from './Conponents/TopBanner/TopBanner';

function App() {

  return (
    <div>
      <Header />
      <TopBanner />
      <Products />
    </div>
  );
}

export default App;
