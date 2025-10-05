import {
  SportsBasketball as BasketballIcon,
  BeachAccess as BeachIcon,
  LocalOffer as BlackFridayIcon,
  Castle as CastleIcon,
  Celebration as CelebrationIcon,
  Church as ChurchIcon,
  LocationCity as CityIcon,
  FlightLand as FlightLandIcon,
  FlightTakeoff as FlightTakeoffIcon,
  Home as HomeIcon,
  Hotel as HotelIcon,
  Movie as MovieIcon,
  Park as ParkIcon,
  RocketLaunch as RocketIcon,
  ShoppingCart as ShoppingCartIcon,
  Waves as WavesIcon
} from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Assets
import universalDisneyImage from '../../assets/universal-disney.avif';

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { text: 'Início', icon: <HomeIcon />, path: '/' },
    { text: 'Chegada em Miami', icon: <FlightLandIcon />, path: '/day/1' },
    { text: 'Compras e Disney Springs', icon: <ShoppingCartIcon />, path: '/day/2' },
    { text: 'Magic Kingdom', icon: <CastleIcon />, path: '/day/3' },
    { text: 'SeaWorld', icon: <WavesIcon />, path: '/day/4' },
    { text: 'Dia Livre / Compras', icon: <HotelIcon />, path: '/day/5' },
    { text: 'Epic Universe', icon: <RocketIcon />, path: '/day/6' },
    { text: 'Universal Studios', icon: <MovieIcon />, path: '/day/7' },
    { text: 'Thanksgiving Day', icon: <CelebrationIcon />, path: '/day/8' },
    { text: 'Black Friday', icon: <BlackFridayIcon />, path: '/day/9' },
    { text: 'Islands of Adventure', icon: <ParkIcon />, path: '/day/10' },
    { text: 'Missa e Volcano Bay', icon: <ChurchIcon />, path: '/day/11' },
    { text: 'Miami e NBA', icon: <BasketballIcon />, path: '/day/12' },
    { text: 'Tour Privado Miami', icon: <CityIcon />, path: '/day/13' },
    { text: 'Florida Keys', icon: <BeachIcon />, path: '/day/14' },
    { text: 'Volta para casa', icon: <FlightTakeoffIcon />, path: '/day/15' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            px: 1,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1.5
          }}
        >
          <Box
            component="img"
            src={universalDisneyImage}
            alt="Universal & Disney"
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1.5,
              objectFit: 'cover'
            }}
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            Roteiro de Viagem
          </Typography>
        </Box>
        <Divider />
        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.text}
              disablePadding
              sx={{
                mb: 0.5,
                '& .MuiListItemButton-root': {
                  borderRadius: 1,
                },
                '& .Mui-selected': {
                  backgroundColor: (theme) => `${theme.palette.primary.main}15`,
                  '&:hover': {
                    backgroundColor: (theme) => `${theme.palette.primary.main}25`,
                  },
                },
              }}
            >
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Atualizado em {format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
