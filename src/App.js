import './App.css';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking/Booking';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
// 
function App() {
  return (
    <div className='App'>
 <AuthProvider>
 <Router>
      <Header/>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute path='/booking/:serviceId'>
        <Booking/>
      </PrivateRoute>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
</Router>
 </AuthProvider>
</div>

  );
}

export default App;


// <a href="https://ibb.co/9Gjhddd"><img src="" alt="car-mechanic-changing-wheels-car" border="0"></a> <a href="https://ibb.co/DDjdrQy"><img src="" alt="mechanic-holding-digital-tablet" border="0"></a> <a href="https://ibb.co/T8DGTzk"><img src="" alt="smiling-mechanic-with-arms-crossed-spanner" border="0"></a>