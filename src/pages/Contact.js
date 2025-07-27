import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #43cea2 0%, #fcb69f 100%)',
        py: 6,
        px: { xs: 1, sm: 4 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 480,
          width: '95vw',
          borderRadius: 5,
          p: { xs: 3, sm: 5 },
          background: 'rgba(255,255,255,0.97)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: 'Pacifico, cursive', color: '#185a9d', mb: 2, fontWeight: 700, letterSpacing: 1 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: '#333', fontWeight: 500 }}>
          <b>SupplySetu</b> is a platform dedicated to empowering street food vendors and small businesses by connecting them with trusted suppliers, enabling group buying, and providing real-time support.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: '#185a9d', fontWeight: 700, mb: 1 }}>Company Info</Typography>
        <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
          <b>Company:</b> SupplySetu Pvt. Ltd.<br/>
          <b>Location:</b> New Delhi, India<br/>
          <b>Email:</b> <a href="mailto:support@supplysetu.com" style={{ color: '#185a9d', textDecoration: 'none', fontWeight: 500 }}>support@supplysetu.com</a>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" sx={{ color: '#888' }}>
          &copy; {new Date().getFullYear()} SupplySetu. All rights reserved.
        </Typography>
      </Paper>
    </Box>
  );
} 