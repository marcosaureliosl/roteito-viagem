import { Box, CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Theme
import { theme } from './theme/theme';

// Components
import DrawerMenu from './components/layout/DrawerMenu';
import Header from './components/layout/Header';

// Pages - Importações dinâmicas para code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const DayItineraryPage = lazy(() => import('./pages/DayItineraryPage'));
const TripEndPage = lazy(() => import('./pages/TripEndPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Componente de carregamento
const LoadingSpinner = () => (
  <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    minHeight='60vh'
  >
    <CircularProgress />
  </Box>
);

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 600 : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };

    // Configura o valor inicial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Header onMenuClick={handleDrawerToggle} />
          <DrawerMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

          <Box
            component='main'
            sx={{
              flexGrow: 1,
              p: isMobile ? 2 : 3,
              pt: 8,
              maxWidth: 1200,
              width: '100%',
              mx: 'auto',
              bgcolor: 'background.default',
              minHeight: 'calc(100vh - 64px)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'background.default',
                zIndex: -1,
              },
            }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/day/:dayId' element={<DayItineraryPage />} />
                <Route path='/trip-end' element={<TripEndPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
