import React from 'react';
import { Grid, Paper, Typography, Box, Avatar, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add as AddIcon } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: '100%',
}));

function Users() {
  // Mock user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', lastActive: '2023-08-25' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active', lastActive: '2023-08-24' },
    { id: 3, name: 'Robert Johnson', email: 'robert.j@example.com', role: 'Viewer', status: 'Inactive', lastActive: '2023-08-10' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@example.com', role: 'Editor', status: 'Active', lastActive: '2023-08-25' },
    { id: 5, name: 'Michael Wilson', email: 'michael.w@example.com', role: 'Viewer', status: 'Active', lastActive: '2023-08-23' },
    { id: 6, name: 'Sarah Brown', email: 'sarah.b@example.com', role: 'Viewer', status: 'Active', lastActive: '2023-08-22' },
    { id: 7, name: 'David Miller', email: 'david.m@example.com', role: 'Editor', status: 'Inactive', lastActive: '2023-08-15' },
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Users</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add New User
        </Button>
      </Grid>
      
      {/* User Statistics */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item>
          <Typography variant="h3" align="center" color="primary">{users.length}</Typography>
          <Typography variant="body1" align="center">Total Users</Typography>
        </Item>
      </Grid>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item>
          <Typography variant="h3" align="center" color="success.main">
            {users.filter(user => user.status === 'Active').length}
          </Typography>
          <Typography variant="body1" align="center">Active Users</Typography>
        </Item>
      </Grid>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item>
          <Typography variant="h3" align="center" color="error.main">
            {users.filter(user => user.status === 'Inactive').length}
          </Typography>
          <Typography variant="body1" align="center">Inactive Users</Typography>
        </Item>
      </Grid>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item>
          <Typography variant="h3" align="center" color="info.main">
            {users.filter(user => user.lastActive === '2023-08-25').length}
          </Typography>
          <Typography variant="body1" align="center">Today's Active</Typography>
        </Item>
      </Grid>
      
      {/* Users Table */}
      <Grid size={{ xs: 12 }}>
        <Item>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Active</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2 }}>{user.name.charAt(0)}</Avatar>
                        <Typography variant="body1">{user.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.role} 
                        color={user.role === 'Admin' ? 'primary' : user.role === 'Editor' ? 'info' : 'default'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={user.status} 
                        color={user.status === 'Active' ? 'success' : 'error'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                    <TableCell align="right">
                      <Button size="small" variant="outlined" sx={{ mr: 1 }}>Edit</Button>
                      <Button size="small" variant="outlined" color="error">Delete</Button>
                    </TableCell>
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

export default Users;