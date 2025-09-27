import { Hero } from '../components/founders/Hero';
import { EnhancedDueDiligence } from '../components/founders/EnhancedSections';
import { DueDiligenceInvestorAccess, DueDiligenceTalentDiscovery } from '../components/founders/DueDiligenceStyleSections';
import { DueDiligenceOpenSourceTools } from '../components/founders/DueDiligenceStyleSections2';
import { PremiumLegalTemplates, PremiumResourceBank } from '../components/founders/PremiumSections';
import { PremiumBloggingSpace } from '../components/founders/PremiumSections2';
import { PremiumMarketIntelligence, PremiumFinalCTA } from '../components/founders/PremiumSections3';

export default function founders() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EnhancedDueDiligence />
      <DueDiligenceInvestorAccess />
      <DueDiligenceTalentDiscovery />
      <DueDiligenceOpenSourceTools />
      <PremiumLegalTemplates />
      <PremiumResourceBank />
      <PremiumBloggingSpace />
      <PremiumMarketIntelligence />
      <PremiumFinalCTA />
    </div>
  );
}