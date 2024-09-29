import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard/Dashboard';
import { DashboardProvider } from './context/DashboardContext';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardProvider>
        <CssBaseline />
        <Container maxWidth="lg">
          <Dashboard />
        </Container>
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
