import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { ArrowUpward as ArrowUpwardIcon, ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Card ka main design
const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(2, 3),
  height: '100%',
  minHeight: '180px',
  borderRadius: '20px',
  background: `linear-gradient(135deg, ${alpha(color, 0.1)} 0%, ${alpha(color, 0.03)} 100%)`,
  border: `1px solid ${alpha(color, 0.2)}`,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.5)})`,
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: `0 20px 40px ${alpha(color, 0.2)}`,
  },
}));

// Chhota sa line chart
const SparklineContainer = styled(Box)({
  height: '50px',
  marginTop: 'auto',
  opacity: 0.7,
});

const ModernStatCard = ({ title, value, increase, timeFrame, color, sparklineData = [] }) => {
  const isPositive = increase && increase.startsWith('+');
  const isNegative = increase && increase.startsWith('-');
  
  // Agar sparklineData na ho to random data generate karein
  const defaultSparklineData = sparklineData.length > 0 ? sparklineData : 
    Array.from({ length: 20 }, () => ({
      value: Math.random() * 100 + 50,
    }));

  return (
    <StyledPaper color={color}>
      <Box>
        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.9rem' }}>
          {title}
        </Typography>
        <Typography 
          variant="h3" 
          component="div" 
          sx={{ fontWeight: 700, color: color, fontSize: '2.2rem', my: 1 }}
        >
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isPositive && <ArrowUpwardIcon sx={{ color: 'success.main', fontSize: 18, mr: 0.5 }} />}
          {isNegative && <ArrowDownwardIcon sx={{ color: 'error.main', fontSize: 18, mr: 0.5 }} />}
          <Typography 
            variant="body2" 
            sx={{ 
              color: isPositive ? 'success.main' : isNegative ? 'error.main' : 'text.secondary', 
              mr: 1, 
              fontWeight: 600
            }}
          >
            {increase}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {timeFrame}
          </Typography>
        </Box>
      </Box>
      <SparklineContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={defaultSparklineData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2.5}
              dot={false}
              strokeDasharray={isNegative ? "5 5" : "0"}
            />
          </LineChart>
        </ResponsiveContainer>
      </SparklineContainer>
    </StyledPaper>
  );
};

export default ModernStatCard;