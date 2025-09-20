import React from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Dashboard as DashboardIcon, BarChart as BarChartIcon, Description as DescriptionIcon, People as PeopleIcon, Notifications as NotificationsIcon, Settings as SettingsIcon, Star as StarIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { NavLink, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// Helper component for navigation links
const NavItem = ({ to, icon, text, badgeContent }) => (
  <ListItemButton
    component={NavLink}
    to={to}
    sx={{
      '&.active': {
        backgroundColor: 'rgba(63, 81, 181, 0.1)',
        color: 'primary.main',
        '& .MuiListItemIcon-root': {
          color: 'primary.main',
        },
      },
    }}
  >
    <ListItemIcon>
      {badgeContent > 0 ? (
        <Badge badgeContent={badgeContent} color="error">{icon}</Badge>
      ) : (
        icon
      )}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItemButton>
);

function DashboardLayout() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Analytics Dashboard
          </Typography>
          {/* You can add more icons here like search, notifications etc. */}
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <Typography component="h2" variant="h6" color="primary" sx={{ mr: 'auto', ml: 2 }}>
            Analytics
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
            <NavItem to="/" text="Dashboard" icon={<DashboardIcon />} />
            <NavItem to="/analytics" text="Analytics" icon={<BarChartIcon />} />
            <NavItem to="/reports" text="Reports" icon={<DescriptionIcon />} badgeContent={3} />
            <NavItem to="/users" text="Users" icon={<PeopleIcon />} />
            <NavItem to="/favorites" text="Favorites" icon={<StarIcon />} />
          <Divider sx={{ my: 1 }} />
            <NavItem to="/notifications" text="Notifications" icon={<NotificationsIcon />} badgeContent={5} />
            <NavItem to="/settings" text="Settings" icon={<SettingsIcon />} />
        </List>
      </DrawerStyled>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
           {/* All your pages will be rendered here */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;