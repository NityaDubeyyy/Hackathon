import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Avatar, Button, CircularProgress, Alert, Chip, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

export default function SupplierList() {
  // Mock supplier data
  const mockSuppliers = [
    { id: '1', name: 'FreshMart', location: 'Delhi', rating: 4.8 },
    { id: '2', name: 'VeggieHub', location: 'Mumbai', rating: 4.6 },
    { id: '3', name: 'SpiceWorld', location: 'Kolkata', rating: 4.9 },
    { id: '4', name: 'DairyDirect', location: 'Chennai', rating: 4.7 },
    { id: '5', name: 'GrainBazaar', location: 'Bangalore', rating: 4.5 },
  ];
  const [suppliers, setSuppliers] = useState(mockSuppliers);
  const [loading] = useState(false);
  const [error] = useState('');
  const navigate = useNavigate();

  if (loading) return <Box p={2}><CircularProgress /></Box>;
  if (error) return <Box p={2}><Alert severity="error">{error}</Alert></Box>;

  const vegImages = [
    { src: 'https://cdn-icons-png.flaticon.com/512/415/415733.png', alt: 'Tomato' },
    { src: 'https://cdn-icons-png.flaticon.com/512/415/415734.png', alt: 'Onion' },
    { src: 'https://cdn-icons-png.flaticon.com/512/415/415735.png', alt: 'Carrot' },
    { src: 'https://cdn-icons-png.flaticon.com/512/415/415736.png', alt: 'Broccoli' },
    { src: 'https://cdn-icons-png.flaticon.com/512/415/415737.png', alt: 'Potato' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #fcb69f 0%, #ffecd2 100%)',
        py: 6,
        px: { xs: 1, sm: 4 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: '#185a9d', fontFamily: 'Pacifico, cursive', textAlign: 'center', letterSpacing: 1 }}>
        Suppliers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {suppliers.map(s => (
          <Grid item xs={12} sm={6} md={4} key={s.id}>
            <Card
              sx={{
                cursor: 'pointer',
                borderRadius: 4,
                background: 'linear-gradient(120deg, #fffbe6 60%, #f3e5f5 100%)',
                boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
                transition: '0.2s',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'scale(1.04) rotateY(-3deg)',
                  background: 'linear-gradient(120deg, #f3e5f5 60%, #fffbe6 100%)',
                },
              }}
              onClick={() => navigate(`/supplier/${s.id}`)}
            >
              <CardContent sx={{ textAlign: 'center', pb: 1 }}>
                <Avatar
                  sx={{
                    bgcolor: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
                    width: 64,
                    height: 64,
                    fontSize: 32,
                    mx: 'auto',
                    mb: 1.5,
                    boxShadow: '0 2px 8px #43cea255',
                  }}
                >
                  {s.name[0]}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>{s.name}</Typography>
                {/* Remove vegetable images for FreshMart */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ color: '#f7971e', fontSize: 20, mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">{s.location}</Typography>
                </Box>
                <Tooltip title="Supplier Rating" arrow>
                  <Chip
                    icon={<StarIcon sx={{ color: '#ffd600' }} />}
                    label={s.rating}
                    sx={{ bgcolor: '#fffde7', color: '#7b3f00', fontWeight: 600, fontSize: 16, px: 1.5, mb: 1 }}
                  />
                </Tooltip>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                    color: '#fff',
                    borderRadius: 3,
                    fontWeight: 600,
                    px: 3,
                    boxShadow: '0 2px 8px #43cea255',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)',
                    },
                  }}
                  onClick={e => { e.stopPropagation(); navigate(`/supplier/${s.id}`); }}
                >
                  View Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 