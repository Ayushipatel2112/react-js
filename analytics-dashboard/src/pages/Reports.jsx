import React from 'react';
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Download as DownloadIcon } from '@mui/icons-material';
import { monthlyRevenue, trafficSources } from '../data/mockData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: '100%',
}));

function Reports() {
  const reports = [
    { id: 1, name: 'Monthly Revenue Report', date: '2023-08-01', type: 'PDF' },
    { id: 2, name: 'User Engagement Analysis', date: '2023-08-05', type: 'Excel' },
    { id: 3, name: 'Traffic Source Breakdown', date: '2023-08-10', type: 'PDF' },
    { id: 4, name: 'Conversion Rate Optimization', date: '2023-08-15', type: 'PDF' },
    { id: 5, name: 'Platform Performance Comparison', date: '2023-08-20', type: 'Excel' },
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h4" gutterBottom>Reports</Typography>
      </Grid>
      
      {/* Available Reports */}
      <Grid size={{ xs: 12 }}>
        <Item>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Available Reports</Typography>
            <Button variant="contained" startIcon={<DownloadIcon />}>
              Generate New Report
            </Button>
          </Box>
          
          {reports.map((report) => (
            <Paper 
              key={report.id} 
              elevation={1} 
              sx={{ 
                p: 2, 
                mb: 2, 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box>
                <Typography variant="subtitle1">{report.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Generated on: {report.date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ mr: 2, display: 'inline-block' }}>
                  {report.type}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="small" 
                  startIcon={<DownloadIcon />}
                >
                  Download
                </Button>
              </Box>
            </Paper>
          ))}
        </Item>
      </Grid>
      
      {/* Schedule Reports */}
      <Grid size={{ xs: 12 }}>
        <Item>
          <Typography variant="h6" gutterBottom>Schedule Reports</Typography>
          <Typography variant="body1" paragraph>
            Set up automated reports to be delivered to your email on a regular schedule.
          </Typography>
          
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="subtitle1">Daily Summary</Typography>
                <Typography variant="body2" paragraph>
                  Get a daily summary of key metrics delivered to your inbox every morning.
                </Typography>
                <Button variant="contained" fullWidth>Set Up Daily Report</Button>
              </Paper>
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="subtitle1">Weekly Analysis</Typography>
                <Typography variant="body2" paragraph>
                  Receive a comprehensive weekly analysis with trends and insights.
                </Typography>
                <Button variant="contained" fullWidth>Set Up Weekly Report</Button>
              </Paper>
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="subtitle1">Monthly Performance</Typography>
                <Typography variant="body2" paragraph>
                  Get a detailed monthly performance report with year-over-year comparisons.
                </Typography>
                <Button variant="contained" fullWidth>Set Up Monthly Report</Button>
              </Paper>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Reports;