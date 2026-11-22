import { CompanySections } from "@/components/CompanySections";
import { HeroSequence } from "@/components/HeroSequence";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return <main className="min-h-screen bg-[#10131A] text-white"><Navbar /><HeroSequence /><CompanySections /></main>;
}
