import Home from './pages/Home';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Products from './pages/Products';
import Forum from './pages/Forum';

import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/categories' Component={Categories} />
          <Route path='/login' Component={Login} />
          <Route path='/products' Component={Products} />
          <Route path='/forum' Component={Forum} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
