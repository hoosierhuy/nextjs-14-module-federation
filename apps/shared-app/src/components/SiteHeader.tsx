import Avatar from '../assets/avatar.svg'; // Adjust the path as needed
import Logo from '../assets/logo.svg'; // Adjust the path as needed
import { useAuthentication } from '../hooks/useAuthentication';

export const SiteHeader = () => {
  const { isAuthenticated, signIn, signOut } = useAuthentication();

  return (
    <header className="bg-gray-500">
      <div className="flex justify-between px-3">
        <div className="inline-flex items-center">
          <a href="/">
            <Logo width={40} height={40} />
          </a>
        </div>
        <div className="p-1 flex flex-row items-center">
          {isAuthenticated && (
            <>
              <a
                href="https://github.com/hoosierhuy"
                className="text-white p-2 mr-2 no-underline hidden md:block lg:block"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <Avatar width={50} height={50} />
            </>
          )}
          {isAuthenticated ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={signOut}
            >
              Sign out
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={signIn}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
