import React, { useState } from 'react';
import { Paper, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowUpward as ArrowUpwardIcon, ArrowDownward as ArrowDownwardIcon, TrendingUp, TrendingDown, Download as DownloadIcon } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '180px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const StatCard = ({ title, value, increase, timeFrame, color, detailedData }) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const isPositive = increase && increase.startsWith('+');
  const isNegative = increase && increase.startsWith('-');
  
  return (
    <>
      <StyledPaper elevation={3} onClick={handleClick}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: color }}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          {isPositive && <ArrowUpwardIcon sx={{ color: 'success.main', fontSize: 20, mr: 0.5 }} />}
          {isNegative && <ArrowDownwardIcon sx={{ color: 'error.main', fontSize: 20, mr: 0.5 }} />}
          <Typography 
            variant="body1" 
            sx={{ 
              color: isPositive ? 'success.main' : isNegative ? 'error.main' : 'text.secondary', 
              mr: 1, 
              fontWeight: 'medium' 
            }}
          >
            {increase}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {timeFrame}
          </Typography>
        </Box>
      </StyledPaper>
      
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
        disableAutoFocus={true}
        disableRestoreFocus={true}
        disablePortal={false}
        transitionDuration={0}
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isPositive ? <TrendingUp color="success" /> : isNegative ? <TrendingDown color="error" /> : null}
            {title} - Detailed View
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Current Value
                </Typography>
                <Typography variant="h2" sx={{ color: color, fontWeight: 'bold' }}>
                  {value}
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Change
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  {isPositive && <ArrowUpwardIcon sx={{ color: 'success.main' }} />}
                  {isNegative && <ArrowDownwardIcon sx={{ color: 'error.main' }} />}
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: isPositive ? 'success.main' : isNegative ? 'error.main' : 'text.secondary',
                      fontWeight: 'bold' 
                    }}
                  >
                    {increase}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {timeFrame}
                </Typography>
              </Paper>
            </Grid>
            
            {detailedData && (
              <Grid size={{ xs: 12 }}>
                <Paper elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Detailed Breakdown
                  </Typography>
                  <Grid container spacing={2}>
                    {detailedData.map((item, index) => (
                      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body2">{item.label}</Typography>
                          <Chip 
                            label={item.value} 
                            size="small" 
                            color={item.trend === 'up' ? 'success' : item.trend === 'down' ? 'error' : 'default'}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            )}
            
            <Grid size={{ xs: 12 }}>
              <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="outlined" startIcon={<DownloadIcon />}>
                    Export Data
                  </Button>
                  <Button variant="outlined">
                    View Historical Data
                  </Button>
                  <Button variant="outlined">
                    Set Alert
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StatCard;