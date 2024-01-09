
import './App.css';
import Book from './components/Book';
import BookDetails from './components/BookDetails';
import Category from './components/Category';
import Footer from './components/Footer';
import Home from './components/Home';
import ManageBooking from './components/Managebooking';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscribers from './components/Subscribers';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="wrapper">
          <SideBar />
        <div className="main-panel">
          <NavBar />
          <div className="content">
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/book" element={<Book />} />
              <Route path="/category" element={<Category />} />
              <Route path="/borrow" element={<ManageBooking />} />
              <Route path="/subscriber" element={<Subscribers />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
