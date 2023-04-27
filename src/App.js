import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import NewOrderPage from './pages/New-job';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/All-jobs';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/* <AboutPage/> */}
      {/* <Link to="/">
        <div>About</div>
      </Link> */}
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
     x
        <Route path='/orders/new' element={ <NewOrderPage /> }/>
        <Route path='/orders' element={ <OrderHistoryPage /> }/>
        {/* <Route path='/' element={ <AboutPage/>}/> */}
      </Routes>
      </>
     :
     <>
     <Routes>
      <Route>
      <Route path='/' element={ <AboutPage /> }/>
      </Route>
     </Routes>
      <AuthPage setUser={setUser}/>
     
      </>
      }
    </main>
  );
}

export default App;
