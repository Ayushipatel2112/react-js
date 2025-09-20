import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Chip, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Language, Share, Mail, Search, Link, Download as DownloadIcon } from '@mui/icons-material';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

const trafficData = {
  'Direct': {
    percentage: 30,
    sessions: 1250,
    bounceRate: '45%',
    avgDuration: '3:24',
    topPages: ['/home', '/products', '/about'],
    icon: <Language />
  },
  'Social Media': {
    percentage: 25,
    sessions: 892,
    bounceRate: '38%',
    avgDuration: '4:12',
    platforms: [
      { name: 'Facebook', sessions: 450, percentage: 50 },
      { name: 'Twitter', sessions: 268, percentage: 30 },
      { name: 'Instagram', sessions: 134, percentage: 15 },
      { name: 'LinkedIn', sessions: 40, percentage: 5 }
    ],
    icon: <Share />
  },
  'Email': {
    percentage: 15,
    sessions: 535,
    bounceRate: '25%',
    avgDuration: '5:18',
    campaigns: [
      { name: 'Newsletter', sessions: 321, percentage: 60 },
      { name: 'Promotional', sessions: 107, percentage: 20 },
      { name: 'Welcome Series', sessions: 80, percentage: 15 },
      { name: 'Abandoned Cart', sessions: 27, percentage: 5 }
    ],
    icon: <Mail />
  },
  'Organic Search': {
    percentage: 20,
    sessions: 714,
    bounceRate: '42%',
    avgDuration: '3:45',
    topKeywords: [
      { keyword: 'analytics dashboard', clicks: 156 },
      { keyword: 'data visualization', clicks: 98 },
      { keyword: 'business intelligence', clicks: 87 },
      { keyword: 'reporting tools', clicks: 65 }
    ],
    icon: <Search />
  },
  'Referral': {
    percentage: 10,
    sessions: 178,
    bounceRate: '52%',
    avgDuration: '2:56',
    topReferrers: [
      { site: 'partner-site.com', sessions: 89 },
      { site: 'blog.example.com', sessions: 45 },
      { site: 'news.site.com', sessions: 44 }
    ],
    icon: <Link />
  }
};

const data = {
  labels: Object.keys(trafficData),
  datasets: [
    {
      data: Object.values(trafficData).map(item => item.percentage),
      backgroundColor: [
        '#667eea',
        '#f5576c',
        '#ffc107',
        '#28a745',
        '#00bcd4',
      ],
      borderColor: [
        '#667eea',
        '#f5576c',
        '#ffc107',
        '#28a745',
        '#00bcd4',
      ],
      borderWidth: 1,
    },
  ],
};

function PieChartComponent() {
  const [selectedSource, setSelectedSource] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const sourceName = data.labels[index];
      setSelectedSource(sourceName);
      setOpen(true);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedSource(null);
  };
  
  const chartOptions = {
    ...options,
    onClick: handleClick,
    plugins: {
      ...options.plugins,
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label;
            const value = context.parsed;
            const data = trafficData[label];
            return `${label}: ${value}% (${data.sessions} sessions)`;
          }
        }
      }
    }
  };
  
  const selectedData = selectedSource ? trafficData[selectedSource] : null;
  
  return (
    <>
      <Pie options={chartOptions} data={data} />
      
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
        {selectedData && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {selectedData.icon}
                </Avatar>
                {selectedSource} - Detailed Analysis
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Sessions
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {selectedData.sessions.toLocaleString()}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Percentage
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {selectedData.percentage}%
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Bounce Rate
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {selectedData.bounceRate}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Avg. Duration
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {selectedData.avgDuration}
                    </Typography>
                  </Paper>
                </Grid>
                
                {selectedSource === 'Social Media' && selectedData.platforms && (
                  <Grid size={{ xs: 12 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Social Media Breakdown
                      </Typography>
                      <List>
                        {selectedData.platforms.map((platform, index) => (
                          <ListItem key={index} divider>
                            <ListItemText 
                              primary={platform.name}
                              secondary={`${platform.sessions} sessions (${platform.percentage}%)`}
                            />
                            <Chip label={`${platform.percentage}%`} size="small" color="primary" />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                )}
                
                {selectedSource === 'Email' && selectedData.campaigns && (
                  <Grid size={{ xs: 12 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Email Campaign Performance
                      </Typography>
                      <List>
                        {selectedData.campaigns.map((campaign, index) => (
                          <ListItem key={index} divider>
                            <ListItemText 
                              primary={campaign.name}
                              secondary={`${campaign.sessions} sessions (${campaign.percentage}%)`}
                            />
                            <Chip label={`${campaign.percentage}%`} size="small" color="primary" />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                )}
                
                {selectedSource === 'Organic Search' && selectedData.topKeywords && (
                  <Grid size={{ xs: 12 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Top Keywords
                      </Typography>
                      <List>
                        {selectedData.topKeywords.map((keyword, index) => (
                          <ListItem key={index} divider>
                            <ListItemText 
                              primary={keyword.keyword}
                              secondary={`${keyword.clicks} clicks`}
                            />
                            <Chip label={`${keyword.clicks}`} size="small" color="primary" />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                )}
                
                {selectedSource === 'Direct' && selectedData.topPages && (
                  <Grid size={{ xs: 12 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Top Pages
                      </Typography>
                      <List>
                        {selectedData.topPages.map((page, index) => (
                          <ListItem key={index} divider>
                            <ListItemText primary={page} />
                            <Chip label="Direct" size="small" color="primary" />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                )}
                
                {selectedSource === 'Referral' && selectedData.topReferrers && (
                  <Grid size={{ xs: 12 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Top Referring Sites
                      </Typography>
                      <List>
                        {selectedData.topReferrers.map((referrer, index) => (
                          <ListItem key={index} divider>
                            <ListItemText 
                              primary={referrer.site}
                              secondary={`${referrer.sessions} sessions`}
                            />
                            <Chip label={`${referrer.sessions}`} size="small" color="primary" />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button variant="outlined" startIcon={<DownloadIcon />}>
                Export Data
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

export default PieChartComponent;