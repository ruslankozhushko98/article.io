import { PropsWithChildren } from 'react';

import { Header } from './libs/components/layout/Header';

const template = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
  </>
);

export default template;
