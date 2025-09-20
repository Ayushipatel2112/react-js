import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    transition: 'background-color 0.3s',
    '& fieldset': {
      border: 'none',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
    '&.Mui-focused': {
       backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
  },
}));

const SearchBar = ({ onSearch }) => (
  <StyledTextField
    fullWidth
    variant="outlined"
    placeholder="Search..."
    size="small"
    onKeyPress={(e) => { if (e.key === 'Enter') onSearch(e.target.value); }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: 'text.secondary' }} />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchBar;