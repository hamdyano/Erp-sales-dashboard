export const mockDashboardData = {
    totalSales: 1234567,
    totalOrders: 1000,
    pendingShipments: 50,
    salesByDate: [
      { date: '2023-01-01', sales: 4000 },
      { date: '2023-02-01', sales: 3000 },
      { date: '2023-03-01', sales: 5000 },
      { date: '2023-04-01', sales: 4500 },
      { date: '2023-05-01', sales: 6000 },
      { date: '2023-06-01', sales: 5500 },
    ],
    latestOrders: [
      { id: 1, customer: 'John Doe', date: '2023-06-01', amount: 100, status: 'Delivered' },
      { id: 2, customer: 'Jane Smith', date: '2023-06-02', amount: 200, status: 'Pending' },
      { id: 3, customer: 'Bob Johnson', date: '2023-06-03', amount: 150, status: 'Shipped' },
      { id: 4, customer: 'Alice Brown', date: '2023-06-04', amount: 300, status: 'Pending' },
      { id: 5, customer: 'Charlie Davis', date: '2023-06-05', amount: 250, status: 'Delivered' },
    ],
  };