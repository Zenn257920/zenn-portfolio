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
      {/* Central bordered column, ~980px wide, like the reference */}
      <main className="mx-auto min-h-screen w-full max-w-[980px] border-x border-line bg-cream shadow-[0_0_40px_rgba(0,0,0,0.04)] dark:border-night-line dark:bg-night">
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
