import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Chip, IconButton, Tooltip, Popover, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  CalendarToday as CalendarIcon, 
  Compare as CompareIcon,
  Settings as SettingsIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  color: theme.palette.text.primary,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
}));

const DateRangeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})(({ theme, isSelected }) => ({
  borderRadius: 20,
  padding: theme.spacing(0.3, 1.5),
  fontSize: '0.7rem',
  fontWeight: 500,
  textTransform: 'none',
  border: `1px solid ${isSelected ? theme.palette.primary.main : theme.palette.divider}`,
  backgroundColor: isSelected ? theme.palette.primary.main : 'transparent',
  color: isSelected ? 'white' : theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: isSelected ? theme.palette.primary.dark : 'rgba(0, 0, 0, 0.04)',
    borderColor: isSelected ? theme.palette.primary.dark : theme.palette.text.secondary,
  },
  transition: 'all 0.3s ease',
}));

const CompareToggle = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  borderRadius: 16,
  backgroundColor: isActive ? theme.palette.success.main : 'transparent',
  color: isActive ? 'white' : theme.palette.text.secondary,
  border: `1px solid ${isActive ? theme.palette.success.main : theme.palette.divider}`,
  '& .MuiChip-icon': {
    color: isActive ? 'white' : theme.palette.text.secondary,
  },
  '&:hover': {
    backgroundColor: isActive ? theme.palette.success.dark : 'rgba(0, 0, 0, 0.04)',
  },
  cursor: 'pointer',
  transition: 'all 0.3s ease',
}));

const ModernHeader = ({ 
  selectedDateRange, 
  onDateRangeChange, 
  onCompareToggle, 
  isCompareActive,
  onSearch,
  onUserLogout,
  onSettings,
  onDarkModeToggle,
  isDarkMode,
  onRefresh
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  
  const dateRanges = [
    { label: 'Today', value: 'Today' },
    { label: '7 Days', value: 'Last 7 Days' },
    { label: '30 Days', value: 'Last 30 Days' },
    { label: '90 Days', value: 'Last 90 Days' },
    { label: '1 Year', value: 'Last Year' },
  ];

  const handleDateRangeSelect = (range) => {
    onDateRangeChange(range);
    setAnchorEl(null);
  };

  const handleCalendarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDatePicker = () => {
    setAnchorEl(null);
  };

  const handleCustomDateSubmit = () => {
    if (customStartDate && customEndDate) {
      const range = `${customStartDate} to ${customEndDate}`;
      onDateRangeChange(range);
      setAnchorEl(null);
    }
  };

  const handleCompareToggle = () => {
    onCompareToggle(!isCompareActive);
  };

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar sx={{ px: 2, py: 1 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mr: 4,
            fontSize: '1.5rem'
          }}
        >
          Analytics Pro
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 2, flexGrow: 1 }}>
          <Tooltip title="Select date range">
            <IconButton 
              size="small" 
              onClick={handleCalendarClick}
              sx={{ color: 'text.secondary' }}
            >
              <CalendarIcon />
            </IconButton>
          </Tooltip>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {dateRanges.map((range) => (
              <DateRangeButton
                key={range.value}
                isSelected={selectedDateRange === range.value}
                onClick={() => handleDateRangeSelect(range.value)}
              >
                {range.label}
              </DateRangeButton>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
          {/* Compare Toggle */}
          <Tooltip title="Compare to previous period">
            <CompareToggle
              label="Compare"
              avatar={<CompareIcon />} // Use avatar prop for the icon
              isActive={isCompareActive}
              onClick={handleCompareToggle}
            />
          </Tooltip>

          {/* Refresh Button */}
          <Tooltip title="Refresh data">
            <IconButton 
              size="small" 
              onClick={onRefresh}
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>

          {/* Settings Button */}
          <Tooltip title="Dashboard settings">
            <IconButton 
              size="small" 
              onClick={onSettings}
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>

          {/* Search Bar */}
          <Box sx={{ minWidth: 250 }}>
            <SearchBar onSearch={onSearch} />
          </Box>
          
          {/* User Profile */}
          <UserProfile
            onLogout={onUserLogout}
            onSettings={onSettings}
            onDarkModeToggle={onDarkModeToggle}
            isDarkMode={isDarkMode}
          />
        </Box>

        {/* Date Picker Popover */}
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleCloseDatePicker}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ sx: { borderRadius: 3, p: 2, minWidth: 300, maxWidth: 350, mt: 1 } }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Select Date Range
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  value={customStartDate}
                  onChange={(e) => setCustomStartDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  value={customEndDate}
                  onChange={(e) => setCustomEndDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {dateRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={selectedDateRange === range.value ? "contained" : "outlined"}
                  size="small"
                  onClick={() => handleDateRangeSelect(range.value)}
                  sx={{ borderRadius: 2, textTransform: 'none' }}
                >
                  {range.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
              <Button 
                onClick={handleCloseDatePicker} 
                variant="outlined" 
                size="small"
                sx={{ borderRadius: 2, textTransform: 'none' }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCustomDateSubmit} 
                variant="contained" 
                size="small"
                disabled={!customStartDate || !customEndDate}
                sx={{ borderRadius: 2, textTransform: 'none' }}
              >
                Apply Custom
              </Button>
            </Box>
          </Box>
        </Popover>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ModernHeader;