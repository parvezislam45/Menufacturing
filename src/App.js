import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Protfolio from './Components/Protfolio/Protfolio';
import Signup from './Components/SignUp/Signup';
import Navbar from './Components/Home/Navbar'
import AllItem from './Components/AllItem/AllItem';
import Parcease from './Components/Parcease/Parcease' 
import Footer from './Footer/Footer';
import RequireAuth from '../src/RequreAuth/RequreAuth'
import Dashboard from './Components/Deshboaed/Deshboard';
import AddReview from './Components/Deshboaed/AddReview';
import MyOrders from './Components/Deshboaed/MyOrders';
import MyProfile from './Components/Deshboaed/MyProfile';
import AllUser from './Components/Deshboaed/AllUser';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './RequreAuth/RequireAdmin';
import AllOrders from './Components/Deshboaed/AllOrders';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/parcease/:id' element={<RequireAuth><Parcease></Parcease></RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        <Route path='/allitem' element={<AllItem></AllItem>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="allorders" element={<AllOrders></AllOrders>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="alluser" element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
        </Route>       
      </Routes>
      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
