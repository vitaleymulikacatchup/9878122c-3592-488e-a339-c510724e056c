"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';
import { Shield, Percent, Star } from 'lucide-react';

export default function Home() {
  const navbarLinks = [
    { name: "Hero", id: "hero" },
    { name: "About", id: "about" },
    { name: "How to Buy", id: "how-to-buy" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "FAQ", id: "faq" },
    { name: "Footer", id: "footer" }
  ];

  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        navItems={navbarLinks}
        buttonText="Learn more"
        onButtonClick={() => console.log('Click')}  
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to DogMemecoin"
          subtitle="Join the fun with our dog-themed memecoin"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="DogMemecoin is a community-driven cryptocurrency that aims to bring joy to dog lovers everywhere."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy DogMemecoin"
          steps={[
            { title: "Step 1", description: "Download a cryptocurrency wallet", image: "", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase Ethereum", image: "", position: "center", isCenter: true },
            { title: "Step 3", description: "Swap Ethereum for DogMemecoin", image: "", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Our tokenomics are designed to ensure the long-term success of DogMemecoin."
          kpiItems={[
            { value: "10,000,000", description: "Total Supply", icon: Shield },
            { value: "1,000,000", description: "Circulating Supply", icon: Star },
            { value: "5%", description: "Transaction Fee", icon: Percent }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is DogMemecoin?", content: "DogMemecoin is a community-centered cryptocurrency for dog lovers." },
            { title: "How to buy?", content: "You can buy DogMemecoin on various exchanges." },
            { title: "Is it secure?", content: "Yes, DogMemecoin uses the latest blockchain technology to secure transactions." },
            { title: "What are the benefits?", content: "Community-driven projects and charitable donations for animal shelters." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="DogMemecoin Logo"
          logoText="DogMemecoin"
          className="footer-class"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => console.log('Privacy Policy') },
              { label: "Terms of Service", onClick: () => console.log('Terms of Service') },
              { label: "Contact Us", onClick: () => console.log('Contact Us') },
            ] },
            { items: [
              { label: "Telegram", onClick: () => console.log('Telegram') },
              { label: "Twitter", onClick: () => console.log('Twitter') },
            ] },
            { items: [
              { label: "GitHub", onClick: () => console.log('GitHub') },
              { label: "Discord", onClick: () => console.log('Discord') },
            ] },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}