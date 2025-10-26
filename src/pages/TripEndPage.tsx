import {
  BeachAccess as BeachIcon,
  PhotoCamera as CameraIcon,
  Download as DownloadIcon,
  FlightTakeoff as FlightIcon,
  Home as HomeIcon,
  Attractions as ParkIcon,
  Restaurant as RestaurantIcon,
  Share as ShareIcon,
  ShoppingCart as ShoppingIcon,
  EmojiEvents as TrophyIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReunioesModal from '../components/common/ReunioesModal';

const TripEndPage: React.FC = () => {
  const navigate = useNavigate();
  const [showCelebration, setShowCelebration] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [reunioesModalOpen, setReunioesModalOpen] = useState(false);

  useEffect(() => {
    // Trigger celebration animation on page load
    const timer = setTimeout(() => {
      setShowCelebration(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const tripStats = {
    totalDays: 14,
    parksVisited: 8,
    photosTaken: 500,
    milesTraveled: 1200,
    restaurantsVisited: 25,
    memoriesCreated: '∞',
  };

  const highlights = [
    {
      icon: <ParkIcon sx={{ fontSize: 40, color: '#FF6B6B' }} />,
      title: 'Parques Temáticos',
      count: '8 Parques',
      description: 'Magic Kingdom, Universal Studios, SeaWorld e muito mais!',
      color: '#FF6B6B',
    },
    {
      icon: <BeachIcon sx={{ fontSize: 40, color: '#4ECDC4' }} />,
      title: 'Praias Paradisíacas',
      count: '5 Praias',
      description: 'South Beach, Florida Keys, Boca Raton e Fort Lauderdale',
      color: '#4ECDC4',
    },
    {
      icon: <ShoppingIcon sx={{ fontSize: 40, color: '#45B7D1' }} />,
      title: 'Black Friday',
      count: '12 Lojas',
      description: 'Maratona de compras em Orlando e Miami',
      color: '#45B7D1',
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 40, color: '#96CEB4' }} />,
      title: 'Experiências Gastronômicas',
      count: '25+ Restaurantes',
      description: 'T-Rex, Chicken Guy!, Pollo Tropical e muito mais',
      color: '#96CEB4',
    },
  ];

  const memories = [
    {
      title: 'Primeira vez no Magic Kingdom',
      description: 'O castelo da Cinderela e a magia da Disney',
      emoji: '🏰',
    },
    {
      title: 'Alimentando os Tarpons',
      description: "Experiência única no Robbie's Marina",
      emoji: '🐟',
    },
    {
      title: 'Pôr do sol em South Beach',
      description: 'O pôr do sol mais bonito de Miami',
      emoji: '🌅',
    },
    {
      title: 'Black Friday épico',
      description: 'Maratona de compras inesquecível',
      emoji: '🛍️',
    },
    {
      title: 'NBA Miami Heat',
      description: 'Jogo emocionante no Kaseya Center',
      emoji: '🏀',
    },
    {
      title: 'Florida Keys',
      description: 'Paraíso tropical nas ilhas',
      emoji: '🏝️',
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Minha Viagem Incrível para Orlando e Miami!',
        text: 'Acabei de completar uma viagem épica de 14 dias por Orlando e Miami! 🎉',
        url: window.location.href,
      });
    } else {
      // Fallback para copiar link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const handleDownloadRoteiro = () => {
    const link = document.createElement('a');
    link.href = '/roteiro/roteiro-final-site.pdf';
    link.download = 'roteiro-orlando-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating Elements */}
      {showCelebration && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100],
                x: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: '20px',
                pointerEvents: 'none',
              }}
            >
              {['🎉', '✨', '🌟', '🎊', '💫'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </>
      )}

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                color: 'white',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <TrophyIcon sx={{ fontSize: 80, mb: 2, color: '#FFD700' }} />
              </motion.div>

              <Typography
                variant='h2'
                component='h1'
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                🎉 Viagem Concluída! 🎉
              </Typography>

              <Typography
                variant='h5'
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                Uma aventura épica de 14 dias por Orlando e Miami chegou ao fim!
              </Typography>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Button
                  variant='contained'
                  size='large'
                  startIcon={<FlightIcon />}
                  onClick={() => setShowStats(true)}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver Estatísticas da Viagem
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {Object.entries(tripStats).map(([key, value], index) => (
                <Grid item xs={6} md={2} key={key}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        textAlign: 'center',
                        py: 2,
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant='h4'
                          sx={{ fontWeight: 'bold', mb: 1 }}
                        >
                          {value}
                        </Typography>
                        <Typography variant='body2' sx={{ opacity: 0.8 }}>
                          {key
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, (str) => str.toUpperCase())}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Highlights Section */}
          <motion.div variants={itemVariants}>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                color: 'white',
                mb: 4,
                fontWeight: 'bold',
              }}
            >
              🌟 Destaques da Viagem
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        p: 3,
                        height: '100%',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 10px 30px ${highlight.color}40`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                      >
                        {highlight.icon}
                        <Box sx={{ ml: 2 }}>
                          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                            {highlight.title}
                          </Typography>
                          <Typography variant='body2' sx={{ opacity: 0.8 }}>
                            {highlight.count}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant='body2' sx={{ opacity: 0.9 }}>
                        {highlight.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Memories Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  mb: 3,
                }}
              >
                <Button
                  variant='contained'
                  size='large'
                  startIcon={<CameraIcon />}
                  onClick={() => setShowMemories(true)}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Reviver Memórias Especiais
                </Button>

                <Button
                  variant='outlined'
                  size='large'
                  onClick={() => setReunioesModalOpen(true)}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'white',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  📸 Making Off
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
                mb: 6,
              }}
            >
              <Button
                variant='contained'
                startIcon={<ShareIcon />}
                onClick={handleShare}
                sx={{
                  bgcolor: '#4CAF50',
                  '&:hover': { bgcolor: '#45a049' },
                }}
              >
                Compartilhar Viagem
              </Button>

              <Button
                variant='contained'
                startIcon={<DownloadIcon />}
                onClick={handleDownloadRoteiro}
                sx={{
                  bgcolor: '#2196F3',
                  '&:hover': { bgcolor: '#1976D2' },
                }}
              >
                Baixar Roteiro
              </Button>

              <Button
                variant='contained'
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
                sx={{
                  bgcolor: '#FF9800',
                  '&:hover': { bgcolor: '#F57C00' },
                }}
              >
                Voltar ao Início
              </Button>
            </Box>
          </motion.div>

          {/* Final Message */}
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                textAlign: 'center',
                p: 4,
              }}
            >
              <Typography variant='h4' sx={{ mb: 2, fontWeight: 'bold' }}>
                Obrigado por essa jornada incrível! 🙏
              </Typography>
              <Typography variant='h6' sx={{ opacity: 0.9, mb: 3 }}>
                Que esta viagem tenha criado memórias que durarão para sempre.
                Cada sorriso, cada aventura, cada momento especial foi único!
              </Typography>
              <Typography variant='body1' sx={{ opacity: 0.8 }}>
                Até a próxima aventura! ✈️🌍
              </Typography>
            </Card>
          </motion.div>
        </motion.div>
      </Container>

      {/* Stats Dialog */}
      <Dialog
        open={showStats}
        onClose={() => setShowStats(false)}
        maxWidth='md'
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
          📊 Estatísticas da Viagem
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {Object.entries(tripStats).map(([key, value]) => (
              <Grid item xs={6} md={4} key={key}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    textAlign: 'center',
                    p: 2,
                  }}
                >
                  <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
                    {value}
                  </Typography>
                  <Typography variant='body2' sx={{ opacity: 0.8 }}>
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowStats(false)} sx={{ color: 'white' }}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Memories Dialog */}
      <Dialog
        open={showMemories}
        onClose={() => setShowMemories(false)}
        maxWidth='md'
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
          📸 Memórias Especiais
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {memories.map((memory, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant='h4' sx={{ mb: 1 }}>
                    {memory.emoji}
                  </Typography>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
                    {memory.title}
                  </Typography>
                  <Typography variant='body2' sx={{ opacity: 0.9 }}>
                    {memory.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShowMemories(false)}
            sx={{ color: 'white' }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal das Reuniões */}
      <ReunioesModal
        open={reunioesModalOpen}
        onClose={() => setReunioesModalOpen(false)}
      />
    </Box>
  );
};

export default TripEndPage;
