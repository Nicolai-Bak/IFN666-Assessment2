import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { About } from './pages/About';
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
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
