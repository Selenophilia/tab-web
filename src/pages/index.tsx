import { useEffect } from 'react'
import Head from 'next/head'
import Main from '@/layouts/Main'
import HeroSection from '@/views/HeroSection'
import About from '@/views/About'
import AppHeader from '@/components/Appheader'
import Careers from '@/views/Careers'
import News from '@/views/News'
import Banner from '@/views/Banner'
import Footer from '@/views/Footer'
import { useQuery } from '@apollo/client'
import { getCareers } from './api/queries'

export default function Home() {
    const { loading, data } = useQuery(getCareers)
    return (
        <Main>
            <Head>
                <title>Tab Co</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/tabicon.ico" />
            </Head>
            <AppHeader />
            <HeroSection />
            <About />
            <Careers data={data} loading={loading} />
            <News />
            <Banner />
            <Footer />
        </Main>
    )
}
