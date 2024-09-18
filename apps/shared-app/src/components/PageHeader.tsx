import { PropsWithChildren } from 'react';

export const PageHeader = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="mb-4 text-3xl font-extrabold text-blue-darkest md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
};
