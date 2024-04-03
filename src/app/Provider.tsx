'use client';
import React, { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { ToastContainer } from 'react-toastify';
import { AppProgressBar } from 'next-nprogress-bar';

import { queryClient } from './libs/config/queryClient';

import 'react-toastify/dist/ReactToastify.css';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>
            <>
              {children}
              <ToastContainer />
            </>
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
    </SessionProvider>
  );
};
