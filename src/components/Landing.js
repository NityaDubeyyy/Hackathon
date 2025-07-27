import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(8px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  padding: '2rem',
  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
  cursor: 'pointer',
  willChange: 'transform',
  '&:hover': {
    transform: 'scale3d(1.04,1.04,1.04) rotateY(4deg)',
    boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.37)',
  },
};

const gradientBg = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
};

export default function Landing() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={gradientBg}>
      <Box
        sx={{
          ...glassStyle,
          maxWidth: 400,
          width: '90vw',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#fff',
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            mb: 2,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          SupplySetu
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: '#e0e0e0', mb: 4 }}
        >
          {t('Welcome to SupplySetu')}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            px: 4,
            py: 1.5,
            borderRadius: '2rem',
            boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.25)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.08) rotateY(-6deg)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)',
            },
          }}
          onClick={() => navigate('/login')}
        >
          {t('Login / Register')}
        </Button>
      </Box>
    </Box>
  );
} 