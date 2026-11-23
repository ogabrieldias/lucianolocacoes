import { CompanySections } from "@/components/CompanySections";
import { Footer } from "@/components/Footer";
import { ProposalSection } from "@/components/ProposalSection";
import { CorporateValueSection } from "@/components/CorporateValueSection";
import { FleetShowcase } from "@/components/FleetShowcase";
import { HeroSequence } from "@/components/HeroSequence";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return <main className="min-h-screen bg-[#10131A] text-white"><Navbar /><HeroSequence /><FleetShowcase /><CorporateValueSection /><CompanySections /><ProposalSection /><Footer /></main>;
}
