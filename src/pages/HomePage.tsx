import { Download as DownloadIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../components/common/AuthModal';

// Assets
import orlandoImage from '../assets/orlando-skyline.webp';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const startDate = new Date('2025-11-20');
  const endDate = new Date('2025-12-04');

  const formattedTripPeriod = `${format(startDate, 'dd/MM/yyyy')} a ${format(
    endDate,
    'dd/MM/yyyy'
  )}`;
  const daysUntilTrip = Math.ceil(
    (startDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  const handleOpenDocumentations = () => {
    window.open(
      'https://drive.google.com/drive/folders/1cqBSgKeIIqoob_qCcUycgfUcWWQh6mV5?usp=sharing',
      '_blank'
    );
  };

  const handleDownloadRoteiro = () => {
    const link = document.createElement('a');
    link.href = '/roteiro/roteiro-final-site.pdf';
    link.download = 'roteiro-orlando-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: 300,
          borderRadius: 2,
          overflow: 'hidden',
          mb: 4,
          boxShadow: 3,
        }}
      >
        <Box
          component='img'
          src={orlandoImage}
          alt='Orlando Theme Parks - Castelo da Disney, Globo da Universal, Orca do SeaWorld, montanhas-russas, fogos de artifício e palmeiras em atmosfera mágica noturna'
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 4,
            color: 'white',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          <Typography
            variant='h4'
            component='h1'
            fontWeight='bold'
            gutterBottom
            sx={{
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              '@media (max-width: 600px)': {
                color: 'white',
                fontSize: '1.75rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              },
            }}
          >
            Roteiro de Viagem - Orlando 2025
          </Typography>
          <Typography variant='h6' component='p'>
            {formattedTripPeriod} • {daysUntilTrip} dias até a viagem
          </Typography>
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 3,
          mb: 4,
        }}
      >
        {/* Card Duração */}
        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography color='text.secondary' gutterBottom>
              Duração
            </Typography>
            <Typography variant='h4' component='div'>
              15 dias
            </Typography>
            <Typography variant='body2'>De 20/11 a 04/12/2025</Typography>
          </CardContent>
        </Card>

        {/* Card Parques Incluídos */}
        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography color='text.secondary' gutterBottom>
              Parques Incluídos
            </Typography>
            <Typography variant='h4' component='div'>
              7+
            </Typography>
            <Typography variant='body2'>
              Disney, Universal, SeaWorld e mais
            </Typography>
          </CardContent>
        </Card>

        {/* Card Próximo Evento */}
        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography color='text.secondary' gutterBottom>
              Próximo Evento
            </Typography>
            <Typography variant='h5' component='div'>
              Chegada em Miami
            </Typography>
            <Typography variant='body2'>
              {format(startDate, "EEEE, d 'de' MMMM", { locale: ptBR })} às
              17:00
            </Typography>
          </CardContent>
        </Card>

        {/* Card Ver Roteiro */}
        <Card
          sx={{
            height: '100%',
            borderRadius: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
            },
          }}
          onClick={() => navigate('/day/1')}
        >
          <Typography variant='h6' color='primary' gutterBottom>
            Ver Roteiro Completo
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Acompanhe todos os detalhes da viagem
          </Typography>
        </Card>
      </Box>

      {/* Highlights Section */}
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
        sx={{
          mt: 4,
          mb: 2,
          color: 'text.primary',
          fontWeight: 600,
          '@media (max-width: 600px)': {
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            p: 2,
            borderRadius: 1,
            textAlign: 'center',
            mx: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          },
        }}
      >
        Destaques da Viagem
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 3,
          mb: 4,
        }}
      >
        {[
          {
            title: 'Magic Kingdom',
            date: '22/11/2025',
            description: 'O parque mais famoso da Disney!',
            highlight: 'Show de fogos do Castelo',
          },
          {
            title: 'Epic Universe',
            date: '25/11/2025',
            description: 'O mais novo parque da Universal Studios',
            highlight: 'Super Nintendo World',
          },
          {
            title: 'Black Friday',
            date: '28/11/2025',
            description: 'Aproveite os melhores descontos',
            highlight: 'Promoções em eletrônicos e roupas',
          },
          {
            title: 'NBA Game',
            date: '01/12/2025',
            description: 'Jogo do Miami Heat vs LA Clippers',
            highlight: 'Kaseya Center, Miami - 18:30',
          },
          {
            title: 'Miami',
            date: '02/12/2025',
            description: 'Passeio de um dia em Miami com a galera',
            highlight: 'South Beach e Little Havana',
          },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant='h6' component='h3' gutterBottom>
                {item.title}
              </Typography>
              <Typography color='text.secondary' gutterBottom>
                {item.date}
              </Typography>
              <Typography paragraph>{item.description}</Typography>
              <Box
                sx={{
                  p: 1.5,
                  bgcolor: 'primary.light',
                  color: 'white',
                  borderRadius: 1,
                  mt: 'auto',
                }}
              >
                <Typography variant='body2'>
                  <strong>Destaque:</strong> {item.highlight}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2,
          textAlign: 'center',
          boxShadow: 3,
        }}
      >
        <Typography variant='h5' component='h2' gutterBottom>
          Pronto para começar a aventura?
        </Typography>
        <Typography paragraph sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
          Acesse o roteiro completo para ver todos os detalhes da viagem,
          incluindo horários, atrações imperdíveis e dicas especiais para cada
          dia.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 2,
            justifyContent: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={() => navigate('/day/1')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 4,
              },
              transition: 'all 0.2s',
            }}
          >
            Ver Roteiro Completo
          </Button>
          <Button
            variant='outlined'
            color='inherit'
            size='large'
            onClick={() => setAuthModalOpen(true)}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 2,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'white',
                transform: 'translateY(-2px)',
                boxShadow: 4,
              },
              transition: 'all 0.2s',
            }}
          >
            📄 Documentações
          </Button>

          <Button
            variant='outlined'
            color='inherit'
            size='large'
            startIcon={<DownloadIcon />}
            onClick={handleDownloadRoteiro}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 2,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'white',
                transform: 'translateY(-2px)',
                boxShadow: 4,
              },
              transition: 'all 0.2s',
            }}
          >
            Baixar Roteiro
          </Button>

          <Button
            variant='outlined'
            color='inherit'
            size='large'
            onClick={() => navigate('/trip-end')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 2,
              borderColor: 'white',
              color: 'white',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF5252, #26A69A)',
                transform: 'translateY(-2px)',
                boxShadow: 4,
              },
              transition: 'all 0.2s',
            }}
          >
            🎉 Página Final
          </Button>
        </Box>
      </Box>

      {/* Modal de Autenticação */}
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleOpenDocumentations}
      />
    </Box>
  );
};

export default HomePage;
