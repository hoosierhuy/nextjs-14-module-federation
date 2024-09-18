import { DashboardPage } from '../components/DashboardPage';
import { AuthenticatedTemplate } from 'shared-app/AuthenticatedTemplate';
import { TokenSection } from '../components/TokenSection';
import { SignOut } from '../components/SignOut';

export function App() {
  return (
    <AuthenticatedTemplate activePath="/dashboard">
      <TokenSection />
      <SignOut />
      <hr className="border-gray-800 dark:border-white my-8"></hr>
      <DashboardPage />
    </AuthenticatedTemplate>
  );
}

export default App;
