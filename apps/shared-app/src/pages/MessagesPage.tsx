import { AuthenticatedTemplate } from '../components/AuthenticatedTemplate';
import { PageHeader } from '../components/PageHeader';

export const MessagesPage = () => {
  return (
    <AuthenticatedTemplate activePath="/messages">
      <PageHeader>Message Page</PageHeader>
      <p>This is an example message page</p>
    </AuthenticatedTemplate>
  );
};
