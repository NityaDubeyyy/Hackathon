import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Button, Chip, Paper } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Vendors() {
  const vendors = [
    { id: 'v1', name: 'Ravi Kumar', location: 'Delhi', groupBuy: true },
    { id: 'v2', name: 'Sita Devi', location: 'Mumbai', groupBuy: false },
    { id: 'v3', name: 'Amit Singh', location: 'Kolkata', groupBuy: true },
  ];
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #43cea2 0%, #fcb69f 100%)',
        py: 6,
        px: { xs: 1, sm: 4 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: '#185a9d', fontFamily: 'Pacifico, cursive', textAlign: 'center', letterSpacing: 1 }}>
        Vendors
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {vendors.map(v => (
          <Grid item xs={12} sm={6} md={4} key={v.id}>
            <Card
              sx={{
                borderRadius: 4,
                background: 'linear-gradient(120deg, #fffbe6 60%, #f3e5f5 100%)',
                boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
                transition: '0.2s',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'scale(1.04) rotateY(-3deg)',
                  background: 'linear-gradient(120deg, #f3e5f5 60%, #fffbe6 100%)',
                },
                p: 2,
              }}
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
                  {v.name[0]}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 0.5 }}>{v.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ color: '#f7971e', fontSize: 20, mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">{v.location}</Typography>
                </Box>
                {v.groupBuy ? (
                  <Chip
                    icon={<GroupAddIcon sx={{ color: '#43cea2' }} />}
                    label="Join Group Buy"
                    sx={{
                      bgcolor: '#e0f7fa',
                      color: '#00796b',
                      fontWeight: 600,
                      px: 1.5,
                      fontSize: 16,
                      mt: 1,
                      boxShadow: '0 2px 8px #43cea255',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: '#b2ebf2',
                        color: '#004d40',
                      },
                    }}
                    clickable
                  />
                ) : (
                  <Chip
                    label="No Group Buy"
                    sx={{
                      bgcolor: '#fffde7',
                      color: '#b26a00',
                      fontWeight: 600,
                      px: 1.5,
                      fontSize: 16,
                      mt: 1,
                    }}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 