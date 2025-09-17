import AboutSection from "../components/aboutpage/AboutSection";
import Vision from "../components/aboutpage/Vision";
import BannerSection from "../components/globalcomponents/BannerSection";

function AboutUs() {
  const title = "About Us"
  return (
    <div>
      <BannerSection title={title} />
      <AboutSection />
      <Vision/>
    </div>
  );
}

export default AboutUs