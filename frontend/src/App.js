import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <NavBar.Brand>
                <Link to="/">Jev's eshop</Link>
              </NavBar.Brand>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            All rights reserved to Outstanding Larva
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
