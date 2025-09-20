import React from 'react';
import { Paper, Box, Typography, lighten } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const AttractiveStatCard = ({ icon, title, value, trend, color }) => {
  const isPositive = trend && trend.startsWith('+');

  return (
    <Paper
      elevation={4}
      sx={{
        p: 2.5,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 20px 40px -10px ${lighten(color, 0.8)}`,
        },
      }}
    >
      {/* Gradient Icon Background */}
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 2.5,
          background: `linear-gradient(145deg, ${color} 0%, ${lighten(color, 0.25)} 100%)`,
          boxShadow: `0 4px 12px ${lighten(color, 0.7)}`,
        }}
      >
        {icon}
      </Box>
      
      {/* Text Content */}
      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', my: 0.5 }}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: isPositive ? 'success.main' : 'error.main' }}>
          {isPositive ? <ArrowUpwardIcon sx={{ fontSize: 16, mr: 0.5 }} /> : <ArrowDownwardIcon sx={{ fontSize: 16, mr: 0.5 }} />}
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
            {trend}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default AttractiveStatCard;

