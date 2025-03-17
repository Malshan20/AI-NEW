import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { Home } from "@/components/page"
import { TryNow } from "@/components/try-now";

export default function Page() {
  return (<>
   <Home />
   <FeaturesSection/>
   <AboutSection/>
   <HowItWorks/>
   <TryNow/>
  </>
  );
}