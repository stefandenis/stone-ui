import React from 'react';
import {QueryClient, QueryClientProvider, } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type ReactQueryProviderProps = {
    children: React.ReactNode
}

export function ReactQueryProvider({children}: ReactQueryProviderProps) {
    const queryClient = React.useMemo(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                    refetchOnWindowFocus: false,
                }
            }
        })
    }, [])

    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools/>
        </QueryClientProvider>
    )
}