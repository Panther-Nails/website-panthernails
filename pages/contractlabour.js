import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/HeroLoyalty";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Industries from "../components/industries";
import Stats from "../components/Stats";
import Cta from "../components/Cta";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const listMenus = [
  {
    name: "Home",
    to: "/",
    activeLink: "home",
    displayText: "Home"
  },
  {
    name: "second",
    to: "feature",
    activeLink: "feature",
    displayText: "Second"
  },
  {
    name: "Pricing",
    to: "pricing",
    activeLink: "pricing",
    displayText: "Pricing"
  },
  {
    name: "Testimonial",
    to: "testimoni",
    activeLink: "testimoni",
    displayText: "Testimonial"
  }];



export default function Home() {
  return (
    <>
      <SeoHead title='Loyalty Landing Page' />
      <Header listMenus={listMenus}/>
        <Hero />
        <Stats />
        <Cta />
        <Footer />
    </>
  );
}
