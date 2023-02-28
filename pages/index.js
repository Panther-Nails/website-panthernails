import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Industries from "../components/industries";
import Products from "../components/Products";
import Stats from "../components/Stats";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <SeoHead title='Panther Nails Technologies Pvt Ltd' />
      <Layout>
        <Hero />
        <Products />
        <Stats />
        <Feature />
        <Cta />
      </Layout>
    </>
  );
}
