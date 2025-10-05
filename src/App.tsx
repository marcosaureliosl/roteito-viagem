import { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// Theme
import { theme } from './theme/theme';

// Components
import Header from './components/layout/Header';
import DrawerMenu from './components/layout/DrawerMenu';

// Pages - Importações dinâmicas para code-splitting
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const DayItineraryPage = lazy(() => import('./pages/DayItineraryPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

// Componente de carregamento
const LoadingSpinner = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="60vh"
  >
    <CircularProgress />
  </Box>
);

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };

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
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header onMenuClick={handleDrawerToggle} />
          <DrawerMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
          
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              p: isMobile ? 2 : 3,
              pt: 8, // Espaço para o cabeçalho fixo
              maxWidth: 1200,
              width: '100%',
              mx: 'auto',
            }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/day/:dayId" element={<DayItineraryPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
