import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '852456') {
      onSuccess();
      setPassword('');
      setError('');
      onClose();
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <DialogTitle>
        <Typography variant='h6' component='div' sx={{ fontWeight: 'bold' }}>
          🔐 Acesso às Documentações
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography variant='body1' color='text.secondary' sx={{ mb: 2 }}>
            Digite a senha para acessar as documentações da viagem:
          </Typography>
          <TextField
            autoFocus
            margin='dense'
            label='Senha'
            type='password'
            fullWidth
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{ mb: 2 }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={handleClose} color='inherit'>
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant='contained'
          color='primary'
          sx={{
            fontWeight: 'bold',
            px: 3,
          }}
        >
          Acessar Documentações
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
