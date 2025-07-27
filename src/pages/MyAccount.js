import React from 'react';
import { Box, Typography, Card, Button, List, ListItem, ListItemText, Avatar, Paper, Chip, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useNavigate } from 'react-router-dom';

export default function MyAccount() {
  const navigate = useNavigate();
  const user = { name: 'Anurag Aryan', phone: '+91-9876543210', role: 'Vendor' };
  const orders = [
    { id: 'o1', supplier: 'FreshMart', product: 'Tomatoes', qty: 10, status: 'Delivered' },
    { id: 'o2', supplier: 'VeggieHub', product: 'Carrots', qty: 5, status: 'Pending' },
  ];
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #fcb69f 0%, #ffecd2 100%)',
        py: 6,
        px: { xs: 1, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 420,
          width: '100%',
          borderRadius: 5,
          p: { xs: 3, sm: 5 },
          background: 'rgba(255,255,255,0.97)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Avatar sx={{ bgcolor: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', width: 72, height: 72, mx: 'auto', mb: 2, fontSize: 40, boxShadow: '0 2px 8px #43cea255' }}>
          <PersonIcon fontSize="inherit" />
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#185a9d', fontFamily: 'Montserrat, sans-serif', mb: 1 }}>{user.name}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
          <PhoneIphoneIcon sx={{ color: '#43cea2', fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: '#333', fontWeight: 500 }}>{user.phone}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
          <BadgeIcon sx={{ color: '#f7971e', fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: '#333', fontWeight: 500 }}>Role: {user.role}</Typography>
        </Box>
        <Button variant="contained" sx={{
          background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: 3,
          px: 3,
          boxShadow: '0 2px 8px #43cea255',
          textTransform: 'none',
          '&:hover': {
            background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)',
          },
          mt: 1
        }} onClick={() => navigate('/profile')}>Edit Profile</Button>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 420,
          width: '100%',
          borderRadius: 5,
          p: { xs: 2, sm: 3 },
          background: 'rgba(255,255,255,0.93)',
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)',
          textAlign: 'left',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: '#185a9d', fontWeight: 700, textAlign: 'center' }}>Recent Orders</Typography>
        <List>
          {orders.map(o => (
            <React.Fragment key={o.id}>
              <ListItem divider sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333' }}>{o.product} from {o.supplier}</Typography>
                  <Typography variant="body2" sx={{ color: '#888' }}>Qty: {o.qty}</Typography>
                </Box>
                <Chip
                  icon={o.status === 'Delivered' ? <LocalShippingIcon sx={{ color: '#43cea2' }} /> : <PendingActionsIcon sx={{ color: '#f7971e' }} />}
                  label={o.status}
                  sx={{
                    bgcolor: o.status === 'Delivered' ? '#e0f7fa' : '#fffde7',
                    color: o.status === 'Delivered' ? '#00796b' : '#b26a00',
                    fontWeight: 600,
                    px: 1.5,
                  }}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
} 