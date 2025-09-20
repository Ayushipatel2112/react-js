import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Container, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModernHeader from '../components/layout/ModernHeader';
import ModernStatCard from '../components/dashboard/ModernStatCard';
import DonutChartComponent from '../components/charts/DonutChartComponent';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  margin: '0 auto',
  maxWidth: 'calc(100% - 16px)',
}));

const ChartPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '350px',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
}));

const ChartHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
}));

const ChartTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  fontSize: '1.1rem',
}));

const ModernDashboard = () => {
  const [selectedDateRange, setSelectedDateRange] = useState('Last 30 Days');
  const [isCompareActive, setIsCompareActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Dummy data and handlers...
  const statCardDetails = { 'Total Users': [], 'Revenue': [], 'Conversion Rate': [], 'Active Sessions': [] };
  const sparklineData = { 'Total Users': [], 'Revenue': [], 'Conversion Rate': [], 'Active Sessions': [] };
  const handleDateRangeChange = (range) => setSelectedDateRange(range);
  const handleCompareToggle = (active) => setIsCompareActive(active);
  const handleDarkModeToggle = () => setIsDarkMode(!isDarkMode);
  const handleSearch = (query) => console.log('Searching for:', query);
  const handleRefresh = () => console.log('Refreshing data...');
  const handleSettings = () => console.log('Opening settings...');
  const handleLogout = () => console.log('Logging out...');

  return (
    <Box sx={{
      minHeight: '100vh',
      background: isDarkMode
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      transition: 'background 0.3s ease',
    }}>
      <ModernHeader
        selectedDateRange={selectedDateRange}
        onDateRangeChange={handleDateRangeChange}
        isCompareActive={isCompareActive}
        onCompareToggle={handleCompareToggle}
        isDarkMode={isDarkMode}
        onDarkModeToggle={handleDarkModeToggle}
        onSearch={handleSearch}
        onRefresh={handleRefresh}
        onSettings={handleSettings}
        onUserLogout={handleLogout}
      />

      <StyledContainer>
        {/* --- SECTION 1: Stat Cards --- */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* FIX: Removed the 'item' prop from all Grid components and replaced <span> with <Box> inside <Fade> */}
          <Grid xs={12} sm={6} md={3}>
            <Fade in timeout={600}>
              <Box>
                <ModernStatCard
                  title="Total Users" value="2,345" increase="+12%" timeFrame="from last month" color="#3f51b5"
                  detailedData={statCardDetails['Total Users']} sparklineData={sparklineData['Total Users']}
                />
              </Box>
            </Fade>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Fade in timeout={800}>
              <Box>
               <ModernStatCard
                  title="Revenue" value="$34,252" increase="+8%" timeFrame="from last month" color="#4caf50"
                  detailedData={statCardDetails['Revenue']} sparklineData={sparklineData['Revenue']}
                />
              </Box>
            </Fade>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Fade in timeout={1000}>
              <Box>
                <ModernStatCard
                  title="Conversion Rate" value="3.25%" increase="+3%" timeFrame="from last month" color="#ff9800"
                  detailedData={statCardDetails['Conversion Rate']} sparklineData={sparklineData['Conversion Rate']}
                />
              </Box>
            </Fade>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Fade in timeout={1200}>
              <Box>
                <ModernStatCard
                  title="Active Sessions" value="234" increase="+18%" timeFrame="from last month" color="#f44336"
                  detailedData={statCardDetails['Active Sessions']} sparklineData={sparklineData['Active Sessions']}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* --- SECTION 2: Main Charts (Line and Donut) --- */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid xs={12} lg={8}>
            <Fade in timeout={1400}>
              <ChartPaper>
                <ChartHeader>
                  <ChartTitle>Monthly Revenue Trends</ChartTitle>
                  <Typography variant="body2" color="textSecondary">{selectedDateRange}</Typography>
                </ChartHeader>
                <Box sx={{ flexGrow: 1, height: 'auto', minHeight: '250px' }}>
                  <LineChartComponent />
                </Box>
              </ChartPaper>
            </Fade>
          </Grid>
          <Grid xs={12} lg={4}>
            <Fade in timeout={1600}>
              <ChartPaper>
                <ChartHeader>
                  <ChartTitle>Traffic Sources</ChartTitle>
                </ChartHeader>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', minHeight: '250px' }}>
                  <DonutChartComponent />
                </Box>
              </ChartPaper>
            </Fade>
          </Grid>
        </Grid>

        {/* --- SECTION 3: Full-Width Chart (Bar Chart) --- */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid xs={12}>
            <Fade in timeout={1800}>
              <ChartPaper>
                <ChartHeader>
                  <ChartTitle>User Engagement by Platform</ChartTitle>
                  <Typography variant="caption" color="textSecondary">
                    Performance metrics across different platforms
                  </Typography>
                </ChartHeader>
                <Box sx={{ flexGrow: 1, height: 'auto', minHeight: '300px' }}>
                  <BarChartComponent />
                </Box>
              </ChartPaper>
            </Fade>
          </Grid>
        </Grid>

        {/* --- SECTION 4: Additional Insights --- */}
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Fade in timeout={2000}>
              <ChartPaper>
                <ChartHeader>
                  <ChartTitle>Top Performing Pages</ChartTitle>
                </ChartHeader>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body2" color="textSecondary">
                    Top pages data will be displayed here
                  </Typography>
                </Box>
              </ChartPaper>
            </Fade>
          </Grid>
          <Grid xs={12} md={6}>
            <Fade in timeout={2200}>
              <ChartPaper>
                <ChartHeader>
                  <ChartTitle>Real-time Activity</ChartTitle>
                </ChartHeader>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body2" color="textSecondary">
                    Real-time activity data will be displayed here
                  </Typography>
                </Box>
              </ChartPaper>
            </Fade>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default ModernDashboard;