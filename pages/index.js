import Head from 'next/head'
import AboutUs from '../components/AboutUs/AboutUs'
import HeroSection from '../components/HeroSection/HeroSection'
import Layout from '../components/layout/Layout'
import PricingPlans from '../components/Pricing/PricingPlans'
import ServicesComponent from '../components/Services/ServicesComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Developers Media</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <HeroSection />
        <ServicesComponent />
        <PricingPlans />
        <AboutUs />
      </Layout>
    </>
  )
}
