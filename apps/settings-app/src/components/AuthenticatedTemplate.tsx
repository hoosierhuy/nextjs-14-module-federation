import dynamic from 'next/dynamic';
import { ComponentType, PropsWithChildren } from 'react';

interface AuthenticatedTemplateProps extends PropsWithChildren {
  activePath: string;
}

export const AuthenticatedTemplate: ComponentType<AuthenticatedTemplateProps> =
  dynamic(
    () =>
      import('shared-app/AuthenticatedTemplate').then(
        (mod) => mod.AuthenticatedTemplate
      ),
    {
      ssr: false,
    }
  );
