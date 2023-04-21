import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../createEmotionCache'
import MyAppProps from '@/interfaces/myAppProps'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo-client'
import '../styles/main.scss'

const clientSideEmotionCache = createEmotionCache()

export default function App({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: MyAppProps) {
    return (
        <ApolloProvider client={client}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1, width=device-width"
                    />
                </Head>
                <CssBaseline />
                <Component {...pageProps} />
            </CacheProvider>
        </ApolloProvider>
    )
}
