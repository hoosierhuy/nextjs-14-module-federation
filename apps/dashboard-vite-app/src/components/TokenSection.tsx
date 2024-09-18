import { useState } from 'react';
import { useAuthentication } from 'shared-app/useAuthentication';

export const TokenSection = () => {
  const [token, setToken] = useState('null');
  const { acquireToken } = useAuthentication();

  const handleAcquireToken = async () => {
    const result = await acquireToken();
    setToken(result);
  };

  return (
    <div className="my-8">
      <button
        onClick={handleAcquireToken}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 p-3"
      >
        Test Acquire Token
      </button>
      <blockquote className="p-4 my-2 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "{token}"
        </p>
      </blockquote>
    </div>
  );
};
