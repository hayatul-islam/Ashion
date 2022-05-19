import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Conponents/Header/Header';
import Products from './Conponents/Products/Products';
import TopBanner from './Conponents/TopBanner/TopBanner';
import { useEffect, useState } from 'react';

function App() {

  const [getId, setGetId] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("id"));
    setGetId(id)
  }, [update])

  return (
    <div>
      <Header update={update} setUpdate={setUpdate} getId={getId} />
      <TopBanner />
      <Products setUpdate={setUpdate} />
    </div>
  );
}

export default App;
