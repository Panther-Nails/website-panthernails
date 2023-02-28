import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/HeroLoyalty";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Industries from "../components/industries";
import Stats from "../components/Stats";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <SeoHead title='Loyalty Landing Page' />
      <Layout>
        <Hero />
        <Industries />
         <Feature />
        <Stats />
        <Cta />
        
      </Layout>
    </>
  );
}
