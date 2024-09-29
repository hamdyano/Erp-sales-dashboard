import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const KPICard = ({ title, value }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default KPICard;