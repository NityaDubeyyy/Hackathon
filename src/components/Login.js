import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField, InputAdornment, IconButton, Tabs, Tab, useTheme } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTranslation } from 'react-i18next';

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px 0 rgba(252, 182, 159, 0.3)',
  backdropFilter: 'blur(12px)',
  borderRadius: { xs: '16px', sm: '24px' },
  border: '1px solid rgba(255, 255, 255, 0.3)',
  padding: { xs: '1.5rem 1rem', sm: '2rem 1.5rem', md: '2.5rem 2rem' },
  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
  maxWidth: { xs: '95vw', sm: 400, md: 450 },
  width: { xs: '95vw', sm: '90vw', md: 450 },
  textAlign: 'center',
  margin: { xs: '1rem', sm: '2rem' },
};

const gradientBg = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  p: { xs: '0.5rem', sm: '1rem', md: '2rem' },
  overflow: 'auto',
};

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [step, setStep] = useState(1);
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' or 'email'
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [userType, setUserType] = useState('vendor'); // 'vendor' or 'supplier'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  // Handler for phone/OTP login
  const handleOtpLogin = () => {
    if (step === 1) {
      setStep(2); // Simulate sending OTP
    } else {
      // Simulate OTP verification success
      navigate('/dashboard');
    }
  };

  // Handler for email/password login
  const handleEmailLogin = () => {
    // Simulate email/password authentication success
    navigate('/dashboard');
  };

  // Handler for registration
  const handleRegister = () => {
    // Simulate registration success
    navigate('/dashboard');
  };

  return (
    <Box sx={{
      ...gradientBg,
      background: isLight 
        ? 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
        : 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    }}>
      <Box sx={{
        ...glassStyle,
        background: isLight ? 'rgba(255, 255, 255, 0.2)' : 'rgba(26, 26, 46, 0.3)',
        boxShadow: isLight 
          ? '0 8px 32px 0 rgba(252, 182, 159, 0.3)' 
          : '0 8px 32px 0 rgba(139, 211, 221, 0.2)',
        border: isLight 
          ? '1px solid rgba(255, 255, 255, 0.3)' 
          : '1px solid rgba(139, 211, 221, 0.2)',
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700, 
            color: isLight ? '#185a9d' : '#8bd3dd', 
            mb: { xs: 1.5, sm: 2 }, 
            fontFamily: 'Inter, sans-serif', 
            textShadow: isLight 
              ? '0 2px 8px rgba(24, 90, 157, 0.2)' 
              : '0 2px 8px rgba(139, 211, 221, 0.2)',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            background: isLight
              ? 'linear-gradient(45deg, #185a9d 30%, #f7971e 90%)'
              : 'linear-gradient(45deg, #8bd3dd 30%, #f7971e 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: isLight 
              ? 'drop-shadow(0 2px 4px rgba(24, 90, 157, 0.3))'
              : 'drop-shadow(0 2px 4px rgba(139, 211, 221, 0.3))'
          }}
        >
          {mode === 'login' ? t('Login / Register') : 'Register'}
        </Typography>
        
        {/* Mode Tabs */}
        <Tabs
          value={mode}
          onChange={(e, newValue) => setMode(newValue)}
          sx={{
            mb: { xs: 1.5, sm: 2 },
            '& .MuiTab-root': {
              color: isLight ? 'rgba(24, 90, 157, 0.8)' : 'rgba(139, 211, 221, 0.8)',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              minHeight: { xs: '40px', sm: '48px' },
              transition: 'all 0.3s ease',
              '&:hover': {
                color: isLight ? '#185a9d' : '#8bd3dd',
                transform: 'translateY(-2px)',
              },
              '&.Mui-selected': {
                color: '#f7971e',
                textShadow: '0 0 10px rgba(247, 151, 30, 0.3)',
              },
            },
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(90deg, #f7971e 0%, #185a9d 100%)',
              height: '3px',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(247, 151, 30, 0.3)',
            },
          }}
        >
          <Tab label="Login" value="login" />
          <Tab label="Register" value="register" />
        </Tabs>

        {mode === 'login' ? (
          <>
            {/* Toggle between login methods */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              justifyContent: 'center', 
              mb: { xs: 1.5, sm: 2 }, 
              gap: { xs: 0.75, sm: 1 } 
            }}>
              <Button
                variant={loginMethod === 'phone' ? 'contained' : 'outlined'}
                sx={{ 
                  borderRadius: '2rem', 
                  minWidth: { xs: '100%', sm: 120 }, 
                  width: { xs: '100%', sm: 'auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  py: { xs: 1, sm: 1.25 },
                  background: loginMethod === 'phone' 
                    ? 'linear-gradient(135deg, #185a9d 0%, #43cea2 100%)' 
                    : 'transparent',
                  color: loginMethod === 'phone' ? '#fff' : '#185a9d',
                  border: loginMethod === 'phone' 
                    ? 'none' 
                    : '2px solid rgba(24, 90, 157, 0.3)',
                  boxShadow: loginMethod === 'phone' 
                    ? '0 8px 25px rgba(24, 90, 157, 0.4)' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: loginMethod === 'phone' 
                      ? 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)' 
                      : 'rgba(24, 90, 157, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: loginMethod === 'phone' 
                      ? '0 12px 35px rgba(24, 90, 157, 0.6)' 
                      : '0 4px 15px rgba(24, 90, 157, 0.2)',
                  }
                }}
                onClick={() => setLoginMethod('phone')}
              >
                {t('Phone/OTP')}
              </Button>
              <Button
                variant={loginMethod === 'email' ? 'contained' : 'outlined'}
                sx={{ 
                  borderRadius: '2rem', 
                  minWidth: { xs: '100%', sm: 120 }, 
                  width: { xs: '100%', sm: 'auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  py: { xs: 1, sm: 1.25 },
                  background: loginMethod === 'email' 
                    ? 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' 
                    : 'transparent',
                  color: loginMethod === 'email' ? '#fff' : '#185a9d',
                  border: loginMethod === 'email' 
                    ? 'none' 
                    : '2px solid rgba(24, 90, 157, 0.3)',
                  boxShadow: loginMethod === 'email' 
                    ? '0 8px 25px rgba(247, 151, 30, 0.4)' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: loginMethod === 'email' 
                      ? 'linear-gradient(135deg, #ffd200 0%, #f7971e 100%)' 
                      : 'rgba(24, 90, 157, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: loginMethod === 'email' 
                      ? '0 12px 35px rgba(247, 151, 30, 0.6)' 
                      : '0 4px 15px rgba(24, 90, 157, 0.2)',
                  }
                }}
                onClick={() => setLoginMethod('email')}
              >
                {t('Email/Password')}
              </Button>
            </Box>
            {/* Login forms */}
            {loginMethod === 'phone' ? (
              <>
                <Typography variant="body1" sx={{ 
                  color: isLight ? '#185a9d' : '#8bd3dd', 
                  mb: { xs: 2, sm: 3 }, 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  px: { xs: 1, sm: 0 },
                  textShadow: isLight 
                    ? '0 1px 3px rgba(24, 90, 157, 0.2)'
                    : '0 1px 3px rgba(139, 211, 221, 0.2)'
                }}>
                  {step === 1 ? t('Enter your mobile number to continue') : t('Enter the OTP sent to your phone')}
                </Typography>
                {step === 1 ? (
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t('Mobile Number')}
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphoneIcon sx={{ color: '#185a9d' }} />
                        </InputAdornment>
                      ),
                      sx: { 
                        background: 'rgba(255,255,255,0.9)', 
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        '&:focus-within': {
                          background: 'rgba(255,255,255,0.95)',
                          boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                        }
                      },
                    }}
                    sx={{ 
                      mb: { xs: 2, sm: 3 }, 
                      width: '100%',
                      '& .MuiInputBase-root': {
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        height: { xs: '48px', sm: '56px' }
                      }
                    }}
                  />
                ) : (
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t('OTP')}
                    value={otp}
                    onChange={e => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOpenIcon sx={{ color: '#f7971e' }} />
                        </InputAdornment>
                      ),
                      sx: { 
                        background: 'rgba(255,255,255,0.9)', 
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        '&:focus-within': {
                          background: 'rgba(255,255,255,0.95)',
                          boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                        }
                      },
                    }}
                    sx={{ 
                      mb: { xs: 2, sm: 3 }, 
                      width: '100%',
                      '& .MuiInputBase-root': {
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        height: { xs: '48px', sm: '56px' }
                      }
                    }}
                  />
                )}
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '2rem',
                    boxShadow: '0 4px 24px 0 rgba(247, 151, 30, 0.25)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.06) rotateY(-6deg)',
                      boxShadow: '0 8px 32px 0 rgba(247, 151, 30, 0.37)',
                      background: 'linear-gradient(90deg, #ffd200 0%, #f7971e 100%)',
                    },
                    mb: 2,
                    width: '100%',
                  }}
                  onClick={handleOtpLogin}
                >
                  {step === 1 ? t('Send OTP') : t('Verify & Login')}
                </Button>
              </>
            ) : (
              <>
                <Typography variant="body1" sx={{ 
                  color: '#185a9d', 
                  mb: { xs: 2, sm: 3 }, 
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  px: { xs: 1, sm: 0 },
                  textShadow: '0 1px 3px rgba(24, 90, 157, 0.2)'
                }}>
                  {t('Enter your email and password to login')}
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={t('Email')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  InputProps={{
                    sx: { 
                      background: 'rgba(255,255,255,0.9)', 
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      '&:focus-within': {
                        background: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                      }
                    },
                  }}
                  sx={{ 
                    mb: { xs: 1.5, sm: 2 }, 
                    width: '100%',
                    '& .MuiInputBase-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      height: { xs: '48px', sm: '56px' }
                    }
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={t('Password')}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  InputProps={{
                    sx: { 
                      background: 'rgba(255,255,255,0.9)', 
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      '&:focus-within': {
                        background: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                      }
                    },
                  }}
                  sx={{ 
                    mb: { xs: 2, sm: 3 }, 
                    width: '100%',
                    '& .MuiInputBase-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      height: { xs: '48px', sm: '56px' }
                    }
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 50%, #43cea2 100%)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    borderRadius: '2rem',
                    boxShadow: '0 8px 32px rgba(247, 151, 30, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.02)',
                      boxShadow: '0 15px 45px rgba(247, 151, 30, 0.6)',
                      background: 'linear-gradient(135deg, #ffd200 0%, #43cea2 50%, #f7971e 100%)',
                    },
                    mb: { xs: 1.5, sm: 2 },
                    width: '100%',
                    py: { xs: 1.25, sm: 1.5 }
                  }}
                  onClick={handleEmailLogin}
                >
                  {t('Login')}
                </Button>
              </>
            )}
          </>
        ) : (
          <>
            {/* Registration Mode */}
            <Typography variant="body1" sx={{ 
              color: '#185a9d', 
              mb: { xs: 2, sm: 3 }, 
              opacity: 0.9,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              px: { xs: 1, sm: 0 },
              textShadow: '0 1px 3px rgba(24, 90, 157, 0.2)'
            }}>
              Register as a {userType}
            </Typography>
            
            {/* User Type Toggle */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center', 
              mb: { xs: 1.5, sm: 2 }, 
              gap: { xs: 0.75, sm: 1 } 
            }}>
              <Button
                variant={userType === 'vendor' ? 'contained' : 'outlined'}
                sx={{ 
                  borderRadius: '2rem', 
                  minWidth: { xs: '100%', sm: 100 },
                  width: { xs: '100%', sm: 'auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  py: { xs: 1, sm: 1.25 },
                  background: userType === 'vendor' 
                    ? 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)' 
                    : 'transparent',
                  color: userType === 'vendor' ? '#fff' : '#185a9d',
                  border: userType === 'vendor' 
                    ? 'none' 
                    : '2px solid rgba(24, 90, 157, 0.3)',
                  boxShadow: userType === 'vendor' 
                    ? '0 8px 25px rgba(67, 206, 162, 0.4)' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: userType === 'vendor' 
                      ? 'linear-gradient(135deg, #185a9d 0%, #43cea2 100%)' 
                      : 'rgba(67, 206, 162, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: userType === 'vendor' 
                      ? '0 12px 35px rgba(67, 206, 162, 0.6)' 
                      : '0 4px 15px rgba(67, 206, 162, 0.2)',
                  }
                }}
                onClick={() => setUserType('vendor')}
              >
                Vendor
              </Button>
              <Button
                variant={userType === 'supplier' ? 'contained' : 'outlined'}
                sx={{ 
                  borderRadius: '2rem', 
                  minWidth: { xs: '100%', sm: 100 },
                  width: { xs: '100%', sm: 'auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  py: { xs: 1, sm: 1.25 },
                  background: userType === 'supplier' 
                    ? 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' 
                    : 'transparent',
                  color: userType === 'supplier' ? '#fff' : '#185a9d',
                  border: userType === 'supplier' 
                    ? 'none' 
                    : '2px solid rgba(24, 90, 157, 0.3)',
                  boxShadow: userType === 'supplier' 
                    ? '0 8px 25px rgba(247, 151, 30, 0.4)' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: userType === 'supplier' 
                      ? 'linear-gradient(135deg, #ffd200 0%, #f7971e 100%)' 
                      : 'rgba(247, 151, 30, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: userType === 'supplier' 
                      ? '0 12px 35px rgba(247, 151, 30, 0.6)' 
                      : '0 4px 15px rgba(247, 151, 30, 0.2)',
                  }
                }}
                onClick={() => setUserType('supplier')}
              >
                Supplier
              </Button>
            </Box>

            {/* Registration Form */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              InputProps={{
                sx: { 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:focus-within': {
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                  }
                },
              }}
              sx={{ 
                mb: { xs: 1.5, sm: 2 }, 
                width: '100%',
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  height: { xs: '48px', sm: '56px' }
                }
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              InputProps={{
                sx: { 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:focus-within': {
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                  }
                },
              }}
              sx={{ 
                mb: { xs: 1.5, sm: 2 }, 
                width: '100%',
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  height: { xs: '48px', sm: '56px' }
                }
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Phone Number"
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
              InputProps={{
                sx: { 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:focus-within': {
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                  }
                },
              }}
              sx={{ 
                mb: { xs: 1.5, sm: 2 }, 
                width: '100%',
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  height: { xs: '48px', sm: '56px' }
                }
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              InputProps={{
                sx: { 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:focus-within': {
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                  }
                },
              }}
              sx={{ 
                mb: { xs: 1.5, sm: 2 }, 
                width: '100%',
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  height: { xs: '48px', sm: '56px' }
                }
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              InputProps={{
                sx: { 
                  background: 'rgba(255,255,255,0.9)', 
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:focus-within': {
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                  }
                },
              }}
              sx={{ 
                mb: { xs: 2, sm: 3 }, 
                width: '100%',
                '& .MuiInputBase-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  height: { xs: '48px', sm: '56px' }
                }
              }}
            />
            <Button
              variant="contained"
              size="large"
              fullWidth
                                sx={{
                    background: 'linear-gradient(135deg, #185a9d 0%, #43cea2 50%, #f7971e 100%)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    borderRadius: '2rem',
                    boxShadow: '0 8px 32px rgba(24, 90, 157, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.02)',
                      boxShadow: '0 15px 45px rgba(24, 90, 157, 0.6)',
                      background: 'linear-gradient(135deg, #43cea2 0%, #f7971e 50%, #185a9d 100%)',
                    },
                    mb: { xs: 1.5, sm: 2 },
                    width: '100%',
                    py: { xs: 1.25, sm: 1.5 }
                  }}
              onClick={handleRegister}
            >
              Register as {userType}
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
} 