import AboutSection from "../components/aboutpage/AboutSection";
import BannerSection from "../components/globalcomponents/BannerSection";

function AboutUs() {
  const title = "About Us"
  return (
    <div>
      <BannerSection title={title} />
      <AboutSection />
    </div>
  );
}

export default AboutUs