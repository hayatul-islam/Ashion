import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Conponents/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./Conponents/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
