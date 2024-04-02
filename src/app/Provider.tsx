'use client';
import React, { FC, PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { AppProgressBar } from 'next-nprogress-bar';

import { queryClient } from './libs/config/queryClient';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>
            {children}
          </ReactQueryStreamedHydration>

          <ReactQueryDevtools />
        </QueryClientProvider>
      </NextUIProvider>
    
      <AppProgressBar
        height="4px"
        color="#f0f"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
