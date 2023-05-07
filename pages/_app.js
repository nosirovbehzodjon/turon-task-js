import "@/styles/globals.scss";
import Layout from "@/src/layouts";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
export default function App({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Hydrate>
        </QueryClientProvider>
    );
}
