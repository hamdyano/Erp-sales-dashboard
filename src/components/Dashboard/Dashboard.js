import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import KPICard from './KPICard';
import SalesChart from './SalesChart';
import LatestOrdersList from './LatestOrdersList';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import { mockDashboardData } from '../../mockData';

const DashboardContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[200],
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
}));

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      setDashboardData(mockDashboardData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        ERP & Sales Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <Filters />
            <Search />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <KPICard title="Total Sales" value={`$${dashboardData.totalSales.toLocaleString()}`} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <KPICard title="Total Orders" value={dashboardData.totalOrders.toLocaleString()} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <KPICard title="Pending Shipments" value={dashboardData.pendingShipments.toLocaleString()} />
        </Grid>
        <Grid item xs={12}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Sales Over Time
            </Typography>
            <SalesChart data={dashboardData.salesByDate} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Latest Orders
            </Typography>
            <LatestOrdersList orders={dashboardData.latestOrders} />
          </StyledPaper>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
















