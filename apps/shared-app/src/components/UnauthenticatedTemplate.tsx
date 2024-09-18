import React, { PropsWithChildren } from 'react';
import { Template } from './Template';
import '../styles.css';

interface UnauthenticatedTemplateProps extends PropsWithChildren {
  activePath?: string;
  focused?: boolean;
}

export const UnauthenticatedTemplate: React.FC<
  UnauthenticatedTemplateProps
> = ({ children, activePath = '/', focused = false }) => {
  return (
    <Template activePath={activePath} focused={focused}>
      {children}
    </Template>
  );
};
