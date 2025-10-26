import {
  FlightTakeoff as FlightIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <AppBar position='static' color='primary' elevation={0}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FlightIcon />
            <Typography variant='h6' component='div' fontWeight='bold'>
              Jornada Mágica 2025
            </Typography>
          </Box>
          <Typography variant='caption' component='div'>
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
