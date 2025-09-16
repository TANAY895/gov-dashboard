import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function Dashboard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    setIssues([
      { _id: 1, status: 'Pending' },
      { _id: 2, status: 'In Progress' },
      { _id: 3, status: 'Resolved' },
      { _id: 4, status: 'Pending' },
      { _id: 5, status: 'In Progress' },
    ]);
  }, []);

  const pendingCount = issues.filter(i => i.status === 'Pending').length;
  const inProgressCount = issues.filter(i => i.status === 'In Progress').length;
  const resolvedCount = issues.filter(i => i.status === 'Resolved').length;

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: '#ffb300', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Pending Issues</Typography>
              <Typography variant="h4">{pendingCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: '#1976d2', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">In Progress</Typography>
              <Typography variant="h4">{inProgressCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: '#4caf50', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Resolved</Typography>
              <Typography variant="h4">{resolvedCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
