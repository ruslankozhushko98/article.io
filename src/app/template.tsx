import { PropsWithChildren } from 'react';

import { Header } from './libs/components/layout/Header/Header';

const template = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
  </>
);

export default template;
