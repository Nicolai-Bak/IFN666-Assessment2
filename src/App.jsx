import './App.css';

import { Menu } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
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
    <>
      <AppBar position='fixed' style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Nicolai Bak
            </Typography>
            <Box>
              <Button href='/'>
                <Link to='/'>Home</Link>
              </Button>
              <Button>
                <Link to='/about'>About</Link>
              </Button>
              <Button>
                <Link to='/resume'>Resume</Link>
              </Button>
              <Button>
                <Link to='/portfolio'>Portfolio</Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}
