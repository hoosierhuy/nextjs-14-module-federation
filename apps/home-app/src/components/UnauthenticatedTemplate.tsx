import dynamic from 'next/dynamic';
import { ComponentType, PropsWithChildren } from 'react';

interface UnauthenticatedTemplate extends PropsWithChildren {
  activePath?: string;
  focused?: boolean;
}

export const UnauthenticatedTemplate: ComponentType<UnauthenticatedTemplate> =
  dynamic(
    () =>
      import('shared-app/UnauthenticatedTemplate').then(
        (mod) => mod.UnauthenticatedTemplate
      ),
    {
      ssr: false,
    }
  );
