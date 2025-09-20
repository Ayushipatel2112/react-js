import React from 'react';
import { Grid, Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { userDemographics, performanceMetrics } from '../data/mockData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: '100%',
}));

function Analytics() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h4" gutterBottom>Detailed Analytics</Typography>
      </Grid>
      
      {/* Performance Metrics */}
      <Grid size={{ xs: 12 }}>
        <Item>
          <Typography variant="h6" gutterBottom>Performance Metrics</Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="primary">{performanceMetrics.pageLoadTime}s</Typography>
                <Typography variant="body2">Page Load Time</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="primary">{performanceMetrics.serverResponseTime}s</Typography>
                <Typography variant="body2">Server Response Time</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="error">{performanceMetrics.errorRate}%</Typography>
                <Typography variant="body2">Error Rate</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="success">{performanceMetrics.availability}%</Typography>
                <Typography variant="body2">Availability</Typography>
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      
      {/* User Demographics */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Item>
          <Typography variant="h6" gutterBottom>Age Distribution</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Age Group</TableCell>
                  <TableCell align="right">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userDemographics.age.map((row) => (
                  <TableRow key={row.group}>
                    <TableCell component="th" scope="row">
                      {row.group}
                    </TableCell>
                    <TableCell align="right">{row.percentage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Grid>
      
      <Grid size={{ xs: 12, md: 6 }}>
        <Item>
          <Typography variant="h6" gutterBottom>Gender Distribution</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell align="right">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userDemographics.gender.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell component="th" scope="row">
                      {row.type}
                    </TableCell>
                    <TableCell align="right">{row.percentage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Grid>
      
      <Grid size={{ xs: 12 }}>
        <Item>
          <Typography variant="h6" gutterBottom>Geographic Distribution</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell align="right">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userDemographics.location.map((row) => (
                  <TableRow key={row.country}>
                    <TableCell component="th" scope="row">
                      {row.country}
                    </TableCell>
                    <TableCell align="right">{row.percentage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Analytics;