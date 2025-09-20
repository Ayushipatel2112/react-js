import React, { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Typography, Box, Chip, Divider } from '@mui/material';
import { Settings, AccountCircle, Notifications, HelpOutline, Logout, DarkMode, LightMode } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  border: `2px solid ${theme.palette.background.paper}`,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const UserProfile = ({ onLogout, onSettings, onDarkModeToggle, isDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Tooltip title="User Profile">
          <StyledAvatar onClick={handleMenuOpen}>JD</StyledAvatar>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{ sx: { borderRadius: 3, width: 240, mt: 1.5 } }}
      >
        <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{fontWeight: 600}}>John Doe</Typography>
            <Chip label="Admin" size="small" color="primary" sx={{mt: 0.5}}/>
        </Box>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon><AccountCircle fontSize="small" /></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={onSettings}>
          <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={onDarkModeToggle}>
          <ListItemIcon>{isDarkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}</ListItemIcon>
          <ListItemText>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ListItemText>
        </MenuItem>
         <MenuItem onClick={handleMenuClose}>
          <ListItemIcon><HelpOutline fontSize="small" /></ListItemIcon>
          <ListItemText>Help</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onLogout} sx={{ color: 'error.main' }}>
          <ListItemIcon><Logout fontSize="small" color="error" /></ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserProfile;