import { PageHeader } from '../components/PageHeader';
import { UnauthenticatedTemplate } from '../components/UnauthenticatedTemplate';

export const HomePage = () => {
  return (
    <UnauthenticatedTemplate activePath="/" focused={true}>
      <PageHeader>Home Page</PageHeader>
      <p>This is an example home page</p>
    </UnauthenticatedTemplate>
  );
};
