import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AuthenticatedTemplate } from '../components/AuthenticatedTemplate';

export const DashboardPage = () => {
  return (
    <AuthenticatedTemplate activePath="/dashboard">
      <PageHeader>Dashboard Page</PageHeader>
      <p>This is an example dashboard page</p>
    </AuthenticatedTemplate>
  );
};
