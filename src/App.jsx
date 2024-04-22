import './App.css';

import Button from '@mui/material/Button';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Resume } from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function RootLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <Button variant='outlined'>Hello world</Button>
            </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
