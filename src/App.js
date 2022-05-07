
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout> </Checkout>
          </RequireAuth>
        } />
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService> </AddService>
          </RequireAuth>
        } />
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices> </ManageServices>
          </RequireAuth>
        } />
        <Route path="/orders" element={
          <RequireAuth>
            <Order> </Order>
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
