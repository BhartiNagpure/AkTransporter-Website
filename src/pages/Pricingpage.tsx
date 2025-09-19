import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Pricing from "../components/pricingpage/Pricing";
import BannerSection from "../components/globalcomponents/BannerSection";

export default function PricingPage() {
    const plans = [
        {
            name: "Basic",
            price: "₹4,999",
            duration: "/month",
            features: [
                "5 Local Deliveries",
                "Standard Fleet Access",
                "Basic Insurance Coverage",
                "Email Support",
            ],
            highlight: false,
        },
        {
            name: "Standard",
            price: "₹9,999",
            duration: "/month",
            features: [
                "20 State-wide Deliveries",
                "Priority Fleet Access",
                "Extended Insurance",
                "24/7 Phone Support",
            ],
            highlight: true,
        },
        {
            name: "Premium",
            price: "₹14,999",
            duration: "/month",
            features: [
                "Unlimited Nationwide Deliveries",
                "Dedicated Fleet Manager",
                "Full Coverage Insurance",
                "Priority Customer Support",
            ],
            highlight: false,
        },
    ];

    const title = "Pricing"
    return (
        <section >
           <BannerSection title={title}/>
           <Pricing data={plans}/>
        </section>
    );
}
