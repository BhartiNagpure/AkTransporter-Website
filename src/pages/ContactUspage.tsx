
import BannerSection from "../components/globalcomponents/BannerSection";
import Contact from "../components/contactpage/Contact";
import Map from "../components/contactpage/Map";

function ContactUs() {
    const title = "Contact Us"
    return (
        <section >
            <BannerSection title={title} />
            <Contact />
            <Map />
        </section>
    );
}

export default ContactUs;