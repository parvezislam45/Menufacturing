import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Deshboard from './Components/Deshboaed/Deshboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Protfolio from './Components/Protfolio/Protfolio';
import Signup from './Components/SignUp/Signup';
import Navbar from './Components/Home/Navbar'
import AllItem from './Components/AllItem/AllItem';
import Footer from './Footer/Footer';
import Parcease from './Components/Parcease/Parcease';
import RequireAuth from '../src/RequreAuth/RequreAuth'

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/parcease' element={<RequireAuth><Parcease></Parcease></RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        <Route path='/allitem' element={<AllItem></AllItem>}></Route>       
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
