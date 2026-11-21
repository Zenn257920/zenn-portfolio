import { getPortfolio } from "@/lib/neon";
import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWorks from "@/components/FeaturedWorks";
import StacksExperience from "@/components/StacksExperience";
import Services from "@/components/Services";
import HireMe from "@/components/HireMe";

// Live from Neon on every request — no caching.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const data = await getPortfolio();
  const profile = data.profile[0];
  return (
    <div className="dot-grid min-h-screen">
      <SideNav name={profile.name} />
      <main className="lg:pl-16">
        <Hero profile={profile} />
        <About profile={profile} skills={data.skills} education={data.education} />
        <FeaturedWorks projects={data.projects} />
        <StacksExperience
          skills={data.skills}
          experience={data.experience}
          education={data.education}
        />
        <Services services={data.services} />
        <HireMe profile={profile} />
      </main>
    </div>
  );
}
