'use client';

import { PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './libs/config/queryClient';

const template = ({ children }: PropsWithChildren) => (
  <NextUIProvider>
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </NextUIProvider>
);

export default template;
