import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact - Andrew McDonald | Pittsburgh",
  description: "Join the men's group in person on Mondays or virtually on Wednesdays, or reach out about breathwork and 1-on-1 coaching.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
