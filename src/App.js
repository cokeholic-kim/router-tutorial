import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Subpages from './pages/Subpages';
import Subpage from './pages/Subpage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header sitename="green"/>
      <Routes>
        <Route path='' element={<Home></Home>}/>
        <Route path='/product/:productname' element={<Product></Product>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/subpages' element={<Subpages/>}>
          <Route path='/subpages/:id' element={<Subpage/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
        {/* <Route path='/product/:productname(파라미터로 전달받을 키가된다.) element={<Product></Product>}/> */}
      </Routes>
    </div>
  );
}

export default App;
