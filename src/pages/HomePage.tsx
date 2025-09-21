import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { CEOMessage } from '../components/CEOMessage';
import { ProductCards } from '../components/ProductCards';
import { CompanyGlimpses } from '../components/CompanyGlimpses';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroCarousel />
      <CEOMessage />
      <ProductCards />
      <CompanyGlimpses />
      <ContactSection />
    </div>
  );
};