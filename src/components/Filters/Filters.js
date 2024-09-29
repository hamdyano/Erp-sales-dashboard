import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Filters = () => {
  return (
    <div>
      <TextField
        id="date-from"
        label="From"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date-to"
        label="To"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl>
        <InputLabel>Order Status</InputLabel>
        <Select>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="shipped">Shipped</MenuItem>
          <MenuItem value="delivered">Delivered</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;