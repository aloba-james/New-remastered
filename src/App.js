import React, {useEffect} from 'react';
import { Routes, 
  Route,
  Navigate
 } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';

import Home from './routes/home/home.component';
import BlogPreview from './routes/blog-preview/blog-preview.component';
import Navigation from './components/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import User from './routes/user/user.component';
import ErrorPage from './error-page';
import { checkUserSession } from './store/user/user.action';
import { selectCurrentUser } from './store/user/user.selector';


const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='blog' element={<BlogPreview />} />
        <Route path='user' element={<User />} />
        <Route path='auth' element={
          currentUser ? (  
          <Navigate to="/" />
          ) : (
            <Authentication />
          )
       } />       
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
