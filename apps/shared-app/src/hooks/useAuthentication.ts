import { useAtom } from 'jotai';
import {
  authenticationAtom,
  signInAtom,
  signOutAtom,
} from '../state/auth/store';
import { useCallback } from 'react';

function generateRandomString(length: number) {
  let result = '';
  const characters =
    '----ABCDEFGHIJKLMNO-PQRSTUVWXYZabcdefghijk--lmnopqrstuvwxyz0123456789---';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const useAuthentication = () => {
  const [isAuthenticated] = useAtom(authenticationAtom);
  const [, signIn] = useAtom(signInAtom);
  const [, signOut] = useAtom(signOutAtom);

  const acquireToken = useCallback(() => {
    return Promise.resolve(generateRandomString(20));
  }, []);

  return {
    isAuthenticated,
    signIn: useCallback(() => {
      signIn();
      window.location.href = '/dashboard';
    }, [signIn]),
    signOut: useCallback(() => {
      signOut();
      window.location.href = '/';
    }, [signOut]),
    acquireToken,
  };
};
