
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

function App() {
  return (
    <Router>
    <div className="wrapper">
        <SideBar/>
        <div className="main-panel">
          <NavBar/>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/book" element={<Book />}  />
            <Route path="/category" element={<Category />}  />
            <Route path="/borrow" element={<ManageBooking />}  />
            <Route path="/book/:id" element={<BookDetails />}  />
          </Routes>
          </div>
         <Footer/>
        </div>
    </div>
    </Router>
  );
}

export default App;
