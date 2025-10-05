import {
  ArrowBack as ArrowBackIcon,
  BeachAccess as BeachIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  FlightTakeoff as FlightIcon,
  Info as InfoIcon,
  Park as ParkIcon,
  Place as PlaceIcon,
  Restaurant as RestaurantIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Activity, DayItinerary } from '../data/itinerary';
import { itineraryData } from '../data/itinerary';

const DayItineraryPage: React.FC = () => {
  const { dayId } = useParams<{ dayId: string }>();
  const navigate = useNavigate();
  const [dayData, setDayData] = useState<DayItinerary | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Se dayId for undefined, redireciona para a página inicial
    if (!dayId) {
      navigate('/');
      return;
    }

    // Tenta converter o dayId para número para acessar o array
    const dayNumber = parseInt(dayId, 10);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > itineraryData.length) {
      navigate('/');
      return;
    }

    const day = itineraryData[dayNumber - 1]; // -1 porque os arrays são baseados em 0
    setDayData(day);

    // Inicializa todos os itens como recolhidos
    const initialExpanded: Record<string, boolean> = {};
    day?.activities.forEach((activity) => {
      initialExpanded[activity.id] = false; // Inicia todos fechados
    });
    setExpanded(initialExpanded);
  }, [dayId, navigate]);

  const handleToggleExpand = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getActivityIcon = (activity: Activity) => {
    const title = activity.title.toLowerCase();

    if (
      title.includes('café') ||
      title.includes('cafe') ||
      title.includes('almoço') ||
      title.includes('jantar')
    ) {
      return <RestaurantIcon sx={{ color: 'white' }} />;
    }
    if (title.includes('compras') || title.includes('shopping')) {
      return <ShoppingCartIcon sx={{ color: 'white' }} />;
    }
    if (
      title.includes('parque') ||
      title.includes('disney') ||
      title.includes('universal') ||
      title.includes('seaworld')
    ) {
      return <ParkIcon sx={{ color: 'white' }} />;
    }
    if (title.includes('praia') || title.includes('miami')) {
      return <BeachIcon sx={{ color: 'white' }} />;
    }
    if (
      title.includes('chegada') ||
      title.includes('voo') ||
      title.includes('aeroporto')
    ) {
      return <FlightIcon sx={{ color: 'white' }} />;
    }
    return <InfoIcon sx={{ color: 'white' }} />;
  };

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  if (!dayData) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant='h6'>Carregando...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Cabeçalho */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/')} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Box>
          <Typography variant='h4' component='h1' sx={{ fontWeight: 'bold' }}>
            {dayData.title}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {formatDate(dayData.date)}
          </Typography>
        </Box>
      </Box>

      {dayData.description && (
        <Paper elevation={0} sx={{ p: 2, mb: 3, bgcolor: 'action.hover' }}>
          <Typography variant='body1'>{dayData.description}</Typography>
        </Paper>
      )}

      {/* Tags */}
      {dayData.tags && dayData.tags.length > 0 && (
        <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {dayData.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size='small'
              color='primary'
              variant='outlined'
            />
          ))}
        </Box>
      )}

      {/* Lista de Atividades */}
      <Card sx={{ mb: 3, borderRadius: 2, boxShadow: 3 }}>
        <CardContent sx={{ p: 0 }}>
          <List disablePadding>
            {dayData.activities.map((activity, index) => (
              <React.Fragment key={activity.id}>
                <ListItem
                  disablePadding
                  secondaryAction={
                    activity.notes &&
                    activity.notes.length > 0 && (
                      <IconButton
                        edge='end'
                        aria-label='expand'
                        onClick={() => handleToggleExpand(activity.id)}
                      >
                        {expanded[activity.id] ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </IconButton>
                    )
                  }
                >
                  <ListItemButton
                    onClick={() =>
                      activity.notes && activity.notes.length > 0
                        ? handleToggleExpand(activity.id)
                        : null
                    }
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.light' }}>
                        {getActivityIcon(activity)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant='subtitle1'
                          component='div'
                          fontWeight='medium'
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <Box
                            component='span'
                            sx={{
                              fontWeight: 'bold',
                              color: 'primary.main',
                              minWidth: 50,
                              display: 'inline-block',
                            }}
                          >
                            {activity.time}
                          </Box>
                          {activity.title}
                          {activity.isHighlight && (
                            <Chip
                              label='Destaque'
                              size='small'
                              color='secondary'
                              sx={{ ml: 1, height: 20, fontSize: '0.6rem' }}
                            />
                          )}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          {activity.description && (
                            <Typography
                              component='span'
                              variant='body2'
                              color='text.primary'
                              display='block'
                              sx={{ mt: 0.5 }}
                            >
                              {activity.description}
                            </Typography>
                          )}
                          {activity.location && (
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 0.5,
                              }}
                            >
                              <PlaceIcon
                                fontSize='small'
                                sx={{ mr: 0.5, color: 'text.secondary' }}
                              />
                              <Typography
                                variant='caption'
                                color='text.secondary'
                              >
                                {activity.location}
                              </Typography>
                            </Box>
                          )}
                        </React.Fragment>
                      }
                      sx={{ m: 0 }}
                    />
                  </ListItemButton>
                </ListItem>

                {/* Notas expandíveis */}
                {activity.notes && activity.notes.length > 0 && (
                  <Collapse
                    in={expanded[activity.id]}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {activity.notes.map((note, noteIndex) => (
                        <ListItem key={noteIndex} sx={{ pl: 9, pr: 4, py: 1 }}>
                          <Typography
                            variant='body2'
                            color='text.secondary'
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              '&:before': {
                                content: '"•"',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                width: '1em',
                                ml: '-1em',
                              },
                            }}
                          >
                            {note}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}

                {index < dayData.activities.length - 1 && (
                  <Divider component='li' />
                )}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Navegação entre dias */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => {
            const currentDay = parseInt(dayId || '1', 10);
            if (currentDay > 1) {
              navigate(`/day/${currentDay - 1}`);
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
              }
            }
          }}
          disabled={parseInt(dayId || '1', 10) <= 1}
        >
          Dia Anterior
        </Button>

        <Button
          endIcon={<ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />}
          onClick={() => {
            const currentDay = parseInt(dayId || '1', 10);
            if (currentDay < itineraryData.length) {
              navigate(`/day/${currentDay + 1}`);
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
              }
            }
          }}
          disabled={parseInt(dayId || '1', 10) >= itineraryData.length}
        >
          Próximo Dia
        </Button>
      </Box>
    </Box>
  );
};

export default DayItineraryPage;
