import './App.css';

import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { GoogleMapApiLoader } from 'react-google-map-wrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { About } from './pages/About';
import { Activities } from './pages/Activities';
import { Activity } from './pages/Activity';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';

function App() {
  // Use the prefers-color-scheme media query to determine the theme mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Adjusting the theme based on the prefersDarkMode value
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundImage: 'repeating-linear-gradient( transparent,rgb(54, 175, 255))',
                backgroundAttachment: 'fixed',
                maxWidth: '100%',
                marginRight: 'calc(100% - 100vw)',
              },
            },
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Initialize Google Maps API with the API key from the environment variables */}
      <GoogleMapApiLoader apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* Defining the routes for the application */}
            <Route path='/' element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='resume' element={<Resume />} />
              <Route path='activities' element={<Activities />} />
              <Route path='activities/:id' element={<Activity />} />
              <Route path='*' element={<p>Not Found</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GoogleMapApiLoader>
    </ThemeProvider>
  );
}

export default App;
