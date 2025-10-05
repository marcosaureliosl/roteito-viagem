import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 6, 
          borderRadius: 3,
          backgroundColor: 'background.paper',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <ErrorOutlineIcon 
            color="error" 
            sx={{ fontSize: 80, opacity: 0.8 }} 
          />
        </Box>
        
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Página não encontrada
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
          Ops! Parece que você tentou acessar uma página que não existe ou foi movida.
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
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
          Voltar para o Início
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFoundPage;
