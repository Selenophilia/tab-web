import { EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
export default interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}
