import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { IntroSection } from '../components/sections/IntroSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FeaturedProperties } from '../components/sections/FeaturedProperties';
import { CtaSection } from '../components/sections/CtaSection';
export function HomePage() {
  return <>
      <HeroSection />
      <IntroSection />
      <WhyUsSection />
      <FeaturedProperties />
      <TestimonialsSection />
      <CtaSection />
    </>;
}