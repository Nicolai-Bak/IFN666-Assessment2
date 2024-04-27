import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { GoogleMapApiLoader } from 'react-google-map-wrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { google_api_key } from '../secrets';
import { RootLayout } from './layouts/RootLayout';
import { About } from './pages/About';
import { Activity } from './pages/Activity';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Resume } from './pages/Resume';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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
      <GoogleMapApiLoader apiKey={google_api_key}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='resume' element={<Resume />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='portfolio/:id' element={<Activity />} />
              <Route path='*' element={<p>Not Found</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GoogleMapApiLoader>
    </ThemeProvider>
  );
}

export default App;
