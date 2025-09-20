import React, { useState } from 'react';
import { Button, Menu, MenuItem, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid } from '@mui/material';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';

const DateRangeSelector = ({ selectedRange, onRangeChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [customDateOpen, setCustomDateOpen] = useState(false);
  const [customDates, setCustomDates] = useState({ start: '', end: '' });

  const ranges = ['Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom Range'];

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (range) => {
    if (range === 'Custom Range') {
      setCustomDateOpen(true);
    } else {
      onRangeChange(range);
    }
    handleClose();
  };
  
  const handleCustomDateApply = () => {
      onRangeChange(`${customDates.start} to ${customDates.end}`);
      setCustomDateOpen(false);
  };

  return (
    <Box>
      <Button
        variant="text"
        startIcon={<CalendarIcon />}
        onClick={handleClick}
        sx={{ textTransform: 'none', color: 'text.primary', fontWeight: 500 }}
      >
        {selectedRange}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {ranges.map(range => (
          <MenuItem key={range} onClick={() => handleSelect(range)}>
            {range}
          </MenuItem>
        ))}
      </Menu>

      <Dialog open={customDateOpen} onClose={() => setCustomDateOpen(false)}>
        <DialogTitle>Select Custom Date Range</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={6}>
                    <TextField
                        label="Start Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setCustomDates(p => ({...p, start: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6}>
                     <TextField
                        label="End Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setCustomDates(p => ({...p, end: e.target.value}))}
                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCustomDateOpen(false)}>Cancel</Button>
          <Button onClick={handleCustomDateApply} variant="contained">Apply</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DateRangeSelector;