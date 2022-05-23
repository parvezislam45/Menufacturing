import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Protfolio from './Components/Protfolio/Protfolio';
import Signup from './Components/SignUp/Signup';
import Navbar from './Components/Home/Navbar'
import AllItem from './Components/AllItem/AllItem';
import Footer from './Footer/Footer';
import Parcease from './Components/Parcease/Parcease';
import RequireAuth from '../src/RequreAuth/RequreAuth'
import Dashboard from './Components/Deshboaed/Deshboard';
import AddReview from './Components/Deshboaed/AddReview';
import MyOrders from './Components/Deshboaed/MyOrders';
import MyProfile from './Components/Deshboaed/MyProfile';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/tools/:id' element={<RequireAuth><Parcease></Parcease></RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        <Route path='/allitem' element={<AllItem></AllItem>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
        </Route>       
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
