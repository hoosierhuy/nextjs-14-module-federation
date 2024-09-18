import { AuthenticatedTemplate } from '../components/AuthenticatedTemplate';
import { PageHeader } from '../components/PageHeader';

export const SettingsPage = () => {
  return (
    <AuthenticatedTemplate activePath="/settings">
      <PageHeader>Settings Page</PageHeader>
      <p>This is an example settings page</p>
    </AuthenticatedTemplate>
  );
};
