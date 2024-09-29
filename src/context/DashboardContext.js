import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    dateFrom: null,
    dateTo: null,
    orderStatus: 'all',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const value = {
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};