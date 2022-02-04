import React from 'react';
import store from './store/PersistStore';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import { Provider} from 'react-redux';
import Cart from './components/Cart/Cart'
import Home from './components/Dashboard/Pages/Home';
import { UserList } from './components/Dashboard/Pages/Users/UserList';
import { UpdateUser } from './components/Dashboard/Pages/Users/UpdateUser';
import  Signup  from './components/Login/Signup';
import ScrollToTop from './js/ScrollToTop';
import {ProductsList} from './components/Dashboard/Pages/Products/ProductsList'
import {SingleProduct as ProductDashboard}  from './components/Dashboard/Pages/Products/SingleProduct';
import NewProduct from './components/Dashboard/Pages/Products/NewProduct';
import { ProtectedRoute } from './ProtectedRoutes';
import { Spinner } from 'react-bootstrap';
import Loader from './components/Layout/Loader';
import { Error404 } from './components/error/error404';
const Account=React.lazy(()=>import('./components/Account/Account'));
const Dashboard=React.lazy(()=>import('./components/Dashboard/DashBoard'))
const Faq=React.lazy(()=>import('./components/Homepage/Faq'))
const OrderConfirm=React.lazy(()=>import('./components/Products/OrderConfrim'))
const Tracking=React.lazy(()=>import('./components/Cart/Tracking'));
const Checkout=React.lazy(()=>import('./components/Products/Checkout'))
const Review=React.lazy(()=>import('./components/Products/Review'));
const SingleProduct=React.lazy(()=>import('./components/Products/SingleProduct'));
const Products=React.lazy(()=>import('./components/Products/Products'))
const Shipping=React.lazy(()=>import('./components/Cart/Shipping'))
const App=(props)=> {
  
  return (
    
    <Provider store={store}>
    <Router >
    <ScrollToTop/>
    
      <Routes> 
      
      <Route exact path="/" element={<Layout children={<Homepage/>}/>  }/> 
      
      <Route path="/checkout" element={<Layout children={<React.Suspense fallback={<Loader/>}>
        <Checkout/>
      </React.Suspense>}/>} />
      <Route path="/products" element={<Layout children={
        <React.Suspense fallback={<Loader/>}>
          <Products/>
        </React.Suspense>
      }/>}/>
      <Route path="/login" element={<Layout children={<Login/>}/>}/>
      <Route path="/signup" element={<Layout children={<Signup/>}/>}/>
      <Route path="/account" element={<React.Suspense fallback={<Loader/>}><Layout children={<Account/>}/></React.Suspense> }/>
      <Route path="/cart" element={<Layout children={<Cart/>}/>}/>
      <Route exact path="/shipping" element={
        <React.Suspense fallback={<Loader/>}>
          <ProtectedRoute><Layout children={(<Shipping/>)}/></ProtectedRoute>
        </React.Suspense>
      
      } />
      <Route path="/review" element={<ProtectedRoute><Layout children={
        <React.Suspense fallback={<Loader/>}>
          <Review/>
        </React.Suspense>
      }/></ProtectedRoute>}/>
      <Route exact path="/product/:productId" element={<Layout children={
        <React.Suspense fallback={<Loader/>}>
          <SingleProduct/>
        </React.Suspense>
      }/>}/>
      <Route path="/tracking" element={<Layout children={<React.Suspense fallback={<Loader/>}>
        <Tracking/>
      </React.Suspense>}/>}/>
      <Route path="/success" element={<ProtectedRoute><Layout children={<OrderConfirm/>}/></ProtectedRoute>}/>
      <Route path="/faq" element={ <Layout children={<React.Suspense fallback={<Loader/>}><Faq/></React.Suspense>}/>}/>
      <Route path="/admin/dashboard" element={<React.Suspense fallback={<Loader/>}><Dashboard children={<Home/>} /></React.Suspense>}/>
      <Route path="/admin/userslist" element={<React.Suspense fallback={<Loader/>}><Dashboard children={<UserList/>} /></React.Suspense>}/>
      <Route path="/admin/users/:userId" element={<React.Suspense fallback={<Loader/>}><Dashboard children={<UpdateUser/>} /></React.Suspense>}/>
      <Route path="/admin/products" element={<React.Suspense fallback={<Loader/>}><Dashboard children={<ProductsList/>} /></React.Suspense>}/>
      <Route path="/admin/singleproduct" element={<React.Suspense fallback={<Loader/>}><Dashboard children={<ProductDashboard/>} /></React.Suspense>}/>
      <Route path="/admin/createproduct" element={<React.Suspense fallback={<Loader/>}><Dashboard children={<NewProduct/>} /></React.Suspense>}/>
      

      <Route path="*" element={<Layout children={<Error404/>}/>}/>  
      </Routes>
        
      
    </Router>
    </Provider>
    );
  
}

export default App;
