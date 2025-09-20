import React, { useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DateRangeSelector from '../components/dashboard/DateRangeSelector';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';
import PieChartComponent from '../components/charts/PieChartComponent';
import StatCard from '../components/dashboard/StatCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  minHeight: 450,
}));

function Dashboard() {
  const [selectedDateRange, setSelectedDateRange] = useState('Last 30 Days');

  const statCardDetails = {
    'Total Users': [
      { label: 'New Users', value: '1,234', trend: 'up' },
      { label: 'Returning Users', value: '1,111', trend: 'up' },
      { label: 'Mobile Users', value: '1,567', trend: 'up' },
      { label: 'Desktop Users', value: '778', trend: 'down' }
    ],
    'Revenue': [
      { label: 'Product Sales', value: '$28,450', trend: 'up' },
      { label: 'Service Revenue', value: '$5,802', trend: 'up' },
      { label: 'Subscription', value: '$3,500', trend: 'up' },
      { label: 'Other', value: '$1,500', trend: 'down' }
    ],
    'Conversion Rate': [
      { label: 'E-commerce', value: '4.2%', trend: 'up' },
      { label: 'Lead Generation', value: '2.8%', trend: 'up' },
      { label: 'Newsletter Signup', value: '1.5%', trend: 'down' },
      { label: 'Contact Form', value: '3.1%', trend: 'up' }
    ],
    'Active Sessions': [
      { label: 'Real-time Users', value: '234', trend: 'up' },
      { label: 'Page Views/Min', value: '156', trend: 'up' },
      { label: 'Avg. Session Duration', value: '3:24', trend: 'up' },
      { label: 'Bounce Rate', value: '42%', trend: 'down' }
    ]
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DateRangeSelector
          selectedRange={selectedDateRange}
          onRangeChange={setSelectedDateRange}
        />
      </Grid>

      {/* Stat Cards Row */}
      <Grid item xs={12}>
        <Grid 
          container 
          spacing={0} 
          sx={{ 
            margin: 0, 
            padding: 0, 
            '& .MuiGrid-item': { padding: 0 } // ye line space hatayegi
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Total Users"
              value="2,345"
              increase="+12%"
              timeFrame="from last month"
              color="#3f51b5"
              detailedData={statCardDetails['Total Users']}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Revenue"
              value="$34,252"
              increase="+8%"
              timeFrame="from last month"
              color="#4caf50"
              detailedData={statCardDetails['Revenue']}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Conversion Rate"
              value="3.25%"
              increase="+3%"
              timeFrame="from last month"
              color="#ff9800"
              detailedData={statCardDetails['Conversion Rate']}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Active Sessions"
              value="234"
              increase="+18%"
              timeFrame="from last month"
              color="#f44336"
              detailedData={statCardDetails['Active Sessions']}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant="h6" gutterBottom component="div">
            Monthly Revenue
          </Typography>
          <Box sx={{ height: 'auto', minHeight: '300px' }}>
            <LineChartComponent />
          </Box>
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant="h6" gutterBottom component="div">
            Traffic Sources
          </Typography>
          <Box sx={{ height: 'auto', minHeight: '300px' }}>
            <PieChartComponent />
          </Box>
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant="h6" gutterBottom component="div">
            User Engagement by Platform
          </Typography>
          <Box sx={{ height: 'auto', minHeight: 300 }}>
            <BarChartComponent />
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Dashboard;