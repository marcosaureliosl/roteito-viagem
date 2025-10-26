import {
  CameraAlt as CameraIcon,
  Close as CloseIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  PhotoLibrary as PhotoLibraryIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface ReunioesModalProps {
  open: boolean;
  onClose: () => void;
}

const ReunioesModal: React.FC<ReunioesModalProps> = ({ open, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Lista das fotos das reuniões
  const reunioesPhotos = [
    'WhatsApp Image 2025-10-26 at 09.47.23 (1).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.23.jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24 (1).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24 (2).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24 (3).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24 (4).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24 (5).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24 (6).jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.24.jpeg',
    'WhatsApp Image 2025-10-26 at 09.47.25.jpeg',
  ];

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? reunioesPhotos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === reunioesPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='lg'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CameraIcon color='primary' />
          <Typography variant='h6' component='div' sx={{ fontWeight: 'bold' }}>
            📸 Making Off das Reuniões
          </Typography>
        </Box>
        <IconButton onClick={onClose} size='small'>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 3 }}>
          {/* Foto Principal */}
          <Box
            sx={{
              position: 'relative',
              mb: 3,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              bgcolor: 'grey.100',
            }}
          >
            <Box
              component='img'
              src={`/reunioes/${reunioesPhotos[selectedImageIndex]}`}
              alt={`Foto da reunião ${selectedImageIndex + 1}`}
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Navegação da foto principal */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>

            {/* Contador de fotos */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                bgcolor: 'rgba(0,0,0,0.7)',
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
              }}
            >
              {selectedImageIndex + 1} / {reunioesPhotos.length}
            </Box>
          </Box>

          {/* Thumbnails */}
          <Box sx={{ mb: 2 }}>
            <Typography variant='subtitle1' sx={{ mb: 2, fontWeight: 'bold' }}>
              <PhotoLibraryIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Galeria Completa
            </Typography>
            <Grid container spacing={1}>
              {reunioesPhotos.map((photo, index) => (
                <Grid item xs={6} sm={4} md={2.4} key={index}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      border: selectedImageIndex === index ? 3 : 1,
                      borderColor:
                        selectedImageIndex === index
                          ? 'primary.main'
                          : 'grey.300',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 3,
                      },
                    }}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <CardMedia
                      component='img'
                      height='120'
                      image={`/reunioes/${photo}`}
                      alt={`Thumbnail ${index + 1}`}
                      sx={{
                        objectFit: 'cover',
                        filter:
                          selectedImageIndex === index
                            ? 'none'
                            : 'brightness(0.8)',
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Informações da sessão */}
          <Card
            sx={{ bgcolor: 'primary.light', color: 'white', borderRadius: 2 }}
          >
            <CardContent>
              <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                🎬 Sessão de Planejamento
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Fotos das reuniões de planejamento da viagem para Orlando 2025.
                Momentos especiais compartilhados durante o processo de
                organização!
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label='26/10/2025'
                  size='small'
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
                <Chip
                  label='Planejamento'
                  size='small'
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
                <Chip
                  label='Making Off'
                  size='small'
                  sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button onClick={onClose} variant='contained' color='primary' fullWidth>
          Fechar Galeria
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReunioesModal;
