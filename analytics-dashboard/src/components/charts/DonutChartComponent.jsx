import React, { useState } from 'react';
import { Paper, Typography, Box, Grid, Chip, IconButton, Tooltip } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { styled } from '@mui/material/styles';
import { ExpandMore as ExpandMoreIcon, TrendingUp, TrendingDown } from '@mui/icons-material';

const data = [
  { name: 'Organic Search', value: 45, color: '#3f51b5', trend: 'up', change: '+12%' },
  { name: 'Direct', value: 25, color: '#4caf50', trend: 'up', change: '+8%' },
  { name: 'Social Media', value: 15, color: '#ff9800', trend: 'down', change: '-3%' },
  { name: 'Referral', value: 10, color: '#f44336', trend: 'up', change: '+5%' },
  { name: 'Email', value: 5, color: '#9c27b0', trend: 'up', change: '+2%' },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const CenterLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  pointerEvents: 'none',
}));

const CustomTooltip = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  fontSize: '0.875rem',
  boxShadow: theme.shadows[4],
}));

const DonutChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const centerValue = `${totalValue}K`;
  const centerLabel = 'Total Visits';
  
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  
  const onPieLeave = () => {
    setActiveIndex(null);
  };
  
  const CustomTooltipContent = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <CustomTooltip>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {data.name}
          </Typography>
          <Typography variant="body2">
            {data.value}K visits ({((data.value / totalValue) * 100).toFixed(1)}%)
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
            {data.trend === 'up' ? (
              <TrendingUp sx={{ fontSize: 14, color: 'success.main' }} />
            ) : (
              <TrendingDown sx={{ fontSize: 14, color: 'error.main' }} />
            )}
            <Typography variant="caption" sx={{ 
              color: data.trend === 'up' ? 'success.main' : 'error.main',
              fontWeight: 500
            }}>
              {data.change}
            </Typography>
          </Box>
        </CustomTooltip>
      );
    }
    return null;
  };
  
  return (
    <StyledPaper elevation={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
          Traffic Sources
        </Typography>
        <Tooltip title="View detailed breakdown">
          <span>
            <IconButton 
              size="small" 
              onClick={() => setExpanded(!expanded)}
              sx={{ color: 'text.secondary' }}
            >
              <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
      
      <Box sx={{ position: 'relative', height: expanded ? '300px' : '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={expanded ? '40%' : '50%'}
              outerRadius={expanded ? '70%' : '60%'}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke={activeIndex === index ? entry.color : 'none'}
                  strokeWidth={activeIndex === index ? 3 : 0}
                  style={{
                    filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <RechartsTooltip content={<CustomTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
        
        <CenterLabel>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
            {centerValue}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            {centerLabel}
          </Typography>
        </CenterLabel>
      </Box>
      
      {expanded && (
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={1}>
            {data.map((item, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    p: 1,
                    borderRadius: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box 
                      sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        backgroundColor: item.color,
                        boxShadow: `0 0 0 2px ${item.color}20`
                      }} 
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.value}K ({((item.value / totalValue) * 100).toFixed(1)}%)
                    </Typography>
                    <Chip 
                      label={item.change}
                      size="small"
                      color={item.trend === 'up' ? 'success' : 'error'}
                      variant="outlined"
                      sx={{ 
                        minWidth: 'auto',
                        fontSize: '0.7rem',
                        height: '20px'
                      }}
                      icon={item.trend === 'up' ? <TrendingUp sx={{ fontSize: 14 }} /> : <TrendingDown sx={{ fontSize: 14 }} />}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </StyledPaper>
  );
};

export default DonutChartComponent;