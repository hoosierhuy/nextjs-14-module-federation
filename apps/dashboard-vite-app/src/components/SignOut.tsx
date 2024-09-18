import { useAuthentication } from 'shared-app/useAuthentication';

export const SignOut = () => {
  const { signOut } = useAuthentication();

  const handleAcquireToken = async () => {
    signOut();
  };

  return (
    <div className="my-8">
      <button
        onClick={handleAcquireToken}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 p-3"
      >
        Test Sign out
      </button>
    </div>
  );
};
